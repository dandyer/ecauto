import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Oil Change in Citrus Heights, CA | EC Mobile Auto Services',
  description:
    'Mobile oil change in Citrus Heights, CA. We come to your home or Sunrise Marketplace area. Conventional, synthetic & high-mileage. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/services/mobile-oil-change-citrus-heights' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Oil Change Citrus Heights CA',
  description: 'Mobile oil change service in Citrus Heights, CA.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165173286',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  areaServed: { '@type': 'City', name: 'Citrus Heights', containedIn: { '@type': 'State', name: 'California' } },
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
      name: 'Do you come to Citrus Heights homes for oil changes?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We service vehicles at homes and apartments throughout Citrus Heights, including the Sunrise, Sylvan, and Rusch Park areas. Your driveway or parking spot works perfectly.' },
    },
    {
      '@type': 'Question',
      name: 'My car has over 100,000 miles — what oil should I use?',
      acceptedAnswer: { '@type': 'Answer', text: 'For vehicles over 75,000-100,000 miles, we typically recommend high-mileage synthetic blend or full synthetic high-mileage oil. These formulas include seal conditioners that help aging engines stay cleaner and leak less. We\'ll advise the right choice for your specific vehicle.' },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you come to Citrus Heights?',
      acceptedAnswer: { '@type': 'Answer', text: 'We often have same-day availability in Citrus Heights. Call (916) 517-3286 early in the day for the best chance at a same-day appointment. Next-day is almost always available.' },
    },
  ],
};

const faqs = [
  {
    question: 'Do you come to Citrus Heights homes for oil changes?',
    answer: 'Yes. We service vehicles at homes and apartments throughout Citrus Heights, including the Sunrise, Sylvan, and Rusch Park areas. Your driveway or parking spot works perfectly.',
  },
  {
    question: 'My car has over 100,000 miles — what oil should I use?',
    answer: "For vehicles over 75,000–100,000 miles, we typically recommend high-mileage synthetic blend or full synthetic high-mileage oil. These formulas include seal conditioners that help aging engines stay cleaner and leak less. We'll advise the right choice for your specific vehicle.",
  },
  {
    question: 'How quickly can you come to Citrus Heights?',
    answer: 'We often have same-day availability in Citrus Heights. Call (916) 517-3286 early in the day for the best chance at a same-day appointment. Next-day is almost always available.',
  },
];

export default function OilChangeCitrusHeightsPage() {
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
            <span className="text-white">Citrus Heights</span>
          </nav>
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Oil Change · Citrus Heights, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Oil Change in Citrus Heights, CA — We Come to You
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Citrus Heights residents skip the Sunrise Blvd shop lines. We come to your home or apartment and complete your oil change in under 30 minutes — no appointment hassle, no waiting room.
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
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Every oil change includes a new filter, fluid top-offs, and responsible oil disposal. No trip fee in Citrus Heights.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🛢️',
                name: 'Conventional',
                price: 'From $65',
                desc: 'For vehicles that have always run conventional oil. Up to 5 quarts plus a quality filter included.',
                recommended: 'Older vehicles, pre-2008',
              },
              {
                icon: '⚡',
                name: 'Full Synthetic',
                price: 'From $85',
                desc: "Best protection for Citrus Heights commuters. Extended intervals and better performance in Sacramento's hot summers.",
                recommended: 'Most 2010+ vehicles',
                featured: true,
              },
              {
                icon: '🔩',
                name: 'High-Mileage',
                price: 'From $95',
                desc: 'Many Citrus Heights vehicles are 100,000+ miles. This formula adds seal conditioners and extra protection for aging engines.',
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
          <h2 className="section-heading">Serving All of Citrus Heights</h2>
          <p className="text-gray-700 leading-relaxed">
            Citrus Heights is a tight-knit city between Sacramento, Carmichael, and Roseville, with well-established residential neighborhoods and a population that holds onto their vehicles for the long haul. The community has a high proportion of older and high-mileage vehicles — which is exactly what our high-mileage oil change option was made for. We serve all of Citrus Heights, from the areas near Sunrise Marketplace and Antelope Road to quieter residential streets deeper in the city. We come to your home, apartment, or workplace parking lot with no trip fee.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/service-areas/mobile-mechanic-citrus-heights" className="text-orange-500 hover:underline font-medium text-sm">
              → Full Citrus Heights Service Area Page
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
          <h2 className="section-heading text-center">Citrus Heights Oil Change FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Ready for a Mobile Oil Change in Citrus Heights?" subheading="We come to you anywhere in Citrus Heights. Call (916) 517-3286 to book today." />
    </>
  );
}
