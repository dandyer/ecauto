import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Battery Replacement Sacramento CA | Free Test | EC Mobile Auto',
  description:
    'Dead battery in Sacramento? EC Mobile Auto Services tests and replaces your car battery on-site. Free battery test. Sacramento heat kills batteries fast. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/services/mobile-battery-replacement-sacramento' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Battery Replacement Sacramento CA',
  description: 'Mobile car battery testing and replacement service in Sacramento, CA. We come to your home or office. Free battery test included.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165173286',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  offers: [
    { '@type': 'Offer', name: 'Battery Test', price: '0', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Battery Replacement (includes battery)', price: '120', priceCurrency: 'USD' },
  ],
};

const faqs = [
  {
    question: 'How do I know if my battery is dying vs. my alternator?',
    answer: 'If your car starts after a jump but dies again quickly, the alternator may not be charging the battery. If the battery won\'t hold a charge at all, the battery is likely the problem. We use a professional battery and alternator tester to diagnose accurately on-site.',
  },
  {
    question: 'How long does a mobile battery replacement take?',
    answer: 'Most battery replacements take 20–30 minutes. Some European vehicles require software registration of the new battery (BMW, Mercedes, Audi), which adds 15–20 minutes but is critical for proper charging system function.',
  },
  {
    question: 'How much does mobile battery replacement cost in Sacramento?',
    answer: 'Our battery replacement service starts at $120, which includes the battery itself and installation. Battery prices vary based on the battery size and type your vehicle requires. We\'ll give you an exact price when you call.',
  },
  {
    question: 'What battery brands do you carry?',
    answer: 'We carry Interstate, Duralast, and ACDelco batteries in common sizes. For less common sizes, we may need to source the battery before your appointment — usually available same or next day.',
  },
  {
    question: 'Will I lose my radio settings when you replace the battery?',
    answer: 'Possibly. Modern vehicles can reset various electronic settings when power is interrupted. We use a memory keeper tool where available to minimize this. For vehicles that require it, we\'ll walk you through any resetting needed.',
  },
];

export default function MobileBatteryPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Auto Service · Sacramento, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Battery Replacement in Sacramento, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Dead or weak battery? We come to you — test your battery for free and replace it on the spot. Don&apos;t get stranded in Sacramento&apos;s summer heat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165173286" className="btn-primary text-lg">📞 Call (916) 517-3286</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online →</Link>
          </div>
        </div>
      </section>

      {/* Sacramento Heat Angle */}
      <section className="py-16 px-4 bg-amber-50 border-y border-amber-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-6 items-start">
            <div className="text-5xl shrink-0">☀️</div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-3">Sacramento Heat Is Hard on Car Batteries</h2>
              <p className="text-gray-700 mb-3">Most people assume cold weather kills batteries — and it does. But extreme heat is actually just as damaging, and Sacramento summers regularly push past 100°F. High temperatures accelerate the internal corrosion inside your battery and cause the electrolyte solution to evaporate, permanently reducing capacity.</p>
              <p className="text-gray-700 mb-3">The average car battery lasts 3–5 years in moderate climates. In Sacramento, that lifespan can shorten to 2–4 years. If your battery is more than 3 years old and you&apos;re experiencing slow starts, electrical issues, or a dim dashboard, it&apos;s worth having it tested before it fails at the worst possible moment.</p>
              <p className="text-gray-700 font-medium">We offer a <span className="text-orange-500">free battery test</span> — no appointment necessary. Call us and we&apos;ll tell you exactly where your battery stands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-heading">What We Do</h2>
            <ul className="space-y-3">
              {[
                'Perform a professional battery load test (not just a voltage check)',
                'Test the charging system and alternator output',
                'Inspect battery terminals for corrosion',
                'Clean battery terminals if needed',
                'Remove old battery and install new one',
                'Register battery with vehicle computer (BMW, Mercedes, Audi, etc.)',
                'Verify charging system is working properly after replacement',
                'Properly recycle your old battery',
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
            <div className="space-y-4">
              <div className="card border-l-4 border-green-500">
                <h3 className="font-bold text-blue-900">Battery Test</h3>
                <p className="text-3xl font-extrabold text-green-600">FREE</p>
                <p className="text-gray-600 text-sm mt-1">Professional load test, not just a voltage check. We tell you if your battery is good, weak, or failing.</p>
              </div>
              <div className="card border-l-4 border-orange-500">
                <h3 className="font-bold text-blue-900">Battery Replacement</h3>
                <p className="text-3xl font-extrabold text-orange-500">From $120</p>
                <p className="text-gray-600 text-sm mt-1">Includes the battery, installation, and terminal cleaning. Price varies by vehicle/battery size.</p>
              </div>
            </div>

            <div className="card mt-6 bg-blue-50 border border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2">Signs Your Battery May Be Failing</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                {[
                  'Slow or sluggish engine start',
                  'Headlights dimming at idle',
                  'Battery warning light on dashboard',
                  'Electrical accessories acting erratically',
                  'Battery is 3+ years old',
                  'Corrosion visible on battery terminals',
                ].map((sign) => (
                  <li key={sign} className="flex items-center gap-2">
                    <span className="text-red-500">⚠️</span> {sign}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">Battery Replacement FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Need a New Battery?" subheading="Call now for mobile battery testing and same-day replacement at your home or office in Sacramento County." />
    </>
  );
}
