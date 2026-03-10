import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Oil Change in Roseville, CA | EC Mobile Auto Services',
  description:
    'Mobile oil change in Roseville, CA. We come to your home or Galleria-area office. Conventional, synthetic & high-mileage. No trip fee. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/services/mobile-oil-change-roseville' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Oil Change Roseville CA',
  description: 'Mobile oil change service in Roseville, CA. We come to your home or business.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165550100',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  areaServed: { '@type': 'City', name: 'Roseville', containedIn: { '@type': 'State', name: 'California' } },
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
      name: 'Do you serve all Roseville neighborhoods for oil changes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We cover all of Roseville including West Roseville, Fiddyment Ranch, Diamond Oaks, Woodcreek, and neighborhoods near the Galleria and Blue Oaks corridor.' },
    },
    {
      '@type': 'Question',
      name: 'Can you come to Roseville during my lunch break?',
      acceptedAnswer: { '@type': 'Answer', text: 'Many customers book us during their workday. If your office has an accessible parking lot, we can service your car while you\'re working. Oil changes take about 25-30 minutes so it fits easily into a lunch break.' },
    },
    {
      '@type': 'Question',
      name: 'Is there a trip fee for Roseville?',
      acceptedAnswer: { '@type': 'Answer', text: 'No trip fee for Roseville. You pay only for the oil change — starting at $65 for conventional, $85 for full synthetic, and $95 for high-mileage.' },
    },
  ],
};

const faqs = [
  {
    question: 'Do you serve all Roseville neighborhoods for oil changes?',
    answer: 'Yes. We cover all of Roseville including West Roseville, Fiddyment Ranch, Diamond Oaks, Woodcreek, and neighborhoods near the Galleria and Blue Oaks corridor.',
  },
  {
    question: 'Can you come to Roseville during my lunch break?',
    answer: "Many customers book us during their workday. If your office has an accessible parking lot, we can service your car while you're working. Oil changes take about 25–30 minutes so it fits easily into a lunch break.",
  },
  {
    question: 'Is there a trip fee for Roseville?',
    answer: 'No trip fee for Roseville. You pay only for the oil change — starting at $65 for conventional, $85 for full synthetic, and $95 for high-mileage.',
  },
];

export default function OilChangeRosevillePage() {
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
            <span className="text-white">Roseville</span>
          </nav>
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Oil Change · Roseville, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Oil Change in Roseville, CA — We Come to You
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Roseville is a busy city and your time is limited. We come to your West Roseville home, Fiddyment Ranch driveway, or Galleria-area office and handle your oil change while you stay productive.
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
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Every service includes a new filter, fluid checks, tire pressure check, and old oil disposal. No trip fee within Roseville.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🛢️',
                name: 'Conventional',
                price: 'From $65',
                desc: 'For older vehicles that have always run on conventional oil. Includes up to 5 quarts and a new filter.',
                recommended: 'Older vehicles, pre-2008',
              },
              {
                icon: '⚡',
                name: 'Full Synthetic',
                price: 'From $85',
                desc: "Ideal for Roseville's newer suburban vehicles and commuters on I-80. Better heat protection and longer change intervals.",
                recommended: 'Most 2010+ vehicles, turbos',
                featured: true,
              },
              {
                icon: '🔩',
                name: 'High-Mileage',
                price: 'From $95',
                desc: 'Formulated for engines over 75,000 miles. Seal conditioners help address minor leaks in aging engines.',
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
          <h2 className="section-heading">Serving All of Roseville</h2>
          <p className="text-gray-700 leading-relaxed">
            Roseville has grown into one of the Sacramento region&apos;s premier cities, with new residential developments spreading west toward Fiddyment Ranch and Diamond Oaks. Commuters here often drive newer vehicles on I-80 and Highway 65, which means synthetic oil and consistent service intervals matter. We serve all of Roseville — from the established neighborhoods near downtown Roseville and Woodcreek to the newest subdivisions in West Roseville. No matter where your car is parked in Roseville, we can reach you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/service-areas/mobile-mechanic-roseville" className="text-orange-500 hover:underline font-medium text-sm">
              → Full Roseville Service Area Page
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
          <h2 className="section-heading text-center">Roseville Oil Change FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Ready for a Mobile Oil Change in Roseville?" subheading="We come to your home or office anywhere in Roseville. Same-day often available — call (916) 555-0100." />
    </>
  );
}
