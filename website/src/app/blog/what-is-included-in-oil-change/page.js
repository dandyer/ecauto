import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: "What's Included in an Oil Change? Everything You Should Expect",
  description:
    "A complete breakdown of what's included in a proper oil change — drain, filter, fluids, inspection, and reset. What good shops include vs. bare minimum.",
  alternates: { canonical: 'https://ecmobileauto.com/blog/what-is-included-in-oil-change' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "What's Included in an Oil Change? Everything You Should Expect",
  author: { '@type': 'Person', name: 'Enrique Castillo' },
  publisher: { '@type': 'Organization', name: 'EC Mobile Auto Services LLC', url: 'https://ecmobileauto.com' },
  datePublished: '2026-03-06',
  dateModified: '2026-03-06',
  description: "A complete breakdown of what's included in a professional oil change — and what separates a thorough service from a bare-minimum one.",
};

export default function WhatIsIncludedOilChangePage() {
  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Buyer&apos;s Guide</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            What&apos;s Included in an Oil Change? Everything You Should Expect
          </h1>
          <div className="flex items-center gap-4 text-blue-300 text-sm">
            <span>By Enrique Castillo</span>
            <span>·</span>
            <span>March 6, 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="font-bold text-blue-900 text-lg mb-2">Not All Oil Changes Are Equal</p>
            <p className="text-gray-700">A $29.99 quick-lube special and a $85 full synthetic mobile oil change both technically change your oil. But what else is — or isn&apos;t — included matters a lot. This guide breaks down every component of a proper oil change, so you know what to expect and what to demand.</p>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">The Core Service: What Every Oil Change Must Include</h2>
          <p className="text-gray-700 mb-4">These are the non-negotiable steps that must happen in every professional oil change. If any of these are skipped, you&apos;re not getting a proper service:</p>

          <div className="space-y-6 mb-8">
            {[
              {
                step: 'Step 1',
                title: 'Drain the Old Oil',
                desc: 'The technician removes the drain plug from the oil pan and allows all old oil to drain completely into a collection container. This sounds simple, but proper draining matters — rushing this step leaves contaminated oil mixed with the fresh oil you\'re paying for. A good technician waits until dripping nearly stops before moving on.',
              },
              {
                step: 'Step 2',
                title: 'Inspect the Drain Plug and Replace the Washer',
                desc: 'The drain plug threads into your oil pan. The copper or aluminum crush washer that creates the seal between plug and pan should be replaced or at minimum inspected at every oil change. A reused washer that\'s been crushed too many times can weep oil over time. This is a pennies-cost step that many shops skip to save seconds.',
              },
              {
                step: 'Step 3',
                title: 'Remove and Replace the Oil Filter',
                desc: 'The oil filter traps particulates as oil circulates through your engine. Over time, it becomes saturated with captured debris — including metal shavings from normal engine wear. A new filter at every oil change is non-negotiable. There are two main types: spin-on filters (most common, replaced as a unit) and cartridge filters (common in European vehicles, just the filter element is replaced). Both should be new every time.',
              },
              {
                step: 'Step 4',
                title: 'Add Fresh Oil — Correct Type and Amount',
                desc: 'New oil is added to the manufacturer\'s specified capacity and viscosity. This is where cutting corners is common: using the wrong viscosity (5W-30 vs 0W-20, for example), underfilling to save cost, or using the wrong oil grade for your engine. A professional checks your door jamb sticker, owner\'s manual, or oil cap spec before adding anything. Getting this wrong can void your warranty and damage your engine.',
              },
              {
                step: 'Step 5',
                title: 'Verify No Leaks',
                desc: 'After adding fresh oil and running the engine for 1–2 minutes, a professional technician checks underneath and around the filter for any drips. This catches cross-threaded drain plugs, improperly installed filters, or failed gaskets before you drive away and distribute oil across your driveway.',
              },
              {
                step: 'Step 6',
                title: 'Verify Oil Level on Dipstick',
                desc: 'A final dipstick check confirms the oil is at the correct fill level and the engine was filled properly. This is also an opportunity to show the customer — the oil on the dipstick should be a clear amber/golden color, not black, milky, or foamy.',
              },
            ].map((item) => (
              <div key={item.step} className="border border-gray-200 rounded-xl p-5">
                <div className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1">{item.step}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">What a Thorough Oil Change Adds On Top</h2>
          <p className="text-gray-700 mb-4">Beyond the core steps, a professional mobile mechanic or full-service shop should include these at no extra charge:</p>

          <ul className="space-y-3 text-gray-700 mb-8">
            {[
              { item: 'Coolant level check', detail: 'Look at the overflow reservoir — is it between MIN and MAX? A low coolant level suggests a leak or evaporation that should be investigated.' },
              { item: 'Brake fluid level check', detail: "Low brake fluid often means worn brake pads (as pads wear thinner, the caliper piston extends further, consuming more fluid). It's a quick but informative check." },
              { item: 'Power steering fluid check (where applicable)', detail: "Electric power steering systems don't have fluid, but hydraulic systems do. Quick to check, easy to top off." },
              { item: 'Windshield washer fluid top-off', detail: "Simple courtesy step. We add washer fluid as needed — especially important ahead of Sacramento's bug season in spring and early summer." },
              { item: 'Tire pressure check', detail: "Checking all four tires (and the spare if accessible) adds a few minutes but catches dangerously low or overinflated tires that affect safety and fuel economy." },
              { item: 'Air filter visual inspection', detail: "Popping the hood to visually inspect the engine air filter takes 30 seconds. A clogged air filter reduces performance and fuel economy. We note condition and advise if replacement is due — no pressure." },
              { item: 'Oil life monitor reset', detail: "Most vehicles built since 2010 have an oil life monitoring system. A proper service resets this so the vehicle accurately tracks your next change interval. Sounds minor, but if this is skipped you get premature warnings." },
              { item: 'Reminder sticker', detail: "A simple sticker inside the windshield showing date, mileage, and next service due. Old-fashioned but useful — especially for people who track service history manually." },
            ].map((row) => (
              <li key={row.item} className="flex items-start gap-3">
                <span className="text-green-500 font-bold shrink-0 mt-0.5">✓</span>
                <div>
                  <span className="font-semibold text-blue-900">{row.item}</span>
                  <span className="text-gray-600 text-sm"> — {row.detail}</span>
                </div>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">What Bare-Minimum Shops Skip</h2>
          <p className="text-gray-700 mb-4">To hit a low price point, some discount oil change operations cut corners in these areas:</p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">✗</span><span>Skipping the drain plug washer replacement (minor but adds up over time)</span></li>
            <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">✗</span><span>Not checking fluid levels or just doing a cursory glance</span></li>
            <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">✗</span><span>Not resetting the oil life monitor (leaves you with inaccurate tracking)</span></li>
            <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">✗</span><span>Not verifying for leaks after startup (you discover the leak in your driveway)</span></li>
            <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">✗</span><span>Using the wrong oil viscosity for your vehicle without checking the spec</span></li>
            <li className="flex items-start gap-2"><span className="text-red-500 shrink-0">✗</span><span>Using a cheap generic filter when your vehicle benefits from an OEM-spec filter</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">What&apos;s NOT Included (And Shouldn&apos;t Be Automatic)</h2>
          <p className="text-gray-700 mb-4">Some shops use oil changes as an upsell opportunity, recommending add-on services during every visit regardless of actual need. These are legitimate services but should only be performed when actually needed:</p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start gap-2"><span className="text-blue-500 shrink-0">—</span><span>Engine air filter replacement (should only be replaced when dirty or at manufacturer-recommended interval)</span></li>
            <li className="flex items-start gap-2"><span className="text-blue-500 shrink-0">—</span><span>Cabin air filter replacement (same — inspect and advise, not auto-replace)</span></li>
            <li className="flex items-start gap-2"><span className="text-blue-500 shrink-0">—</span><span>Fuel system treatment or additives (rarely necessary for modern vehicles)</span></li>
            <li className="flex items-start gap-2"><span className="text-blue-500 shrink-0">—</span><span>Coolant flush (legitimate service, but on a schedule — not every oil change)</span></li>
            <li className="flex items-start gap-2"><span className="text-blue-500 shrink-0">—</span><span>Transmission fluid change (important, but on its own schedule)</span></li>
          </ul>
          <p className="text-gray-700 mb-4">At EC Mobile Auto Services, we inspect and advise — we&apos;ll tell you what we see and let you make the call. We don&apos;t auto-add services to every visit.</p>

          <p className="text-gray-700 mb-4">Ready for a professional mobile oil change that includes all of the above? See our <Link href="/services/mobile-oil-change-sacramento" className="text-orange-500 hover:underline">mobile oil change service page</Link> or check our <Link href="/pricing" className="text-orange-500 hover:underline">pricing page</Link> for full details. Call (916) 555-0100 to book — we serve all of Sacramento County.</p>
        </div>
      </article>

      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-bold text-blue-900 mb-4">Related</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/services/mobile-oil-change-sacramento" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">Mobile Oil Change Service →</p>
            </Link>
            <Link href="/blog/how-long-does-mobile-oil-change-take" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">How Long Does a Mobile Oil Change Take? →</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection heading="Get Everything You Should Expect — Included" subheading="EC Mobile Auto Services includes all of the above in every oil change. Call (916) 555-0100 to book." />
    </>
  );
}
