import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Can a Mobile Mechanic Come to My Apartment? (Sacramento Guide)',
  description:
    'Yes — mobile mechanics can work in apartment parking lots in most cases. Here\'s how it works in Sacramento, what to tell your leasing office, and tips for a smooth visit.',
  alternates: { canonical: 'https://ecmobileauto.com/blog/can-mobile-mechanic-come-to-apartment' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Can a Mobile Mechanic Come to My Apartment? (Sacramento Guide)',
  author: { '@type': 'Person', name: 'Enrique Castillo' },
  publisher: { '@type': 'Organization', name: 'EC Mobile Auto Services LLC', url: 'https://ecmobileauto.com' },
  datePublished: '2026-03-01',
  dateModified: '2026-03-01',
  description: 'A practical guide for Sacramento apartment residents who want to use mobile mechanic service.',
};

export default function ApartmentMechanicPage() {
  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Practical Guide</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Can a Mobile Mechanic Come to My Apartment? (Sacramento Guide)
          </h1>
          <div className="flex items-center gap-4 text-blue-300 text-sm">
            <span>By Enrique Castillo</span>
            <span>·</span>
            <span>March 1, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">

          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <p className="font-bold text-green-800 text-lg mb-2">Short Answer: Yes, in Most Cases</p>
            <p className="text-gray-700">Mobile mechanics can work in apartment parking lots for most routine services. Oil changes, battery replacements, brake pad swaps, and diagnostic work can all be done right in your assigned parking spot. Here&apos;s everything you need to know to make it happen smoothly.</p>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Why Apartment Residents Hesitate — And Why They Shouldn&apos;t</h2>
          <p className="text-gray-700 mb-4">Many Sacramento apartment dwellers assume mobile mechanics only work at houses with driveways. It&apos;s a reasonable assumption, but it&apos;s not accurate. Apartment parking lots — whether surface lots, covered carports, or structured garages — can work fine for the vast majority of mobile auto services.</p>
          <p className="text-gray-700 mb-4">The main thing we need is access to your vehicle and a reasonably level surface. Standard apartment parking lots check both boxes. In fact, a large percentage of our customers in Sacramento are apartment residents in areas like Natomas, Midtown, Arden-Arcade, and Elk Grove.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">What Services Work Best at Apartments</h2>
          <p className="text-gray-700 mb-4">Not every service is equally suited to a parking lot environment, but here are the services that work very well:</p>
          <ul className="space-y-2 text-gray-700 mb-6">
            {[
              'Oil changes — our most common apartment service. We bring a drip mat so there\'s no mess on the asphalt.',
              'Battery replacement — done in 15–20 minutes. The parking lot doesn\'t matter at all for this one.',
              'Brake pads and rotors — we use portable jack stands on level surfaces. Most parking lots work fine.',
              'Check engine diagnostics — just need access to the OBD-II port under the dash. No tools required outside the car.',
              'Tire rotation — portable equipment handles this completely.',
              'Serpentine belt replacement and tune-up services in most cases.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-green-500 font-bold shrink-0">✓</span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">HOA and Leasing Office Considerations</h2>
          <p className="text-gray-700 mb-4">Most apartment leasing offices and HOAs have no explicit policy against mobile mechanics working in the parking lot — it&apos;s simply not something most property managers have thought about. In the rare cases where a complex does have a restriction, it&apos;s typically aimed at preventing residents from running extended DIY repair projects that leave grease stains, create safety hazards, or occupy spaces for hours.</p>
          <p className="text-gray-700 mb-4">A professional mobile mechanic is different. We arrive in a service vehicle, complete the work efficiently (usually 20–40 minutes), keep the area clean with drip mats and spill containment, and leave. There&apos;s no lingering, no mess, and no extended occupation of the lot.</p>
          <p className="text-gray-700 mb-4">That said, if you want to be proactive, here&apos;s what to say to your leasing office:</p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="font-bold text-blue-900 mb-2">What to Tell Your Leasing Office</p>
            <p className="text-gray-700 italic text-sm">&quot;I have a licensed, insured mobile mechanic coming to do routine maintenance on my car — an oil change. They&apos;ll be here for about 30 minutes, will keep everything clean, and will be done before you know it. Is that okay?&quot;</p>
            <p className="text-gray-700 text-sm mt-3">In our experience, this framing gets a &quot;yes&quot; almost every time. You&apos;re not asking permission to do DIY repairs — you&apos;re describing a professional service call.</p>
          </div>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">What About Covered Parking and Garages?</h2>
          <p className="text-gray-700 mb-4">Covered carports are usually fine — we need basic clearance to work around the vehicle, and standard carports provide that. Multi-story parking garages are a different story. The main concern is ventilation when running the engine briefly, clearance for our service vehicle, and the logistics of carrying equipment up ramps or elevators.</p>
          <p className="text-gray-700 mb-4">For structured garages, the best approach is to pull your car down to the surface lot (if there is one) for the appointment, or contact us so we can assess whether your specific garage works. In many cases, it does.</p>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">5 Tips for a Smooth Apartment Oil Change</h2>
          <ol className="space-y-4 text-gray-700 mb-8">
            <li className="flex gap-4">
              <span className="font-bold text-blue-900 shrink-0">1.</span>
              <div><strong>Tell us about your parking situation when you book.</strong> Mention whether it&apos;s an outdoor lot, covered carport, or garage. We can advise on any adjustments.</div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-900 shrink-0">2.</span>
              <div><strong>Make sure your parking spot is accessible.</strong> Clear out any bikes, furniture, or items stored around your vehicle before we arrive.</div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-900 shrink-0">3.</span>
              <div><strong>Know your parking rules.</strong> If your complex has visitor parking restrictions or gate codes, provide those details when you book so we can access the lot.</div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-900 shrink-0">4.</span>
              <div><strong>Let a neighbor know if you&apos;re worried.</strong> If you share a parking row with neighbors, a quick heads-up that a mobile mechanic will be working nearby can prevent any unnecessary calls to management.</div>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-900 shrink-0">5.</span>
              <div><strong>Check for lease restrictions proactively.</strong> If your lease explicitly prohibits vehicle maintenance in the lot, consider scheduling service at a nearby street spot or asking to use guest parking where the restriction may not apply.</div>
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">The Bottom Line for Sacramento Apartment Residents</h2>
          <p className="text-gray-700 mb-4">Apartment living in Sacramento doesn&apos;t mean giving up the convenience of mobile auto service. From Natomas apartments near Truxel Road to Elk Grove complexes in the Laguna area, we&apos;ve serviced vehicles in hundreds of apartment parking lots across the region.</p>
          <p className="text-gray-700 mb-4">The most popular service for apartment residents, by far, is the <Link href="/services/mobile-oil-change-sacramento" className="text-orange-500 hover:underline">mobile oil change</Link>. It&apos;s quick, clean, and completely practical in a parking lot environment. If you&apos;ve been putting off your oil change because you don&apos;t have a driveway, that&apos;s not a reason — call us and we&apos;ll come to you.</p>
          <p className="text-gray-700 mb-4">Have questions about whether your specific parking situation will work? <Link href="/contact" className="text-orange-500 hover:underline">Contact us</Link> or call (916) 517-3286. We&apos;re happy to talk through the details before you book.</p>
        </div>
      </article>

      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-bold text-blue-900 mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/blog/how-long-does-mobile-oil-change-take" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">How Long Does a Mobile Oil Change Take? →</p>
            </Link>
            <Link href="/blog/mobile-mechanic-vs-shop" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">Mobile Mechanic vs. Auto Shop →</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection heading="Ready to Book Your Apartment Oil Change?" subheading="We come to Sacramento apartment parking lots every day. Call (916) 517-3286 — same-day often available." />
    </>
  );
}
