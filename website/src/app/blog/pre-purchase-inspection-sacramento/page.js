import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Why You Need a Pre-Purchase Car Inspection in Sacramento (Before You Buy)',
  description:
    'A pre-purchase inspection in Sacramento can save you thousands. Learn what inspectors look for, what it costs, and why it\'s essential for private seller and dealership purchases alike.',
  alternates: { canonical: 'https://ecmobileauto.com/blog/pre-purchase-inspection-sacramento' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Why You Need a Pre-Purchase Car Inspection in Sacramento (Before You Buy)',
  author: { '@type': 'Person', name: 'Enrique Castillo' },
  publisher: { '@type': 'Organization', name: 'EC Mobile Auto Services LLC', url: 'https://ecmobileauto.com' },
  datePublished: '2026-03-09',
  dateModified: '2026-03-09',
  description: 'Complete guide to pre-purchase car inspections in Sacramento — what\'s checked, what it costs, and how much it can save you.',
};

export default function PrePurchaseInspectionBlogPage() {
  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Car Buying Guide · Sacramento</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Why You Need a Pre-Purchase Car Inspection in Sacramento (Before You Buy)
          </h1>
          <div className="flex items-center gap-4 text-blue-300 text-sm">
            <span>By Enrique Castillo</span>
            <span>·</span>
            <span>March 9, 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
            <p className="font-bold text-orange-800 text-lg mb-2">The $100 That Can Save You $5,000</p>
            <p className="text-gray-700">A pre-purchase inspection (PPI) typically costs $100–$150. The repairs we&apos;ve helped buyers avoid — hidden rust damage, blown head gaskets, failing transmissions, flood damage — regularly total in the thousands. The math is simple: get the inspection.</p>
          </div>

          <p className="text-gray-700 mb-6 text-lg leading-relaxed">Sacramento&apos;s used car market is active. Craigslist, Facebook Marketplace, and private sellers across Elk Grove, Rancho Cordova, and the broader region list hundreds of vehicles every week. Some are great deals. Some have significant hidden problems. A pre-purchase inspection is the tool that tells you which is which before money changes hands.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">What Is a Pre-Purchase Inspection?</h2>
          <p className="text-gray-700 mb-4">A pre-purchase inspection is a systematic, professional examination of a used vehicle before you commit to buying it. A trained mechanic goes through the vehicle comprehensively — engine, transmission, brakes, suspension, electrical systems, body condition, and more — and provides a report on what they find.</p>
          <p className="text-gray-700 mb-4">The goal isn&apos;t to nitpick every minor cosmetic issue. It&apos;s to identify problems that affect safety, reliability, and the true cost of ownership — things the seller may not disclose (or may not even know about).</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">What a Good Pre-Purchase Inspection Covers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {[
              { category: 'Engine', items: ['Oil condition and color (milky = coolant contamination)', 'Leak inspection (valve cover, oil pan, head gasket)', 'Belt condition (timing belt, serpentine)', 'Hose condition', 'Start-up behavior and idle quality'] },
              { category: 'Transmission', items: ['Fluid condition and level', 'Shift quality through all gears (automatic)', 'Manual clutch feel and engagement point', 'Any hesitation or slippage'] },
              { category: 'Brakes', items: ['Pad thickness (front and rear)', 'Rotor condition (scoring, warping)', 'Caliper condition', 'Brake lines for corrosion'] },
              { category: 'Suspension & Steering', items: ['Shock absorber condition', 'Ball joints, tie rod ends, bushings', 'Steering feel for looseness or pulling', 'Wheel bearing check'] },
              { category: 'Electrical', items: ['OBD-II scan for stored codes (including cleared codes)', 'Battery health test', 'AC and heat function', 'Lights, windows, all accessories'] },
              { category: 'Body & Frame', items: ['Panel gaps (indicator of prior collision)', 'Rust on frame, wheel wells, undercarriage', 'Paint inconsistencies or overspray', 'Door hinge and seal condition'] },
            ].map((cat) => (
              <div key={cat.category} className="card">
                <h3 className="font-bold text-blue-900 mb-2">{cat.category}</h3>
                <ul className="space-y-1">
                  {cat.items.map((item) => (
                    <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <span className="text-orange-400 shrink-0">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">How Much Does a Pre-Purchase Inspection Cost in Sacramento?</h2>
          <p className="text-gray-700 mb-4">In Sacramento, a thorough pre-purchase inspection runs $100–$150 from an independent mobile mechanic. Traditional shop inspections may run similar or higher. Dealer inspections — even on vehicles at different dealers — can be less objective since the inspecting dealer may have an interest in the outcome.</p>
          <p className="text-gray-700 mb-4">EC Mobile Auto Services charges $100 for a comprehensive pre-purchase inspection. We come to the location of the vehicle — the seller&apos;s home, a dealer lot, a parking lot — so you don&apos;t need to coordinate a drive to a shop.</p>
          <p className="text-gray-700 mb-4">For context on value: the average American spends $12,000–$18,000 on a used vehicle purchase. Spending $100 to verify the condition of a $12,000 investment is objectively rational. The question isn&apos;t whether an inspection is worth it — it&apos;s whether you can afford to skip it.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Real Examples: What We&apos;ve Found for Sacramento Buyers</h2>
          <p className="text-gray-700 mb-4">Without disclosing personal details, here are categories of problems we&apos;ve identified during pre-purchase inspections in the Sacramento area:</p>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li className="bg-red-50 border border-red-100 rounded-lg p-4">
              <strong className="text-red-700">Head gasket failure:</strong> A 2012 Honda Accord listed at $9,500 had white smoke during cold start and milky oil — both indicators of coolant mixing with oil. Head gasket replacement: $1,500–$2,500. Buyer walked away.
            </li>
            <li className="bg-orange-50 border border-orange-100 rounded-lg p-4">
              <strong className="text-orange-700">Flood damage:</strong> A 2015 Toyota Camry had significant corrosion in the electrical harness under the dashboard and a musty odor despite a recent detail. Electrical issues from flood-damaged vehicles can cost thousands to diagnose and repair. Buyer walked away.
            </li>
            <li className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
              <strong className="text-yellow-700">Hidden collision damage:</strong> A 2018 Ford F-150 had mismatched panel gaps at the driver&apos;s door and overspray on the door jamb — signs of repair work not disclosed by the seller. Frame check revealed minor structural damage. Buyer negotiated $2,000 off asking price.
            </li>
            <li className="bg-green-50 border border-green-100 rounded-lg p-4">
              <strong className="text-green-700">Clean report:</strong> Many vehicles pass inspection with only minor findings. Getting a clean report is equally valuable — it gives you confidence that you&apos;re buying a solid car at a fair price.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Private Seller vs. Dealership: Does It Matter?</h2>
          <p className="text-gray-700 mb-4"><strong>Private sellers:</strong> Highest risk. No warranty, no recourse after the sale in most cases. &quot;As-is&quot; is the standard for private party sales in California. A pre-purchase inspection is most critical here.</p>
          <p className="text-gray-700 mb-4"><strong>Independent used car dealers:</strong> Variable risk. California does require used car dealers to provide a minimum statutory warranty on vehicles under a certain age and mileage, but this doesn&apos;t cover everything. Inspection still strongly recommended.</p>
          <p className="text-gray-700 mb-4"><strong>Franchise dealerships (certified pre-owned):</strong> Lower but not zero risk. CPO programs include inspections, but those inspections are done by the dealer. An independent inspection gives you a second opinion from someone with no stake in the sale.</p>
          <p className="text-gray-700 mb-4">The bottom line: get an independent inspection regardless of seller type. The cost is the same, and the value is always there.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">How to Use Inspection Results as a Negotiating Tool</h2>
          <p className="text-gray-700 mb-4">A pre-purchase inspection isn&apos;t just a pass/fail test. Even when a vehicle is fundamentally sound, inspection findings can give you negotiating leverage:</p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">→</span><span>Worn brake pads: document the cost of replacement and ask the seller to either fix it or deduct the cost from the price.</span></li>
            <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">→</span><span>Old tires: use tread depth readings to estimate replacement cost and factor into your offer.</span></li>
            <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">→</span><span>Pending maintenance items: if the timing belt is due, the transmission fluid is dark, or the coolant is degraded — these are real costs you&apos;ll incur after purchase. Price them in.</span></li>
          </ul>
          <p className="text-gray-700 mb-4">A good inspector will give you repair cost estimates alongside findings — this makes the negotiation conversation straightforward and data-driven.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Book a Pre-Purchase Inspection in Sacramento</h2>
          <p className="text-gray-700 mb-4">EC Mobile Auto Services offers pre-purchase inspections throughout Sacramento County. We come to the vehicle location — your advantage is you don&apos;t need to arrange transporting a vehicle you haven&apos;t bought yet. See our full <Link href="/services/pre-purchase-inspection-sacramento" className="text-orange-500 hover:underline">pre-purchase inspection service page</Link> for details, or call (916) 517-3286 to schedule. We typically offer same-day or next-day availability for inspections.</p>
        </div>
      </article>

      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-bold text-blue-900 mb-4">Related</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/services/pre-purchase-inspection-sacramento" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">Pre-Purchase Inspection Service →</p>
            </Link>
            <Link href="/blog/mobile-mechanic-vs-shop" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">Mobile Mechanic vs. Auto Shop →</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection heading="Buying a Used Car? Get a PPI First." subheading="We come to the vehicle location anywhere in Sacramento County. Call (916) 517-3286 to book your inspection." />
    </>
  );
}
