"""
DataForSEO Research Script — EC Mobile Auto Services LLC
=========================================================
Pulls keyword volumes + SERP competitor data for Sacramento mobile auto repair.

SETUP: Fill in your credentials below, then run:
    python dataforseo_research.py

Results are saved to:
    - keyword_data.json   (raw data)
    - serp_data.json      (raw data)
    - seo_report.txt      (human-readable summary)
"""

import json
import http.client
import base64
from datetime import datetime

# ─────────────────────────────────────────────
# YOUR DATAFORSEO CREDENTIALS — FILL THESE IN
# ─────────────────────────────────────────────
LOGIN    = "login-here"       # e.g. youremail@gmail.com
PASSWORD = "password-here"    # DataForSEO API password
# ─────────────────────────────────────────────

BASE_URL = "api.dataforseo.com"

# Target keywords — Sacramento mobile auto focus
KEYWORDS = [
    # Primary money terms
    "mobile oil change Sacramento",
    "mobile mechanic Sacramento",
    "mobile auto repair Sacramento",
    "oil change at home Sacramento",
    "mechanic that comes to you Sacramento",
    "mobile mechanic near me Sacramento",
    "same day mobile mechanic Sacramento",
    # City variants
    "mobile oil change Elk Grove CA",
    "mobile mechanic Elk Grove CA",
    "mobile oil change Rancho Cordova",
    "mobile mechanic Rancho Cordova",
    "mobile oil change Roseville CA",
    "mobile mechanic Roseville CA",
    "mobile oil change Citrus Heights",
    "mobile mechanic Folsom CA",
    "mobile mechanic Carmichael CA",
    "mobile mechanic Fair Oaks CA",
    # Service variants
    "mobile synthetic oil change Sacramento",
    "oil change at home Elk Grove",
    "mobile brake repair Sacramento",
    "mobile battery replacement Sacramento",
    "mobile check engine light Sacramento",
    "pre purchase inspection mobile mechanic Sacramento",
    # Question / intent keywords
    "how much does a mobile oil change cost Sacramento",
    "is a mobile mechanic cheaper than a shop",
    "can a mobile mechanic come to my apartment",
    "how long does a mobile oil change take",
    "mobile mechanic at work parking lot Sacramento",
]

# SERP competitor check — top head terms
SERP_TARGETS = [
    "mobile mechanic Sacramento",
    "mobile oil change Sacramento",
    "mobile mechanic near me Sacramento",
    "mobile auto repair Sacramento",
    "oil change at home Sacramento",
]

# Sacramento, CA — DataForSEO location code
LOCATION_CODE = 1014221   # Sacramento, CA
LANGUAGE_CODE = "en"


def get_auth_header():
    token = base64.b64encode(f"{LOGIN}:{PASSWORD}".encode()).decode()
    return {"Authorization": f"Basic {token}", "Content-Type": "application/json"}


def post(endpoint, payload):
    conn = http.client.HTTPSConnection(BASE_URL)
    headers = get_auth_header()
    conn.request("POST", endpoint, json.dumps(payload), headers)
    response = conn.getresponse()
    data = json.loads(response.read().decode())
    conn.close()
    return data


def fetch_keyword_volumes():
    print("\n[1/2] Fetching keyword search volumes from Google Ads data...")
    payload = [
        {
            "location_code": LOCATION_CODE,
            "language_code": LANGUAGE_CODE,
            "keywords": KEYWORDS,
        }
    ]
    result = post("/v3/keywords_data/google_ads/search_volume/live", payload)

    with open("keyword_data.json", "w") as f:
        json.dump(result, f, indent=2)
    print("      Saved raw data → keyword_data.json")
    return result


def fetch_serp_data():
    print("\n[2/2] Fetching SERP competitor data for head keywords...")
    payload = [
        {
            "keyword": kw,
            "location_code": LOCATION_CODE,
            "language_code": LANGUAGE_CODE,
            "device": "mobile",
            "depth": 10,  # top 10 results
        }
        for kw in SERP_TARGETS
    ]
    result = post("/v3/serp/google/organic/live/advanced", payload)

    with open("serp_data.json", "w") as f:
        json.dump(result, f, indent=2)
    print("      Saved raw data → serp_data.json")
    return result


def parse_keywords(raw):
    rows = []
    try:
        for task in raw.get("tasks", []):
            for result in task.get("result", []) or []:
                rows.append({
                    "keyword":    result.get("keyword", ""),
                    "volume":     result.get("search_volume", 0),
                    "competition": result.get("competition_level", "N/A"),
                    "cpc":        result.get("cpc", 0),
                })
    except Exception as e:
        print(f"  Warning: could not parse keyword data — {e}")
    return sorted(rows, key=lambda x: x["volume"] or 0, reverse=True)


def parse_serp(raw):
    results = {}
    try:
        for task in raw.get("tasks", []):
            keyword = task.get("data", {}).get("keyword", "unknown")
            organic = []
            for res in task.get("result", []) or []:
                items = res.get("items", []) or []
                for item in items:
                    if item.get("type") == "organic":
                        organic.append({
                            "rank":   item.get("rank_absolute"),
                            "title":  item.get("title", ""),
                            "url":    item.get("url", ""),
                            "domain": item.get("domain", ""),
                        })
            results[keyword] = organic[:10]
    except Exception as e:
        print(f"  Warning: could not parse SERP data — {e}")
    return results


def write_report(kw_rows, serp_results):
    lines = []
    ts = datetime.now().strftime("%Y-%m-%d %H:%M")

    lines += [
        "=" * 70,
        "  EC MOBILE AUTO SERVICES LLC — DataForSEO Research Report",
        f"  Generated: {ts}",
        "=" * 70,
        "",
    ]

    # ── Keyword Volume Table ──────────────────────────────────────────────
    lines += [
        "SECTION 1: KEYWORD SEARCH VOLUMES (Sacramento, CA)",
        "-" * 70,
        f"{'Keyword':<45} {'Volume':>8}  {'Competition':<14} {'CPC':>6}",
        f"{'-'*45} {'-'*8}  {'-'*14} {'-'*6}",
    ]

    for r in kw_rows:
        vol   = f"{r['volume']:,}" if r['volume'] else "N/A"
        comp  = r['competition']
        cpc   = f"${r['cpc']:.2f}" if r['cpc'] else "N/A"
        lines.append(f"{r['keyword']:<45} {vol:>8}  {comp:<14} {cpc:>6}")

    lines += [""]

    # ── Priority Tier Breakdown ───────────────────────────────────────────
    high   = [r for r in kw_rows if (r['volume'] or 0) >= 1000]
    medium = [r for r in kw_rows if 200 <= (r['volume'] or 0) < 1000]
    low    = [r for r in kw_rows if 0 < (r['volume'] or 0) < 200]

    lines += [
        "SECTION 2: KEYWORD PRIORITY TIERS",
        "-" * 70,
        f"  HIGH VOLUME (1,000+/mo) — Build dedicated service/location pages:",
    ]
    for r in high:
        lines.append(f"    • {r['keyword']} ({r['volume']:,}/mo)")

    lines += [f"\n  MEDIUM VOLUME (200-999/mo) — Include in blog + supporting pages:"]
    for r in medium:
        lines.append(f"    • {r['keyword']} ({r['volume']:,}/mo)")

    lines += [f"\n  LONG-TAIL (<200/mo) — Use naturally in content, FAQ, blog:"]
    for r in low:
        lines.append(f"    • {r['keyword']} ({r['volume'] or '<10'}/mo)")

    lines += [""]

    # ── SERP Competitor Analysis ──────────────────────────────────────────
    lines += [
        "SECTION 3: SERP COMPETITOR ANALYSIS (Mobile, Sacramento CA)",
        "-" * 70,
    ]
    for keyword, results in serp_results.items():
        lines += [f"\n  Keyword: \"{keyword}\"", f"  {'Rank':<6} {'Domain':<35} {'Title'}"]
        lines.append(f"  {'-'*6} {'-'*35} {'-'*30}")
        for r in results:
            title = r['title'][:50] + "..." if len(r['title']) > 50 else r['title']
            lines.append(f"  #{r['rank']:<5} {r['domain']:<35} {title}")

    # ── Competitor Frequency Count ────────────────────────────────────────
    domain_count = {}
    for results in serp_results.values():
        for r in results:
            d = r['domain']
            domain_count[d] = domain_count.get(d, 0) + 1

    lines += [
        "",
        "SECTION 4: MOST DOMINANT COMPETITOR DOMAINS",
        "-" * 70,
        "  (appearing across multiple target keyword SERPs)",
        "",
    ]
    for domain, count in sorted(domain_count.items(), key=lambda x: x[1], reverse=True):
        bar = "█" * count
        lines.append(f"  {domain:<40} {bar} ({count} keyword{'s' if count > 1 else ''})")

    lines += [
        "",
        "=" * 70,
        "  Next Steps:",
        "  1. Build dedicated pages for all HIGH VOLUME keywords first",
        "  2. Review competitor pages in Section 3 — note content depth",
        "  3. Any competitor appearing 3+ times = study their site carefully",
        "  4. Target MEDIUM volume keywords via blog posts",
        "  5. Weave LONG-TAIL keywords naturally into FAQ sections",
        "=" * 70,
    ]

    report = "\n".join(lines)
    with open("seo_report.txt", "w", encoding="utf-8") as f:
        f.write(report)

    print("\n" + report)
    print(f"\n  Saved human-readable report → seo_report.txt")


def main():
    if "YOUR_EMAIL" in LOGIN or "YOUR_PASSWORD" in PASSWORD:
        print("\n  ERROR: Please fill in your DataForSEO credentials at the top of the script.")
        print("         LOGIN    = 'your@email.com'")
        print("         PASSWORD = 'your_api_password'")
        return

    print("\nEC Mobile Auto Services — DataForSEO Research")
    print("=" * 50)

    kw_raw    = fetch_keyword_volumes()
    serp_raw  = fetch_serp_data()

    kw_rows      = parse_keywords(kw_raw)
    serp_results = parse_serp(serp_raw)

    write_report(kw_rows, serp_results)
    print("\nDone. Check seo_report.txt for the full summary.\n")


if __name__ == "__main__":
    main()
