import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Oil Change in Antelope, CA | EC Mobile Auto Services',
  description:
    'Mobile oil change in Antelope, CA. We come to your home while you work or handle family. Conventional, synthetic & high-mileage. No trip fee. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/services/mobile-oil-change-antelope' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Oil Change Antelope CA',
  description: 'Mobile oil change in Antelope, CA — we come to your home or workplace.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165173286',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  areaServed: { '@type': 'Place', name: 'Antelope', containedIn: { '@type': 'State', name: 'California' } },
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
      name: 'Can you service multiple cars in one visit to our Antelope home?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. Many Antelope households have two or three vehicles. We can service multiple cars back-to-back during a single visit, saving you time and keeping your whole fleet on schedule.' },
    },
    {
      '@type': 'Question',
      name: 'Do you come to Antelope subdivisions?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We serve all of Antelope\'s residential subdivisions — Quail Glen, Dry Creek Ranch, Highland Reserve, Westborough Park, and more. If you live in Antelope, we come to you.' },
    },
    {
      '@type': 'Question',
      name: 'How do I prepare for a mobile oil change in Antelope?',
      acceptedAnswer: { '@type': 'Answer', text: 'You don\'t need to do much. Just ensure your parking spot or driveway is accessible and reasonably level. We bring everything — oil, filter, tools, and a drip mat. You can stay inside while we work.' },
    },
  ],
};

const faqs = [
  {
    question: 'Can you service multiple cars in one visit to our Antelope home?',
    answer: 'Yes. Many Antelope households have two or three vehicles. We can service multiple cars back-to-back during a single visit, saving you time and keeping your whole fleet on schedule.',
  },
  {
    question: 'Do you come to Antelope subdivisions?',
    answer: "Absolutely. We serve all of Antelope's residential subdivisions — Quail Glen, Dry Creek Ranch, Highland Reserve, Westborough Park, and more. If you live in Antelope, we come to you.",
  },
  {
    question: 'How do I prepare for a mobile oil change in Antelope?',
    answer: "You don't need to do much. Just ensure your parking spot or driveway is accessible and reasonably level. We bring everything — oil, filter, tools, and a drip mat. You can stay inside while we work.",
  },
];

export default function OilChangeAntelopePage() {
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
            <span className="text-white">Antelope</span>
          </nav>
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Oil Change · Antelope, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Oil Change in Antelope, CA — We Come to You
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Antelope families are on the move. We come to your subdivision driveway and service your car — or two cars — while you handle everything else. No shop trip needed.
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
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Every service includes a new filter, fluid top-offs, tire pressure check, and proper oil disposal. No trip fee in Antelope.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🛢️',
                name: 'Conventional',
                price: 'From $65',
                desc: 'For older vehicles on conventional oil. Up to 5 quarts plus a new oil filter included.',
                recommended: 'Pre-2008 vehicles',
              },
              {
                icon: '⚡',
                name: 'Full Synthetic',
                price: 'From $85',
                desc: 'The best choice for modern Antelope family vehicles and commuter cars. Better protection on I-80 and longer oil life.',
                recommended: '2010+ vehicles, turbo engines',
                featured: true,
              },
              {
                icon: '🔩',
                name: 'High-Mileage',
                price: 'From $95',
                desc: 'For vehicles with 75,000+ miles. Contains seal conditioners that help older engines run cleanly and reduce leaks.',
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
          <h2 className="section-heading">Built for Antelope&apos;s Busy Families</h2>
          <p className="text-gray-700 leading-relaxed">
            Antelope is a community of families, commuters, and busy households — many with more than one vehicle that needs regular attention. Between long commutes to Sacramento or Roseville, school runs, and weekend activities, finding time to get to a shop can feel impossible. EC Mobile Auto Services solves this by coming directly to Antelope homes, whether you live in Quail Glen, Dry Creek Ranch, Palmbrook, or any of Antelope&apos;s newer subdivisions. We can service your car in the driveway while you&apos;re working from home, watching the kids, or just catching a break. Same-day appointments are often available.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/service-areas/mobile-mechanic-antelope" className="text-orange-500 hover:underline font-medium text-sm">
              → Full Antelope Service Area Page
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
          <h2 className="section-heading text-center">Antelope Oil Change FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Ready for a Mobile Oil Change in Antelope?" subheading="We come to your Antelope home. Call (916) 517-3286 — same-day and next-day appointments available." />
    </>
  );
}
