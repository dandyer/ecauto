import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Oil Change in Fair Oaks, CA | EC Mobile Auto Services',
  description:
    'Mobile oil change in Fair Oaks, CA. We come to your home near the Village or American River. Conventional, synthetic & high-mileage. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/services/mobile-oil-change-fair-oaks' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Oil Change Fair Oaks CA',
  description: 'Mobile oil change service in Fair Oaks, CA — we come to your home or driveway.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165173286',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  areaServed: { '@type': 'Place', name: 'Fair Oaks', containedIn: { '@type': 'State', name: 'California' } },
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
      name: 'Do you come to Fair Oaks homes for oil changes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We come directly to Fair Oaks homes. Most residents have driveways, making mobile service especially easy. We use a drip mat to keep your driveway clean during the oil change.' },
    },
    {
      '@type': 'Question',
      name: 'What oil is best for an older vehicle in Fair Oaks?',
      acceptedAnswer: { '@type': 'Answer', text: 'If your vehicle has over 75,000 miles, we typically recommend a high-mileage full synthetic oil. Fair Oaks has many older, high-mileage vehicles, and high-mileage formulas contain seal conditioners that help reduce minor leaks and keep older engines running cleanly.' },
    },
    {
      '@type': 'Question',
      name: 'Can I watch the oil change being done?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely — and we encourage it. Unlike a shop where your car goes to the back, our technician works right in front of you. Ask questions, watch the process, and see the clean oil on the dipstick before we leave.' },
    },
  ],
};

const faqs = [
  {
    question: 'Do you come to Fair Oaks homes for oil changes?',
    answer: 'Yes. We come directly to Fair Oaks homes. Most residents have driveways, making mobile service especially easy. We use a drip mat to keep your driveway clean during the oil change.',
  },
  {
    question: 'What oil is best for an older vehicle in Fair Oaks?',
    answer: 'If your vehicle has over 75,000 miles, we typically recommend a high-mileage full synthetic oil. Fair Oaks has many older, high-mileage vehicles, and high-mileage formulas contain seal conditioners that help reduce minor leaks and keep older engines running cleanly.',
  },
  {
    question: 'Can I watch the oil change being done?',
    answer: 'Absolutely — and we encourage it. Unlike a shop where your car goes to the back, our technician works right in front of you. Ask questions, watch the process, and see the clean oil on the dipstick before we leave.',
  },
];

export default function OilChangeFairOaksPage() {
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
            <span className="text-white">Fair Oaks</span>
          </nav>
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Oil Change · Fair Oaks, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Oil Change in Fair Oaks, CA — We Come to You
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Fair Oaks homeowners enjoy the convenience of in-driveway oil changes. We come to your home near the Village, Sailor Bar, or anywhere in Fair Oaks and complete your oil change while you stay home.
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
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Every service includes a new filter, fluid top-offs, tire pressure check, and proper disposal. No trip fee in Fair Oaks.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🛢️',
                name: 'Conventional',
                price: 'From $65',
                desc: 'For older vehicles already on conventional oil. Up to 5 quarts of fresh oil plus a new filter.',
                recommended: 'Older vehicles, pre-2008',
              },
              {
                icon: '⚡',
                name: 'Full Synthetic',
                price: 'From $85',
                desc: 'Best all-around protection. Longer change intervals and better performance in all conditions — the smart choice for most Fair Oaks vehicles.',
                recommended: '2010+ vehicles, turbocharged engines',
                featured: true,
              },
              {
                icon: '🔩',
                name: 'High-Mileage',
                price: 'From $95',
                desc: "Fair Oaks is home to many older, long-held vehicles. High-mileage formula adds seal conditioners and extra protection for engines with 75,000+ miles.",
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
          <h2 className="section-heading">Serving All of Fair Oaks</h2>
          <p className="text-gray-700 leading-relaxed">
            Fair Oaks has a reputation for community character and residents who genuinely care about their properties and their vehicles. Many Fair Oaks homeowners take great pride in maintaining their cars — but also value their time and don&apos;t want to spend a Saturday morning at an oil change shop. EC Mobile Auto Services is the ideal solution. We come to your Fair Oaks home, work in your driveway, and treat your vehicle the same way a shop would — except you get to stay home. We serve the entire Fair Oaks area, from the Village neighborhood to homes along Greenback Lane and deep into the tree-lined streets along the American River Canyon.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/service-areas/mobile-mechanic-fair-oaks" className="text-orange-500 hover:underline font-medium text-sm">
              → Full Fair Oaks Service Area Page
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
          <h2 className="section-heading text-center">Fair Oaks Oil Change FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Ready for a Mobile Oil Change in Fair Oaks?" subheading="We come to your Fair Oaks driveway. Call (916) 517-3286 to book — same-day often available." />
    </>
  );
}
