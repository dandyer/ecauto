import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Oil Change in Elk Grove, CA | EC Mobile Auto Services',
  description:
    'Mobile oil change service in Elk Grove, CA. We come to your home or apartment. Conventional, full synthetic & high-mileage options. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/services/mobile-oil-change-elk-grove' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Oil Change Elk Grove CA',
  description: 'Mobile oil change service in Elk Grove, CA. We come to your home, apartment complex, or workplace.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165550100',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  areaServed: { '@type': 'City', name: 'Elk Grove', containedIn: { '@type': 'State', name: 'California' } },
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
      name: 'Do you come to apartment complexes in Elk Grove?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We service vehicles in apartment parking lots throughout Elk Grove, including Laguna, Stonelake, and other areas. As long as you have access to your parking spot, we can work there.' },
    },
    {
      '@type': 'Question',
      name: 'How much does a mobile oil change cost in Elk Grove?',
      acceptedAnswer: { '@type': 'Answer', text: 'Conventional oil changes start at $65, full synthetic at $85, and high-mileage at $95. There is no trip fee for Elk Grove. Prices may vary for vehicles requiring more than 5 quarts.' },
    },
    {
      '@type': 'Question',
      name: 'How long does a mobile oil change take in Elk Grove?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most oil changes take 25-35 minutes from the time our technician arrives. We bring your oil, filter, and all equipment — you don\'t need to prepare anything.' },
    },
  ],
};

const faqs = [
  {
    question: 'Do you come to apartment complexes in Elk Grove?',
    answer: 'Yes. We service vehicles in apartment parking lots throughout Elk Grove, including Laguna, Stonelake, and other areas. As long as you have access to your parking spot, we can work there.',
  },
  {
    question: 'How much does a mobile oil change cost in Elk Grove?',
    answer: 'Conventional oil changes start at $65, full synthetic at $85, and high-mileage at $95. There is no trip fee for Elk Grove. Prices may vary for vehicles requiring more than 5 quarts.',
  },
  {
    question: 'How long does a mobile oil change take in Elk Grove?',
    answer: "Most oil changes take 25–35 minutes from the time our technician arrives. We bring your oil, filter, and all equipment — you don't need to prepare anything.",
  },
];

export default function OilChangeElkGrovePage() {
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
            <span className="text-white">Elk Grove</span>
          </nav>
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Oil Change · Elk Grove, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Oil Change in Elk Grove, CA — We Come to You
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Elk Grove families don&apos;t have time to sit at a quick lube. We come to your Laguna home, Stonelake apartment, or Elk Grove office and handle your oil change in under 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165550100" className="btn-primary text-lg">📞 Call (916) 555-0100</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online →</Link>
          </div>
        </div>
      </section>

      {/* Oil Type Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Choose Your Oil Type</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Every oil change includes a new filter, drain plug inspection, fluid top-offs, and tire pressure check. No trip fee in Elk Grove.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🛢️',
                name: 'Conventional',
                price: 'From $65',
                desc: 'For older vehicles or those already on conventional oil. Includes up to 5 quarts of conventional oil and a new filter.',
                recommended: 'Pre-2010 vehicles, lower mileage older engines',
              },
              {
                icon: '⚡',
                name: 'Full Synthetic',
                price: 'From $85',
                desc: "The right choice for most modern Elk Grove family vehicles. Superior protection for I-5 commuting and Sacramento's summer temperatures.",
                recommended: 'Most 2010+ vehicles, turbocharged engines',
                featured: true,
              },
              {
                icon: '🔩',
                name: 'High-Mileage',
                price: 'From $95',
                desc: 'Formulated for engines with 75,000+ miles. Seal conditioners help reduce minor leaks and oil consumption in aging engines.',
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
          <p className="text-center text-gray-500 text-sm mt-4">Prices based on standard capacity (up to 5 qts). Larger engines may vary. No trip fee within Elk Grove.</p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">What&apos;s Included in Every Elk Grove Oil Change</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 max-w-2xl mx-auto">
            {[
              'Drain and replace engine oil (up to 5 quarts)',
              'Install new oil filter',
              'Inspect and replace drain plug washer if needed',
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
          <h2 className="section-heading">Serving All of Elk Grove</h2>
          <p className="text-gray-700 leading-relaxed">
            Elk Grove is one of California&apos;s fastest-growing cities, and its residents know how to stay busy. Between commutes on I-5 to downtown Sacramento, school runs in Laguna and Stonelake, and everything else that comes with raising a family, an oil change appointment at a shop is genuinely hard to fit in. That&apos;s why mobile oil change service is such a practical fit for Elk Grove. We serve all Elk Grove neighborhoods — from Franklin and Sheldon in the south to Laguna West and Vineyard in the north — with no trip fee and same-day availability many days of the week.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/service-areas/mobile-mechanic-elk-grove" className="text-orange-500 hover:underline font-medium text-sm">
              → Full Elk Grove Service Area Page
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
          <h2 className="section-heading text-center">Elk Grove Oil Change FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Ready for a Mobile Oil Change in Elk Grove?" subheading="We come to your home, apartment, or office anywhere in Elk Grove. Same-day often available." />
    </>
  );
}
