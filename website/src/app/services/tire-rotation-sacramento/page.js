import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Tire Rotation Sacramento CA | EC Mobile Auto Services',
  description:
    'Mobile tire rotation service in Sacramento, CA. Extend tire life and improve safety. We come to you. Starting at $30. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/services/tire-rotation-sacramento' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Tire Rotation Sacramento CA',
  description: 'Mobile tire rotation service in Sacramento, CA. We rotate your tires at your home or workplace to extend tire life and improve vehicle handling.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165550100',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  offers: [{ '@type': 'Offer', name: 'Tire Rotation', price: '30', priceCurrency: 'USD' }],
};

const faqs = [
  {
    question: 'How often should I rotate my tires?',
    answer: 'Most manufacturers recommend tire rotation every 5,000–7,500 miles, or every other oil change. Rotating at this interval ensures all four tires wear evenly and extends their overall lifespan significantly.',
  },
  {
    question: 'Why do front tires wear faster?',
    answer: 'On front-wheel-drive vehicles, the front tires handle acceleration, steering, and most braking — that\'s a lot of work. They typically wear 30–50% faster than rear tires. Regular rotation moves them to the rear where they wear more slowly, evening out the overall wear.',
  },
  {
    question: 'Can you rotate tires in my driveway or parking lot?',
    answer: 'Yes. We use a professional floor jack and four jack stands to safely lift the vehicle. We need a relatively flat, paved surface with clearance on all sides of the vehicle. Most driveways and parking lots work perfectly.',
  },
  {
    question: 'Do you check tire pressure during the rotation?',
    answer: 'Absolutely. We check and adjust tire pressure on all four tires to the manufacturer-recommended specification (found on the door jamb sticker) every time. Proper inflation is just as important as rotation for even tire wear.',
  },
  {
    question: 'How long does a mobile tire rotation take?',
    answer: 'Most tire rotations take 30–45 minutes at your location. If combined with an oil change, we can do both in about 45–60 minutes total.',
  },
];

export default function TireRotationPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Auto Service · Sacramento, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Tire Rotation in Sacramento, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Skip the tire shop wait. We rotate your tires at your home or workplace — a simple service that can add 20,000+ miles to your tire lifespan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165550100" className="btn-primary text-lg">📞 Call (916) 555-0100</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online →</Link>
          </div>
        </div>
      </section>

      {/* Why Rotate */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Why Tire Rotation Matters</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Tires are expensive. A full set of quality tires for a typical Sacramento commuter vehicle costs $400–$800 or more. Regular rotation is the single best thing you can do to extend that investment.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '💰', title: 'Save Money on Tires', desc: 'Even tire wear across all four tires means you replace them all at once instead of replacing two prematurely. A $30 rotation can save you $200+ in early tire replacement.' },
              { icon: '🛡️', title: 'Improve Safety', desc: 'Unevenly worn tires reduce traction, increase stopping distances, and handle poorly in wet conditions. Sacramento\'s rainy season needs all the traction you can get.' },
              { icon: '🚗', title: 'Better Ride & Handling', desc: 'Evenly worn tires improve your vehicle\'s handling balance, steering responsiveness, and overall ride comfort. Your car will feel better to drive.' },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-heading">What&apos;s Included</h2>
            <ul className="space-y-3">
              {[
                'Remove all four wheels',
                'Rotate tires using the correct pattern for your vehicle (FWD, RWD, AWD)',
                'Inspect tires for damage, cracks, or abnormal wear patterns',
                'Check tread depth on all four tires',
                'Re-mount wheels in new positions',
                'Torque all lug nuts to manufacturer specification',
                'Adjust tire pressure on all four tires',
                'Advise on any concerns (rotation pattern irregularities, time to replace)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-heading">Pricing</h2>
            <div className="card border-l-4 border-orange-500 mb-6">
              <h3 className="font-bold text-blue-900">Tire Rotation</h3>
              <p className="text-4xl font-extrabold text-orange-500">From $30</p>
              <p className="text-gray-600 text-sm mt-1">Standard 4-tire rotation with pressure check and torque. No trip fee within service area.</p>
            </div>
            <div className="card bg-blue-50 border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2">Bundle &amp; Save</h3>
              <p className="text-gray-700 text-sm">Add a tire rotation to your oil change appointment for just $25 (save $5). Most people don&apos;t realize how easy it is to combine both services in one visit.</p>
            </div>
            <div className="mt-6">
              <h3 className="font-bold text-blue-900 mb-2">When to Rotate</h3>
              <p className="text-gray-700 text-sm">Every 5,000–7,500 miles or every other oil change. If you notice uneven tread wear, vibration at highway speeds, or your car pulling to one side, it may be time to rotate sooner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">Tire Rotation FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Get a Mobile Tire Rotation Today" subheading="We come to your location anywhere in Sacramento County. No tire shop wait — just results." />
    </>
  );
}
