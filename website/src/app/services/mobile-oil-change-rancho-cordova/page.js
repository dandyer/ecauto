import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Oil Change in Rancho Cordova, CA | EC Mobile Auto Services',
  description:
    'Mobile oil change in Rancho Cordova, CA. We come to your home, apartment, or Sunrise area office. Conventional, full synthetic & high-mileage. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/services/mobile-oil-change-rancho-cordova' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Oil Change Rancho Cordova CA',
  description: 'Mobile oil change service in Rancho Cordova, CA. We come to your location.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165550100',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  areaServed: { '@type': 'City', name: 'Rancho Cordova', containedIn: { '@type': 'State', name: 'California' } },
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
      name: 'Do you service vehicles at Rancho Cordova apartment complexes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We work in apartment parking lots all across Rancho Cordova, including complexes along Folsom Blvd, Mather Field Rd, and Sunrise Blvd. Your parking spot is our work space.' },
    },
    {
      '@type': 'Question',
      name: 'Can you come to the Sunrise business district during my workday?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We regularly service vehicles in commercial parking lots in Rancho Cordova. Many of our customers book during work hours so they arrive home with a freshly serviced car.' },
    },
    {
      '@type': 'Question',
      name: 'Is there a trip fee for Rancho Cordova?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. There is no trip fee for oil changes in Rancho Cordova. You pay only for the oil change service itself — conventional from $65, full synthetic from $85, high-mileage from $95.' },
    },
  ],
};

const faqs = [
  {
    question: 'Do you service vehicles at Rancho Cordova apartment complexes?',
    answer: 'Yes. We work in apartment parking lots all across Rancho Cordova, including complexes along Folsom Blvd, Mather Field Rd, and Sunrise Blvd. Your parking spot is our work space.',
  },
  {
    question: 'Can you come to the Sunrise business district during my workday?',
    answer: 'Absolutely. We regularly service vehicles in commercial parking lots in Rancho Cordova. Many of our customers book during work hours so they arrive home with a freshly serviced car.',
  },
  {
    question: 'Is there a trip fee for Rancho Cordova?',
    answer: 'No. There is no trip fee for oil changes in Rancho Cordova. You pay only for the oil change service itself — conventional from $65, full synthetic from $85, high-mileage from $95.',
  },
];

export default function OilChangeRanchoCordovaPage() {
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
            <span className="text-white">Rancho Cordova</span>
          </nav>
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Oil Change · Rancho Cordova, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Oil Change in Rancho Cordova, CA — We Come to You
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Skip the Sunrise Blvd traffic and the shop wait. We come to your Rancho Cordova home, apartment, or office parking lot and complete your oil change in under 30 minutes.
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
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Every oil change includes a new filter, fluid top-offs, tire pressure check, and proper disposal. No trip fee in Rancho Cordova.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🛢️',
                name: 'Conventional',
                price: 'From $65',
                desc: 'For older or high-mileage vehicles on conventional oil. Up to 5 quarts plus a new filter.',
                recommended: 'Older vehicles not yet on synthetic',
              },
              {
                icon: '⚡',
                name: 'Full Synthetic',
                price: 'From $85',
                desc: 'Best for most modern vehicles. Superior engine protection during US-50 commutes and Sacramento summer heat.',
                recommended: 'Most 2010+ vehicles',
                featured: true,
              },
              {
                icon: '🔩',
                name: 'High-Mileage',
                price: 'From $95',
                desc: 'Engineered for engines with 75,000+ miles. Seal conditioners help minimize minor oil leaks common in aging engines.',
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
          <h2 className="section-heading">Serving All of Rancho Cordova</h2>
          <p className="text-gray-700 leading-relaxed">
            Rancho Cordova is a dynamic city with a diverse mix of residential neighborhoods, apartment communities, and a busy commercial corridor along Folsom Boulevard and Sunrise Boulevard. Many residents commute via US-50 to Sacramento or Folsom, putting serious miles on their vehicles every week. We serve all of Rancho Cordova — from the neighborhoods near Mather Field to the residential areas west of Sunrise Blvd and everything in between. Whether your car is parked outside an apartment on Folsom Blvd or in a driveway in a quieter residential area, we come to you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/service-areas/mobile-mechanic-rancho-cordova" className="text-orange-500 hover:underline font-medium text-sm">
              → Full Rancho Cordova Service Area Page
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
          <h2 className="section-heading text-center">Rancho Cordova Oil Change FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Ready for a Mobile Oil Change in Rancho Cordova?" subheading="We come to your home, apartment, or office. Call (916) 555-0100 to book." />
    </>
  );
}
