import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Oil Change Sacramento CA | We Come to You | EC Mobile Auto',
  description:
    'Mobile oil change service in Sacramento, CA. Conventional, full synthetic & high-mileage options. We come to your home or office. No trip fee. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/services/mobile-oil-change-sacramento' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Oil Change Sacramento CA',
  description: 'Professional mobile oil change service in Sacramento, CA. We come to your home, office, or workplace. Conventional, full synthetic, and high-mileage oil options available.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165550100',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  areaServed: ['Sacramento', 'Elk Grove', 'Rancho Cordova', 'Folsom', 'Citrus Heights', 'Roseville'],
  offers: [
    { '@type': 'Offer', name: 'Conventional Oil Change', price: '65', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'Full Synthetic Oil Change', price: '85', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'High-Mileage Oil Change', price: '95', priceCurrency: 'USD' },
  ],
};

const faqs = [
  {
    question: 'How long does a mobile oil change take?',
    answer: 'Most mobile oil changes are completed in 20–30 minutes. We arrive with your oil, filter, and all necessary tools. You don\'t need to move your car or prepare anything — just tell us where it\'s parked.',
  },
  {
    question: 'What type of oil does my car need?',
    answer: 'Most cars made after 2010 recommend full synthetic oil. Older vehicles or those with over 75,000 miles may benefit from a high-mileage blend. We check your owner\'s manual and existing oil cap before every service to confirm the correct specification.',
  },
  {
    question: 'How often should I get an oil change?',
    answer: 'Full synthetic oil: every 7,500–10,000 miles or once a year. Conventional oil: every 3,000–5,000 miles. High-mileage oil: follow the same schedule as conventional. We\'ll remind you when you\'re due based on your last service.',
  },
  {
    question: 'Do you top off fluids during the oil change?',
    answer: 'Yes. As part of every oil change, we perform a multi-point courtesy inspection that includes checking and topping off windshield washer fluid, coolant level, brake fluid, and power steering fluid (where applicable).',
  },
  {
    question: 'Do you dispose of the old oil?',
    answer: 'Absolutely. We take the used oil with us and dispose of it at a certified recycling facility. We leave your driveway clean — we use drip mats to prevent any mess.',
  },
];

export default function MobileOilChangePage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Auto Service · Sacramento, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Oil Change in Sacramento, CA — We Come to You
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Fresh oil, new filter, and a multi-point inspection — all done at your home, office, or parking lot. No trip to the shop, no waiting room, no hassle.
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
          <h2 className="section-heading text-center">Choose Your Oil Change</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">We carry all major oil grades and brands. Every oil change includes a new filter, drain plug inspection, and fluid top-off.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🛢️',
                name: 'Conventional',
                price: 'From $65',
                desc: 'Best for older vehicles or those with lower mileage on conventional oil. Up to 5 quarts of conventional oil (5W-30 or 10W-30) + new filter included.',
                recommended: 'Pre-2010 vehicles or high-mileage older engines',
              },
              {
                icon: '⚡',
                name: 'Full Synthetic',
                price: 'From $85',
                desc: 'Recommended for most modern vehicles. Superior protection, longer change intervals (up to 10,000 miles), and better performance in Sacramento\'s summer heat.',
                recommended: 'Most 2010+ vehicles, turbocharged engines',
                featured: true,
              },
              {
                icon: '🔩',
                name: 'High-Mileage',
                price: 'From $95',
                desc: 'Specially formulated for vehicles with 75,000+ miles. Contains seal conditioners that help reduce oil leaks and consumption in aging engines.',
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
          <p className="text-center text-gray-500 text-sm mt-4">Prices based on standard capacity (up to 5 qts). Larger engines may vary. No trip fee within our service area.</p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="section-heading">What&apos;s Included in Every Oil Change</h2>
            <ul className="space-y-3 text-gray-700">
              {[
                'Drain and replace engine oil (up to 5 quarts)',
                'Install new oil filter',
                'Inspect drain plug and replace washer if needed',
                'Top off windshield washer fluid',
                'Check coolant level',
                'Check brake fluid level',
                'Check power steering fluid (where applicable)',
                'Inspect air filter (visual check)',
                'Check tire pressure (visual check)',
                'Reset oil life monitor (where applicable)',
                'Affix oil change reminder sticker',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-green-500 font-bold shrink-0">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="section-heading">How It Works</h2>
            <ol className="space-y-5">
              {[
                { n: '1', title: 'Schedule Your Appointment', desc: 'Call (916) 555-0100 or book online. Tell us your vehicle make, model, year, and location. We\'ll confirm a time window that works for you.' },
                { n: '2', title: 'We Show Up Ready', desc: 'Our technician arrives with your specific oil type and filter pre-loaded. We use drip mats to keep your driveway clean and have everything needed to complete the job.' },
                { n: '3', title: 'Done in Under 30 Minutes', desc: 'Oil drained, new filter installed, fluids topped, and reminder sticker applied. We\'ll show you the dipstick so you can see the fresh oil yourself.' },
              ].map((step) => (
                <li key={step.n} className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{step.n}</div>
                  <div>
                    <h3 className="font-bold text-blue-900">{step.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading">Mobile Oil Changes Across Sacramento County</h2>
          <p className="text-gray-600 mb-6">We provide mobile oil change service throughout the greater Sacramento area. <Link href="/pricing" className="text-orange-500 hover:underline">No trip fee</Link> within our service area.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Sacramento', 'Elk Grove', 'Rancho Cordova', 'Folsom', 'Roseville', 'Citrus Heights', 'Carmichael', 'Fair Oaks', 'Antelope', 'North Highlands', 'Orangevale'].map((city) => (
              <span key={city} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-blue-900 font-medium shadow-sm">{city}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">Oil Change FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Ready for a Mobile Oil Change?" subheading="We come to you anywhere in Sacramento County. Book today — same-day often available." />
    </>
  );
}
