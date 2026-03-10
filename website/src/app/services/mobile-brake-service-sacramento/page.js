import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Brake Service Sacramento CA | Pads, Rotors & More | EC Mobile Auto',
  description:
    'Mobile brake pad and rotor replacement in Sacramento, CA. Warning signs, pricing, and same-day service available. We come to you. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/services/mobile-brake-service-sacramento' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Brake Service Sacramento CA',
  description: 'Mobile brake pad replacement, rotor resurfacing, and brake inspection service in Sacramento, CA.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165173286',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  areaServed: ['Sacramento', 'Elk Grove', 'Rancho Cordova', 'Folsom', 'Citrus Heights', 'Roseville'],
  offers: [
    { '@type': 'Offer', name: 'Brake Pad Replacement (per axle)', price: '150', priceCurrency: 'USD' },
  ],
};

const warningSigns = [
  { icon: '🔊', sign: 'Squealing or Squeaking', detail: 'Most brake pads have a small metal wear indicator that squeals when pads get thin. If you hear this noise when slowing down, it\'s time for an inspection.' },
  { icon: '😬', sign: 'Grinding Noise', detail: 'Grinding means the pads are completely worn and metal is contacting metal. This can damage your rotors quickly — don\'t ignore it.' },
  { icon: '📳', sign: 'Vibration When Braking', detail: 'If your steering wheel or brake pedal vibrates when you stop, your rotors may be warped. This is often from overheating or uneven wear.' },
  { icon: '⬅️', sign: 'Car Pulls to One Side', detail: 'If your car drifts left or right when braking, one brake caliper may be sticking or pads may be wearing unevenly.' },
  { icon: '💡', sign: 'Brake Warning Light', detail: 'Some vehicles have a dedicated brake pad wear sensor. If your dashboard shows a brake warning, have it checked immediately.' },
  { icon: '🦶', sign: 'Soft or Spongy Pedal', detail: 'A brake pedal that sinks close to the floor may indicate low brake fluid or air in the brake lines — both need immediate attention.' },
];

const included = [
  'Remove wheels and inspect all brake components',
  'Measure brake pad thickness (front and rear)',
  'Inspect rotors for wear, scoring, and warping',
  'Replace brake pads (included in service price)',
  'Lubricate caliper slide pins and contact points',
  'Check brake fluid level and condition',
  'Inspect brake hoses and calipers for leaks',
  'Torque lug nuts to manufacturer specification',
  'Road test to verify proper brake function',
];

const faqs = [
  {
    question: 'How long does a mobile brake job take?',
    answer: 'A standard front or rear brake pad replacement typically takes 60–90 minutes. If rotors need replacement as well, plan for 90–120 minutes. We\'ll give you an accurate estimate when you describe the symptoms.',
  },
  {
    question: 'Do you replace rotors too?',
    answer: 'Yes. We can replace rotors on most vehicles. If your rotors are above the minimum thickness, we may recommend only replacing pads. If they\'re scored, warped, or too thin, rotor replacement is the safer option. We\'ll show you the measurements before making a recommendation.',
  },
  {
    question: 'How much does mobile brake service cost?',
    answer: 'Brake pad replacement starts at $150 per axle, which includes pads and labor. Rotor replacement is additional and varies by vehicle. We provide a firm quote before any work begins. Visit our pricing page for more detail.',
  },
  {
    question: 'Can you do brakes in my apartment parking lot?',
    answer: 'Usually, yes — as long as the parking lot is paved and relatively level. We bring a floor jack and jack stands, so we don\'t need a lift for most brake jobs. Just make sure there\'s reasonable space around the vehicle.',
  },
  {
    question: 'What brake pad brands do you use?',
    answer: 'We use quality OEM-equivalent and premium aftermarket pads from brands like Raybestos, Bosch, and Akebono depending on your vehicle and preference. We don\'t use cheap no-name pads — your safety depends on it.',
  },
];

export default function MobileBrakeServicePage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Auto Service · Sacramento, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Brake Service in Sacramento, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Squealing or grinding brakes? Don&apos;t risk it. We inspect and replace brake pads and rotors at your home or office — no shop visit required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165173286" className="btn-primary text-lg">📞 Call (916) 517-3286</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online →</Link>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Warning Signs You Need Brake Service</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Brakes are your most important safety system. If you notice any of these symptoms, don&apos;t wait — call us for a same-day mobile brake inspection.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((item) => (
              <div key={item.sign} className="card">
                <div className="text-3xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-blue-900 mb-2">{item.sign}</h3>
                <p className="text-gray-600 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing + Included */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-heading">What&apos;s Included</h2>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-heading">Pricing</h2>
            <div className="space-y-4">
              <div className="card border-l-4 border-orange-500">
                <h3 className="font-bold text-blue-900 text-lg">Brake Pad Replacement</h3>
                <p className="text-3xl font-extrabold text-orange-500">From $150 <span className="text-base font-normal text-gray-500">per axle</span></p>
                <p className="text-gray-600 text-sm mt-1">Includes pads and labor. Front or rear axle.</p>
              </div>
              <div className="card border-l-4 border-blue-500">
                <h3 className="font-bold text-blue-900 text-lg">Brake Rotor Replacement</h3>
                <p className="text-xl font-bold text-blue-700">Price varies by vehicle</p>
                <p className="text-gray-600 text-sm mt-1">Call for a quote. Rotors + pads typically $200–$350 per axle.</p>
              </div>
              <div className="card border-l-4 border-green-500">
                <h3 className="font-bold text-blue-900 text-lg">Brake Inspection</h3>
                <p className="text-xl font-bold text-green-600">Free with service</p>
                <p className="text-gray-600 text-sm mt-1">We inspect all four corners and give you a full report.</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-4">No trip fee within service area. Prices are estimates; final quote given before work begins.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">Brake Service FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Don't Drive on Bad Brakes" subheading="Book a mobile brake inspection today — we come to you anywhere in Sacramento County." />
    </>
  );
}
