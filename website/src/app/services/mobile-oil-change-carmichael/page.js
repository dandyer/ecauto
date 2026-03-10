import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Oil Change in Carmichael, CA | EC Mobile Auto Services',
  description:
    'Mobile oil change in Carmichael, CA. We come to your home or apartment on Manzanita or Fair Oaks Blvd. Conventional, synthetic & high-mileage. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/services/mobile-oil-change-carmichael' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Oil Change Carmichael CA',
  description: 'Mobile oil change service in Carmichael, CA — we come to you.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165173286',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  areaServed: { '@type': 'Place', name: 'Carmichael', containedIn: { '@type': 'State', name: 'California' } },
  offers: [
    { '@type': 'Offer', name: 'Conventional Oil Change', price: '65', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Full Synthetic Oil Change', price: '85', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'High-Mileage Oil Change', price: '95', priceCurrency: 'USD' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you service vehicles in Carmichael apartment complexes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work in apartment parking lots along Manzanita Ave, Fair Oaks Blvd, and throughout Carmichael. Any parking spot with clear access to your vehicle works for us.' },
    },
    {
      '@type': 'Question',
      name: 'My Carmichael home has a steep driveway — is that a problem?',
      acceptedAnswer: { '@type': 'Answer', text: 'We need a reasonably level surface to safely drain and refill your oil. If your driveway is very steep, we can use the street in front of your home or the nearest flat surface. Just let us know when you book.' },
    },
    {
      '@type': 'Question',
      name: 'How do I schedule a mobile oil change in Carmichael?',
      acceptedAnswer: { '@type': 'Answer', text: 'Call (916) 517-3286 or use our online booking form. Tell us your vehicle make, model, year, and your Carmichael address. We\'ll confirm a time window that works for you — often same-day or next-day.' },
    },
  ],
};

const faqs = [
  {
    question: 'Do you service vehicles in Carmichael apartment complexes?',
    answer: 'Yes. We work in apartment parking lots along Manzanita Ave, Fair Oaks Blvd, and throughout Carmichael. Any parking spot with clear access to your vehicle works for us.',
  },
  {
    question: 'My Carmichael home has a steep driveway — is that a problem?',
    answer: "We need a reasonably level surface to safely drain and refill your oil. If your driveway is very steep, we can use the street in front of your home or the nearest flat surface. Just let us know when you book.",
  },
  {
    question: 'How do I schedule a mobile oil change in Carmichael?',
    answer: "Call (916) 517-3286 or use our online booking form. Tell us your vehicle make, model, year, and your Carmichael address. We'll confirm a time window that works for you — often same-day or next-day.",
  },
];

export default function OilChangeCarmichaelPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/services" className="hover:text-white">Services</Link>
            <span className="mx-2">→</span>
            <Link href="/services/mobile-oil-change-sacramento" className="hover:text-white">Mobile Oil Change</Link>
            <span className="mx-2">→</span>
            <span className="text-white">Carmichael</span>
          </nav>
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Oil Change · Carmichael, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Oil Change in Carmichael, CA — We Come to You
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Carmichael homeowners and apartment residents get professional oil changes at their location. No need to navigate Fair Oaks Blvd traffic — we come to your driveway or parking spot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165173286" className="btn-primary text-lg">📞 Call (916) 517-3286</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online →</Link>
          </div>
        </div>
      </section>

      {/* Oil Type Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Choose Your Oil Type</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">All oil changes include a new filter, fluid top-offs, and oil disposal. No trip fee in Carmichael.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🛢️',
                name: 'Conventional',
                price: 'From $65',
                desc: "Best for Carmichael's older vehicles that have always run on conventional oil. Up to 5 quarts plus filter.",
                recommended: 'Pre-2008 vehicles on conventional',
              },
              {
                icon: '⚡',
                name: 'Full Synthetic',
                price: 'From $85',
                desc: 'Superior protection and longer drain intervals. Ideal for modern engines in all weather conditions.',
                recommended: '2010+ vehicles, turbocharged engines',
                featured: true,
              },
              {
                icon: '🔩',
                name: 'High-Mileage',
                price: 'From $95',
                desc: "Designed for engines with 75,000+ miles — common in Carmichael's established community. Seal conditioners included.",
                recommended: 'Vehicles with 75,000+ miles',
              },
            ].map((oil) => (
              <div key={oil.name} className={`card relative ${oil.featured ? 'border-2 border-orange-500' : ''}`}>
                {oil.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                )}
                <div className="text-4xl mb-3">{oil.icon}</div>
                <h3 className="text-xl font-bold text-blue-900">{oil.name} Oil Change</h3>
                <p className="text-3xl font-extrabold text-orange-500 my-2">{oil.price}</p>
                <p className="text-gray-600 text-sm mb-4">{oil.desc}</p>
                <p className="text-xs text-blue-700 font-medium bg-blue-50 rounded px-3 py-2">Recommended for: {oil.recommended}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">What&apos;s Included in Every Oil Change</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 max-w-2xl mx-auto">
            {[
              'Drain and replace engine oil (up to 5 quarts)',
              'Install new oil filter',
              'Inspect drain plug and replace washer if needed',
              'Top off windshield washer fluid',
              'Check coolant level',
              'Check brake fluid level',
              'Reset oil life monitor (where applicable)',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-green-500 font-bold shrink-0 mt-0.5">✓</span>
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* City-specific content */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Serving All of Carmichael</h2>
          <p className="text-gray-700 leading-relaxed">
            Carmichael is an unincorporated Sacramento County community with a strong sense of neighborhood identity. Many residents have lived here for years, drive older vehicles, and want straightforward, honest auto service without the upsell pressure of a dealership or chain shop. EC Mobile Auto Services fits Carmichael perfectly — we come to your home, explain exactly what we&apos;re doing, show you the clean dipstick before we leave, and charge what we quoted. We serve all of Carmichael from Fair Oaks Boulevard to the Sacramento border, with no trip fee.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/service-areas/mobile-mechanic-carmichael" className="text-orange-500 hover:underline font-medium text-sm">
              → Full Carmichael Service Area Page
            </Link>
            <Link href="/services/mobile-oil-change-sacramento" className="text-orange-500 hover:underline font-medium text-sm">
              → Main Mobile Oil Change Page
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">Carmichael Oil Change FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Ready for a Mobile Oil Change in Carmichael?" subheading="We come to your home or apartment in Carmichael. Call (916) 517-3286 — same-day often available." />
    </>
  );
}
