import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Sacramento Summer Car Maintenance Checklist (Beat the 100°F Heat)',
  description:
    'Sacramento summers push vehicles to their limits. Here\'s your complete summer car maintenance checklist — coolant, AC, battery, tires, and more — before the heat arrives.',
  alternates: { canonical: 'https://ecmobileauto.com/blog/sacramento-summer-car-maintenance' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sacramento Summer Car Maintenance Checklist (Beat the 100°F Heat)',
  author: { '@type': 'Person', name: 'Enrique Castillo' },
  publisher: { '@type': 'Organization', name: 'EC Mobile Auto Services LLC', url: 'https://ecmobileauto.com' },
  datePublished: '2026-05-01',
  dateModified: '2026-05-01',
  description: 'Complete summer car maintenance checklist for Sacramento drivers facing 100+ degree temperatures.',
};

export default function SummerCarMaintenancePage() {
  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Seasonal Guide</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Sacramento Summer Car Maintenance Checklist (Beat the 100°F Heat)
          </h1>
          <div className="flex items-center gap-4 text-blue-300 text-sm">
            <span>By Enrique Castillo</span>
            <span>·</span>
            <span>May 1, 2026</span>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
            <p className="font-bold text-orange-800 text-lg mb-2">Sacramento Heat Is No Joke for Your Car</p>
            <p className="text-gray-700">Sacramento regularly hits 100–110°F in July and August. That kind of heat is hard on cooling systems, batteries, tires, and air conditioning. The good news: a few simple checks done before summer arrives can prevent a breakdown in the hottest part of the year. Here&apos;s your complete checklist.</p>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">1. Coolant System — Your Engine&apos;s First Line of Defense</h2>
          <p className="text-gray-700 mb-4">Your cooling system is your engine&apos;s primary protection against the Sacramento summer. Coolant (antifreeze) doesn&apos;t just prevent freezing in winter — it raises the boiling point of the water in your cooling system, allowing your engine to run safely at operating temperatures even when the outside air is 105°F.</p>
          <p className="text-gray-700 mb-4">What to check before summer:</p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">→</span><span><strong>Coolant level:</strong> Look at the overflow reservoir (not the radiator cap on a hot engine). It should be between the MIN and MAX lines.</span></li>
            <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">→</span><span><strong>Coolant condition:</strong> Coolant degrades over time and becomes acidic, which corrodes your cooling system from the inside. If yours is more than 2–3 years old, a <Link href="/services/coolant-flush-sacramento" className="text-orange-500 hover:underline">coolant flush</Link> is worth doing before summer.</span></li>
            <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">→</span><span><strong>Hose condition:</strong> Squeeze the upper radiator hose. It should feel firm but pliable — not rock-hard (sign of age) or mushy (sign of internal deterioration).</span></li>
            <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">→</span><span><strong>Thermostat:</strong> If your temperature gauge runs higher than normal, your thermostat may be sticking. This is a summer breakdown waiting to happen.</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">2. Air Conditioning — Non-Negotiable in Sacramento</h2>
          <p className="text-gray-700 mb-4">When it&apos;s 105°F outside, a functioning AC isn&apos;t a luxury — it&apos;s a safety issue. Heatstroke is a real danger, and a vehicle interior parked in Sacramento summer sun can reach 150°F within minutes.</p>
          <p className="text-gray-700 mb-4">Signs your AC needs attention before summer:</p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">→</span><span>Air blows but doesn&apos;t get cold, or takes a long time to cool down</span></li>
            <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">→</span><span>Weak airflow even on highest fan setting</span></li>
            <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">→</span><span>Unusual smells when AC is running (musty = mold, sweet = refrigerant leak)</span></li>
            <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">→</span><span>AC was &quot;fine&quot; at the end of last summer — refrigerant leaks slowly, so a year off can leave you short when you need it most</span></li>
          </ul>
          <p className="text-gray-700 mb-4">Don&apos;t wait until the first 95°F day in June to discover your AC doesn&apos;t work. Schedule an <Link href="/services/mobile-ac-service-sacramento" className="text-orange-500 hover:underline">AC service</Link> in April or May when demand is lower and you can get an appointment quickly.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">3. Battery — Heat Kills Batteries, Not Just Cold</h2>
          <p className="text-gray-700 mb-4">Most people associate dead batteries with cold weather. But extreme heat actually does more long-term damage to batteries by causing the electrolyte solution to evaporate and internal components to corrode. If your battery is 3 years or older, have it tested before summer.</p>
          <p className="text-gray-700 mb-4">Sacramento&apos;s summer heat is particularly punishing because batteries are also taxed more in summer — the AC compressor draws significant power, and stop-and-go traffic on I-5 and US-50 keeps the alternator working constantly.</p>
          <p className="text-gray-700 mb-4">A battery test takes about 5 minutes. If yours is showing signs of weakness, replacing it in May or June — before it fails on a hot August afternoon — is far cheaper and less stressful than a jump start or tow. EC Mobile Auto Services does <Link href="/services/mobile-battery-replacement-sacramento" className="text-orange-500 hover:underline">mobile battery replacement</Link> at your home or office.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">4. Tire Pressure — Heat Expands Air</h2>
          <p className="text-gray-700 mb-4">For every 10°F increase in temperature, tire pressure increases by approximately 1 PSI. That means a tire properly inflated at 35 PSI on a 50°F morning will read 38–40 PSI on a 95°F Sacramento afternoon. Overinflated tires have less contact with the road, wear unevenly, and are more susceptible to blowouts.</p>
          <p className="text-gray-700 mb-4">Check your tire pressure first thing in the morning (before driving, when tires are cold) and compare to the recommended spec on your door jamb sticker — not the max pressure listed on the tire itself. Check all four tires and the spare if applicable.</p>
          <p className="text-gray-700 mb-4">Also check your tread depth. The quarter test is quick: insert a quarter into a tread groove with Washington&apos;s head facing down. If you can see all of his head, your tread is below 4/32" and replacement should be on your near-term radar.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">5. Oil Viscosity in Hot Weather</h2>
          <p className="text-gray-700 mb-4">Modern full synthetic oils handle Sacramento summer temperatures well with standard viscosity ratings (5W-30, 0W-20, etc. — whatever your manufacturer recommends). However, if your vehicle is older and was originally spec&apos;d for conventional oil with a higher viscosity, running a thicker-weight oil in summer can offer additional protection when oil temperatures rise.</p>
          <p className="text-gray-700 mb-4">The best rule: follow your manufacturer&apos;s viscosity recommendation. Modern engine tolerances are tight and were designed around specific oil specs. Using a heavier weight than recommended can actually hurt fuel economy and flow to tight tolerances without meaningful benefit. If you&apos;re unsure, ask us when you schedule your oil change — we check the spec before every service.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">6. Cabin Air Filter — Comfort and Health</h2>
          <p className="text-gray-700 mb-4">Sacramento air quality in summer isn&apos;t always great. Wildfire smoke from the Sierra foothills, agricultural dust from the valley, and general air pollution make a functioning cabin air filter important for the health and comfort of everyone in your vehicle.</p>
          <p className="text-gray-700 mb-4">Cabin air filters are often overlooked because they&apos;re not part of standard oil change checklists at many shops. They should typically be replaced every 15,000–20,000 miles or once per year. A clogged cabin filter also reduces AC airflow — so if your AC feels weak even though refrigerant is fine, a dirty cabin filter could be the simple culprit.</p>
          <p className="text-gray-700 mb-4">We inspect your cabin air filter during every mobile service and can replace it on the spot if needed.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Your Summer Pre-Check List</h2>
          <ul className="space-y-2 text-gray-700 mb-8">
            {[
              'Coolant level and condition (flush if over 2 years old)',
              'Test and inspect AC — service before peak heat',
              'Battery test (especially if 3+ years old)',
              'Check tire pressure (cold, in the morning)',
              'Inspect tire tread depth',
              'Confirm oil is current — synthetic for most modern vehicles',
              'Replace cabin air filter if due',
              'Check wiper blades (summer thunderstorms are possible)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-orange-500 font-bold shrink-0">□</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <p className="text-gray-700 mb-4">EC Mobile Auto Services can handle all of the above at your Sacramento home or office. Call (916) 517-3286 to book a pre-summer vehicle check — we&apos;ll go through the whole list and flag anything that needs attention before the summer heat peaks.</p>
        </div>
      </article>

      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-bold text-blue-900 mb-4">Related Services</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Link href="/services/mobile-ac-service-sacramento" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">Mobile AC Service →</p>
            </Link>
            <Link href="/services/coolant-flush-sacramento" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">Coolant Flush →</p>
            </Link>
            <Link href="/services/mobile-battery-replacement-sacramento" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">Battery Replacement →</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection heading="Beat the Summer Heat — Book a Pre-Season Check" subheading="We come to your Sacramento home or office. Call (916) 517-3286 to schedule today." />
    </>
  );
}
