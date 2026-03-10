import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'The 30-60-90 Car Maintenance Rule: What Sacramento Drivers Need to Know',
  description:
    'What is the 30-60-90 rule for cars? Learn exactly what maintenance to do at 30k, 60k, and 90k miles — and how Sacramento\'s heat makes staying on schedule even more critical.',
  alternates: { canonical: 'https://ecmobileauto.com/blog/30-60-90-car-maintenance-rule' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The 30-60-90 Car Maintenance Rule: What Sacramento Drivers Need to Know',
  author: { '@type': 'Person', name: 'Enrique Castillo' },
  publisher: { '@type': 'Organization', name: 'EC Mobile Auto Services LLC', url: 'https://ecmobileauto.com' },
  datePublished: '2026-02-10',
  dateModified: '2026-02-10',
};

const intervals = [
  {
    miles: '30,000 Miles',
    color: 'green',
    intro: 'At 30,000 miles, your vehicle is past its break-in period and entering mature daily-driver territory. This is the first major maintenance milestone, and it\'s when several key items need attention.',
    items: [
      { task: 'Air filter replacement', detail: 'A clogged air filter reduces engine efficiency and fuel economy. In Sacramento, dusty conditions can accelerate filter fouling — check it visually at every oil change.' },
      { task: 'Fuel filter (if serviceable)', detail: 'Many modern vehicles have non-serviceable fuel filters, but if yours has a replaceable one, 30,000 miles is typically the first change interval.' },
      { task: 'Brake fluid replacement', detail: 'Brake fluid is hygroscopic — it absorbs moisture from the air over time, lowering its boiling point and compromising brake performance. Flush every 2 years or 30,000 miles.' },
      { task: 'Tire rotation', detail: 'You should already be rotating every 5,000–7,500 miles, but if you haven\'t been consistent, 30,000 is a good reset point to inspect tread wear patterns and establish a regular schedule.' },
      { task: 'Inspect brake pads and rotors', detail: 'Brake pads should be inspected at every oil change but definitely by 30,000 miles. Typical pads last 25,000–70,000 miles depending on driving style and vehicle weight.' },
      { task: 'Check coolant condition', detail: 'Coolant degrades over time. Check the color and pH — green or orange coolant that has turned brownish or has visible deposits needs to be flushed.' },
    ],
  },
  {
    miles: '60,000 Miles',
    color: 'orange',
    intro: 'The 60,000-mile mark is a significant milestone and the most comprehensive maintenance interval for most vehicles. Several items that were just being monitored at 30,000 miles now need actual replacement.',
    items: [
      { task: 'Spark plug replacement', detail: 'Conventional copper spark plugs should be replaced every 30,000 miles. Iridium or platinum plugs (standard on most modern vehicles) typically last 60,000–100,000 miles. At 60,000, inspect them — if they\'re standard plugs, replace them.' },
      { task: 'Transmission fluid change', detail: 'Automatic transmission fluid breaks down with heat over time. Sacramento\'s summer heat accelerates this. Most manufacturers recommend a change between 30,000–60,000 miles under severe duty conditions (stop-and-go traffic, towing).' },
      { task: 'Coolant flush', detail: 'Even if your coolant looks okay, the corrosion inhibitors deplete over time. A full coolant flush at 60,000 miles protects your aluminum engine components and prevents head gasket issues.' },
      { task: 'Serpentine belt inspection', detail: 'The serpentine belt drives your alternator, power steering pump, and air conditioning compressor. Check for cracking, glazing, or fraying. Many belts last 60,000–100,000 miles, but inspection is essential.' },
      { task: 'Timing belt replacement (if applicable)', detail: 'If your vehicle has a timing belt (not a timing chain), 60,000–90,000 miles is typically the replacement interval. This is a critical component — a broken timing belt will destroy your engine. Check your owner\'s manual.' },
      { task: 'Battery test', detail: 'The average battery lasts 3–5 years. At 60,000 miles (typically 4–7 years of ownership), have your battery load-tested. In Sacramento\'s heat, batteries often fail sooner.' },
      { task: 'Power steering fluid flush', detail: 'Power steering fluid degrades and darkens with age. If your vehicle has hydraulic power steering, a flush at 60,000 miles is good preventive maintenance.' },
    ],
  },
  {
    miles: '90,000 Miles',
    color: 'red',
    intro: 'Ninety thousand miles is a major milestone that many older drivers remember as "major tune-up territory." Modern vehicles need less frequent tune-ups than older ones, but 90,000 miles still deserves serious attention.',
    items: [
      { task: 'Spark plug replacement (copper plugs)', detail: 'If you have standard copper plugs (less common), replace them again. If you have iridium or platinum plugs that went in at 60,000, they may have more life — inspect them.' },
      { task: 'Water pump inspection', detail: 'If your timing belt is being replaced at 90,000 miles, replace the water pump at the same time. It\'s driven by the same belt, and the labor cost is negligible when the belt is already off.' },
      { task: 'Differential fluid change', detail: 'Rear-wheel-drive, four-wheel-drive, and all-wheel-drive vehicles have differentials filled with gear oil. This fluid breaks down with heat and mileage — change it at 90,000 miles.' },
      { task: 'Brake fluid replacement', detail: 'Third change at this interval. If you\'ve been consistent, your braking system remains protected from moisture contamination.' },
      { task: 'Full hose and belt inspection', detail: 'Every rubber hose and belt in the engine bay should be carefully inspected. Rubber degrades with age, heat cycles, and mileage. Look for cracking, swelling, or soft spots.' },
      { task: 'Spark plugs (if premium type)', detail: 'Iridium/platinum plugs installed at 30,000 miles may need replacement by 90,000 miles. Inspect electrode wear carefully.' },
      { task: 'Throttle body cleaning', detail: 'Over 90,000 miles, carbon deposits can build up on the throttle body, causing rough idle or hesitation. Cleaning restores smooth operation.' },
    ],
  },
];

export default function ThirtySixtyNinetyPage() {
  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Maintenance Guide</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            The 30-60-90 Car Maintenance Rule: What Sacramento Drivers Need to Know
          </h1>
          <div className="flex items-center gap-4 text-blue-300 text-sm">
            <span>By Enrique Castillo</span>
            <span>·</span>
            <span>February 10, 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
            <p className="font-bold text-blue-900 text-lg mb-2">What Is the 30-60-90 Rule?</p>
            <p className="text-gray-700">The 30-60-90 rule refers to major maintenance milestones at 30,000, 60,000, and 90,000 miles. At each interval, a specific set of components should be inspected, serviced, or replaced. Staying on this schedule is the single most effective thing you can do to maximize your vehicle&apos;s lifespan and avoid expensive breakdowns.</p>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Why Maintenance Intervals Matter</h2>
          <p className="text-gray-700 mb-4">Your vehicle is a collection of parts with finite lifespans. Oil degrades. Brake fluid absorbs moisture. Spark plugs erode. Belts crack. Batteries weaken. Each of these has a predictable lifespan measured in miles, years, or both.</p>
          <p className="text-gray-700 mb-4">The 30-60-90 rule doesn&apos;t replace your owner&apos;s manual — it&apos;s a useful framework for understanding which milestones require the most attention. Always refer to your specific vehicle&apos;s maintenance schedule, but use 30-60-90 as a mental checkpoint.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-6 mb-4">Sacramento&apos;s Climate Makes This Even More Important</h2>
          <p className="text-gray-700 mb-4">Sacramento&apos;s Central Valley climate is classified as a hot-summer Mediterranean climate. Summers regularly push past 100°F — sometimes reaching 110°F or more. This heat is unusually hard on:</p>
          <ul className="space-y-2 mb-6">
            {[
              'Car batteries (heat accelerates internal corrosion and electrolyte evaporation)',
              'Engine coolant (heat cycles break down inhibitors faster)',
              'Transmission fluid (heat oxidizes fluid faster, especially in stop-and-go Sacramento traffic)',
              'Rubber hoses and belts (UV and heat cause cracking and brittleness)',
              'Brake fluid (higher ambient temperatures lower effective boiling point)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                <span className="text-orange-500 font-bold shrink-0">⚠️</span> {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 mb-8">For Sacramento drivers, staying on top of the 30-60-90 schedule is not just good practice — it&apos;s essential protection against the accelerated wear our climate causes.</p>

          {/* Interval Sections */}
          {intervals.map((interval) => (
            <div key={interval.miles} className="mb-12">
              <h2 className={`text-2xl font-extrabold mb-4 px-6 py-3 rounded-lg ${
                interval.color === 'green' ? 'bg-green-600 text-white' :
                interval.color === 'orange' ? 'bg-orange-500 text-white' :
                'bg-red-600 text-white'
              }`}>
                {interval.miles} Service
              </h2>
              <p className="text-gray-700 mb-6">{interval.intro}</p>
              <div className="space-y-4">
                {interval.items.map((item) => (
                  <div key={item.task} className="card border-l-4 border-gray-200">
                    <h3 className="font-bold text-blue-900 mb-1">{item.task}</h3>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Between the Milestones: Don&apos;t Forget Oil Changes</h2>
          <p className="text-gray-700 mb-4">The 30-60-90 rule covers the major milestones, but in between those intervals, your oil changes are doing the heavy lifting. Most modern vehicles with full synthetic oil need a change every 7,500–10,000 miles. Vehicles on conventional oil should change every 3,000–5,000 miles.</p>
          <p className="text-gray-700 mb-4">A <Link href="/services/mobile-oil-change-sacramento" className="text-orange-500 hover:underline">mobile oil change</Link> from EC Mobile Auto Services takes 20–30 minutes at your location. There is no excuse to go past your change interval when you don&apos;t have to leave home to get it done.</p>
          <p className="text-gray-700 mb-4">For a complete breakdown of what mobile maintenance services cost, see our <Link href="/pricing" className="text-orange-500 hover:underline">pricing page</Link>.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Quick Reference: 30-60-90 Checklist</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="text-left py-3 px-4">Service</th>
                  <th className="py-3 px-4 text-center">30K</th>
                  <th className="py-3 px-4 text-center">60K</th>
                  <th className="py-3 px-4 text-center">90K</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { service: 'Air filter', k30: '✓ Replace', k60: 'Inspect', k90: '✓ Replace' },
                  { service: 'Brake fluid', k30: '✓ Flush', k60: '✓ Flush', k90: '✓ Flush' },
                  { service: 'Spark plugs (iridium)', k30: 'Inspect', k60: '✓ Inspect/Replace', k90: '✓ Replace' },
                  { service: 'Transmission fluid', k30: 'Check', k60: '✓ Change', k90: '✓ Change' },
                  { service: 'Coolant', k30: 'Test/Top off', k60: '✓ Flush', k90: 'Test/Top off' },
                  { service: 'Timing belt (if applicable)', k30: '—', k60: 'Inspect', k90: '✓ Replace' },
                  { service: 'Serpentine belt', k30: 'Inspect', k60: 'Inspect', k90: '✓ Replace' },
                  { service: 'Battery', k30: 'Test', k60: '✓ Test/Replace', k90: '✓ Test/Replace' },
                  { service: 'Tire rotation', k30: '✓', k60: '✓', k90: '✓' },
                  { service: 'Brake pads/rotors', k30: '✓ Inspect', k60: '✓ Inspect/Replace', k90: '✓ Inspect/Replace' },
                ].map((row, i) => (
                  <tr key={row.service} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-2 px-4 font-medium text-gray-800 border-b border-gray-100">{row.service}</td>
                    <td className="py-2 px-4 text-center text-green-700 text-xs border-b border-gray-100">{row.k30}</td>
                    <td className="py-2 px-4 text-center text-orange-600 text-xs border-b border-gray-100">{row.k60}</td>
                    <td className="py-2 px-4 text-center text-red-600 text-xs border-b border-gray-100">{row.k90}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Stay on Schedule Without the Hassle</h2>
          <p className="text-gray-700 mb-4">The biggest obstacle to staying on your maintenance schedule isn&apos;t money — it&apos;s time. Nobody wants to spend a Saturday afternoon at an auto shop. That&apos;s why mobile auto service exists.</p>
          <p className="text-gray-700">EC Mobile Auto Services handles oil changes, tire rotations, brake service, battery replacements, and diagnostics — all at your Sacramento home or office. <Link href="/contact" className="text-orange-500 hover:underline">Book an appointment</Link> or call (916) 517-3286 to get on the right schedule.</p>
        </div>
      </article>

      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-bold text-blue-900 mb-4">Related Resources</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/services/mobile-oil-change-sacramento" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">Mobile Oil Change →</p>
            </Link>
            <Link href="/pricing" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">Service Pricing →</p>
            </Link>
            <Link href="/blog/how-much-does-mobile-mechanic-cost" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">Cost Guide →</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection heading="Keep Your Car on Schedule" subheading="Book a mobile oil change, tire rotation, or multi-point inspection in Sacramento today." />
    </>
  );
}
