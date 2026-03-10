import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'How Long Does a Mobile Oil Change Take? (Honest Answer)',
  description:
    'Most mobile oil changes take 25–35 minutes. Here\'s the honest breakdown — what happens during the service, what affects timing, and how to prepare for a fast, clean visit.',
  alternates: { canonical: 'https://ecmobileauto.com/blog/how-long-does-mobile-oil-change-take' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How Long Does a Mobile Oil Change Take? (Honest Answer)',
  author: { '@type': 'Person', name: 'Enrique Castillo' },
  publisher: { '@type': 'Organization', name: 'EC Mobile Auto Services LLC', url: 'https://ecmobileauto.com' },
  datePublished: '2026-03-08',
  dateModified: '2026-03-08',
  description: 'Honest breakdown of mobile oil change timing — from 25 minutes for a simple job to 45 minutes for more complex situations.',
};

export default function HowLongOilChangePage() {
  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Service Guide</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            How Long Does a Mobile Oil Change Take? (Honest Answer)
          </h1>
          <div className="flex items-center gap-4 text-blue-300 text-sm">
            <span>By Enrique Castillo</span>
            <span>·</span>
            <span>March 8, 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="font-bold text-blue-900 text-xl mb-1">The Direct Answer</p>
            <p className="text-gray-700 text-lg">A mobile oil change typically takes <strong>25 to 35 minutes</strong> from the time the technician arrives at your vehicle. Simple jobs on common vehicles run closer to 25 minutes. More complex situations can extend to 40–45 minutes. Here&apos;s the full breakdown.</p>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">The Timeline: Minute by Minute</h2>
          <p className="text-gray-700 mb-6">For a typical mobile oil change — say, a 2018 Toyota Camry with a standard 5W-30 full synthetic oil change — here&apos;s roughly what happens and when:</p>

          <div className="space-y-4 mb-8">
            {[
              { time: '0:00–2:00', step: 'Setup', desc: 'Park service vehicle, retrieve oil and filter pre-staged for your specific car, lay drip mat under engine, gather tools. Warmup inspection while car cools slightly (if recently driven).' },
              { time: '2:00–7:00', step: 'Drain old oil', desc: 'Remove drain plug, drain oil into sealed waste container. Draining time varies by oil viscosity and temperature — hot oil drains faster than cold.' },
              { time: '7:00–15:00', step: 'While oil drains', desc: 'Remove and replace oil filter. Check brake fluid, power steering fluid, coolant level. Top off washer fluid. Check and note tire pressure. This is all done during the drain — not sequential.' },
              { time: '15:00–20:00', step: 'Reinstall drain plug', desc: 'Replace drain plug washer if needed, torque to spec. Reinstall oil filter. Verify no leaks before adding new oil.' },
              { time: '20:00–25:00', step: 'Add new oil', desc: 'Add the correct amount of new oil. Start engine, watch oil pressure indicator, check for leaks around filter and drain plug. Let engine run for 1–2 minutes.' },
              { time: '25:00–30:00', step: 'Verify and wrap up', desc: 'Check oil level on dipstick — show you the reading. Reset oil life monitor. Affix oil change reminder sticker. Remove drip mat, pack up equipment, review any findings with you.' },
            ].map((item) => (
              <div key={item.time} className="flex gap-4 items-start">
                <div className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded shrink-0 mt-0.5 min-w-[80px] text-center">{item.time}</div>
                <div>
                  <p className="font-bold text-blue-900">{item.step}</p>
                  <p className="text-gray-600 text-sm mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Factors That Can Add Time</h2>
          <p className="text-gray-700 mb-4">Here are the situations that can push a mobile oil change closer to 40–45 minutes:</p>

          <ul className="space-y-4 text-gray-700 mb-8">
            <li>
              <strong className="text-blue-900">Cartridge-style oil filters:</strong> Some European vehicles (BMW, Mercedes, Volkswagen) use a cartridge filter housed in a canister rather than a spin-on filter. These require a different removal tool and take a few extra minutes. Not a big deal — just adds 5 minutes.
            </li>
            <li>
              <strong className="text-blue-900">Difficult drain plug location:</strong> On some vehicles, the drain plug is recessed or awkwardly positioned relative to crossmembers. Rare, but it happens and adds a few minutes.
            </li>
            <li>
              <strong className="text-blue-900">Stuck oil filter:</strong> Filters that were over-tightened at the last service can be stubborn. We carry filter removal tools for this, but it adds time.
            </li>
            <li>
              <strong className="text-blue-900">High oil capacity:</strong> Some trucks and performance vehicles require 7–8 quarts of oil. More oil means a longer drain and slightly more fill time. We always confirm capacity before arriving.
            </li>
            <li>
              <strong className="text-blue-900">Stripped drain plug:</strong> If a previous shop cross-threaded or stripped the drain plug, we may need to address that before completing the oil change. We&apos;ll discuss options with you on the spot.
            </li>
            <li>
              <strong className="text-blue-900">Multi-point inspection findings:</strong> If we notice something worth discussing — a cracked belt, a fluid that looks concerning, a tire that&apos;s significantly low — we&apos;ll take a few minutes to show you and explain. You always have the option to say &quot;I&apos;ll deal with it later&quot; — no pressure.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Compare to a Traditional Shop Visit</h2>
          <p className="text-gray-700 mb-4">A quick-lube shop might also claim &quot;30 minutes.&quot; But that clock doesn&apos;t include your drive there, wait in line, the actual service time in the bay, wait to check out, and drive home. For most Sacramento drivers, a shop oil change genuinely consumes 60–90 minutes of your day when you add up all the travel and waiting.</p>
          <p className="text-gray-700 mb-4">A mobile oil change is 25–35 minutes — total. Your car doesn&apos;t leave. You don&apos;t leave. You can work, watch the kids, or relax inside. When we&apos;re done, your car is ready and you haven&apos;t lost your morning.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">How to Prepare for a Fast Oil Change</h2>
          <p className="text-gray-700 mb-4">Want the service to go as smoothly and quickly as possible? Here&apos;s what helps:</p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span><span>Have your vehicle year, make, model, and current mileage ready when you book so we arrive with the correct oil and filter.</span></li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span><span>Park on a level surface if possible — a steep slope slows the drain and makes the level check less accurate.</span></li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span><span>If your car was running, let us know — we prefer to work with a warm engine, but we&apos;ll brief you on timing if it&apos;s very hot.</span></li>
            <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span><span>Clear any items stored near or under your vehicle — bikes, boxes, etc. that might block access to the undercarriage.</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">The Bottom Line</h2>
          <p className="text-gray-700 mb-4">If someone tells you a mobile oil change takes an hour, they&apos;re either overpromising or doing something very thorough. If someone says 15 minutes, they&apos;re rushing. The honest range for a professional, thorough mobile oil change is <strong>25–35 minutes</strong>.</p>
          <p className="text-gray-700 mb-4">EC Mobile Auto Services serves Sacramento County — including Elk Grove, Folsom, Rancho Cordova, Roseville, Citrus Heights, Carmichael, and the surrounding communities. See our <Link href="/services/mobile-oil-change-sacramento" className="text-orange-500 hover:underline">mobile oil change service page</Link> or call (916) 555-0100 to book.</p>
        </div>
      </article>

      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-bold text-blue-900 mb-4">Related</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/services/mobile-oil-change-sacramento" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">Mobile Oil Change Service →</p>
            </Link>
            <Link href="/blog/what-is-included-in-oil-change" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">What&apos;s Included in an Oil Change? →</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection heading="Book a Mobile Oil Change Today" subheading="25–35 minutes at your home or office. No trip to the shop. Call (916) 555-0100." />
    </>
  );
}
