import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Oil Change in North Highlands, CA | EC Mobile Auto Services',
  description:
    'Mobile oil change in North Highlands, CA. We come to your home near McClellan Park. Conventional, synthetic & high-mileage. No trip fee. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/services/mobile-oil-change-north-highlands' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Oil Change North Highlands CA',
  description: 'Mobile oil change service in North Highlands, CA — we come to your home or workplace.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165173286',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  areaServed: { '@type': 'Place', name: 'North Highlands', containedIn: { '@type': 'State', name: 'California' } },
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
      name: 'Can you come to McClellan Park for an oil change during my work shift?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We can service vehicles in the McClellan Park business park parking lots during your shift. Just provide your parking location and we\'ll handle the rest while you work.' },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest oil change option you offer in North Highlands?',
      acceptedAnswer: { '@type': 'Answer', text: 'Conventional oil changes start at $65 and are the most affordable option. If your vehicle was built before 2008 and has always used conventional oil, this is the right choice. Full synthetic starts at $85 and is better for most modern engines.' },
    },
    {
      '@type': 'Question',
      name: 'Do you offer same-day oil changes in North Highlands?',
      acceptedAnswer: { '@type': 'Answer', text: 'Same-day service is often available in North Highlands. Call (916) 517-3286 in the morning to check availability. Next-day appointments are almost always available.' },
    },
  ],
};

const faqs = [
  {
    question: 'Can you come to McClellan Park for an oil change during my work shift?',
    answer: "Yes. We can service vehicles in the McClellan Park business park parking lots during your shift. Just provide your parking location and we'll handle the rest while you work.",
  },
  {
    question: 'What is the cheapest oil change option you offer in North Highlands?',
    answer: 'Conventional oil changes start at $65 and are the most affordable option. If your vehicle was built before 2008 and has always used conventional oil, this is the right choice. Full synthetic starts at $85 and is better for most modern engines.',
  },
  {
    question: 'Do you offer same-day oil changes in North Highlands?',
    answer: 'Same-day service is often available in North Highlands. Call (916) 517-3286 in the morning to check availability. Next-day appointments are almost always available.',
  },
];

export default function OilChangeNorthHighlandsPage() {
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
            <span className="text-white">North Highlands</span>
          </nav>
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Oil Change · North Highlands, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Oil Change in North Highlands, CA — We Come to You
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            North Highlands residents get professional oil changes without the shop hassle. We come to your home near Watt Avenue, your McClellan Park workplace, or wherever your car is parked.
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
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Every oil change includes a new filter, fluid checks, tire pressure check, and old oil disposal. No trip fee in North Highlands.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🛢️',
                name: 'Conventional',
                price: 'From $65',
                desc: 'The most affordable option for older vehicles on conventional oil. Up to 5 quarts and a new filter.',
                recommended: 'Pre-2008 vehicles',
              },
              {
                icon: '⚡',
                name: 'Full Synthetic',
                price: 'From $85',
                desc: 'Best protection for commuter vehicles. Handles Sacramento summer heat and highway miles better than conventional.',
                recommended: '2010+ vehicles, turbo engines',
                featured: true,
              },
              {
                icon: '🔩',
                name: 'High-Mileage',
                price: 'From $95',
                desc: 'North Highlands has many high-mileage vehicles. This formula adds seal conditioners to protect aging engines.',
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
          <h2 className="section-heading">Convenient Service for North Highlands</h2>
          <p className="text-gray-700 leading-relaxed">
            North Highlands is a working community where vehicles are essential. Residents commute to Sacramento, Antelope, and to McClellan Park — which has become a major employment hub for light industrial, aerospace, and government contractors since the base closed. A mobile oil change fits naturally into the North Highlands lifestyle: quick, convenient, and done at your home or workplace so you don&apos;t need to add another errand to your day. We serve all of North Highlands with no trip fee, from neighborhoods near Auburn Boulevard to residential areas closer to Antelope Road.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/service-areas/mobile-mechanic-north-highlands" className="text-orange-500 hover:underline font-medium text-sm">
              → Full North Highlands Service Area Page
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
          <h2 className="section-heading text-center">North Highlands Oil Change FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Ready for a Mobile Oil Change in North Highlands?" subheading="We come to your home or workplace in North Highlands. Call (916) 517-3286 to book today." />
    </>
  );
}
