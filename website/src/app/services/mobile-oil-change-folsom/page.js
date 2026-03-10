import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Oil Change in Folsom, CA | EC Mobile Auto Services',
  description:
    'Mobile oil change service in Folsom, CA. We come to your home, office, or apartment. Conventional, full synthetic & high-mileage. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/services/mobile-oil-change-folsom' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Oil Change Folsom CA',
  description: 'Mobile oil change service in Folsom, CA. We come to your home, office park, or apartment.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165173286',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  areaServed: { '@type': 'City', name: 'Folsom', containedIn: { '@type': 'State', name: 'California' } },
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
      name: 'Can you come to my office in the Folsom tech corridor?',
      acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We regularly service vehicles in office park parking lots in Folsom\'s tech and business districts. Just provide your parking spot location and we\'ll handle the rest during your workday.' },
    },
    {
      '@type': 'Question',
      name: 'Do you serve Empire Ranch and other Folsom neighborhoods?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We serve all Folsom neighborhoods including Empire Ranch, Willow Creek, Broadstone, Natoma Station, Russell Ranch, and the older downtown Folsom area.' },
    },
    {
      '@type': 'Question',
      name: 'What oil does my newer Folsom vehicle need?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most modern vehicles (2015+) require full synthetic oil. Tech workers in Folsom often drive newer cars with turbo engines that specifically require synthetic. We check your owner\'s manual and oil cap spec before every service.' },
    },
  ],
};

const faqs = [
  {
    question: 'Can you come to my office in the Folsom tech corridor?',
    answer: "Absolutely. We regularly service vehicles in office park parking lots in Folsom's tech and business districts. Just provide your parking spot location and we'll handle the rest during your workday.",
  },
  {
    question: 'Do you serve Empire Ranch and other Folsom neighborhoods?',
    answer: 'Yes. We serve all Folsom neighborhoods including Empire Ranch, Willow Creek, Broadstone, Natoma Station, Russell Ranch, and the older downtown Folsom area.',
  },
  {
    question: 'What oil does my newer Folsom vehicle need?',
    answer: "Most modern vehicles (2015+) require full synthetic oil. Tech workers in Folsom often drive newer cars with turbo engines that specifically require synthetic. We check your owner's manual and oil cap spec before every service.",
  },
];

export default function OilChangeFolsomPage() {
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
            <span className="text-white">Folsom</span>
          </nav>
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Oil Change · Folsom, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Oil Change in Folsom, CA — We Come to You
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Folsom professionals and families get their oil changed without leaving home or the office. We come to your Empire Ranch driveway, your office parking lot, or your Broadstone apartment — done in under 30 minutes.
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
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Every oil change includes a new filter, fluid top-offs, tire pressure check, and disposal of old oil. No trip fee in Folsom.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🛢️',
                name: 'Conventional',
                price: 'From $65',
                desc: 'For older vehicles still on conventional oil. Up to 5 quarts plus new filter included.',
                recommended: 'Older vehicles, pre-2008',
              },
              {
                icon: '⚡',
                name: 'Full Synthetic',
                price: 'From $85',
                desc: "Best protection for Folsom's modern vehicles and tech commuters. Extended intervals up to 10,000 miles.",
                recommended: 'Most 2010+ vehicles, turbo engines',
                featured: true,
              },
              {
                icon: '🔩',
                name: 'High-Mileage',
                price: 'From $95',
                desc: 'For vehicles over 75,000 miles. Contains conditioners that help aging seals and reduce oil consumption.',
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
          <h2 className="section-heading">Serving Folsom — From Empire Ranch to Old Town</h2>
          <p className="text-gray-700 leading-relaxed">
            Folsom has evolved from a historic Gold Rush town into one of Sacramento County&apos;s most affluent and tech-forward communities. With Intel, VSP Global, and a growing cluster of tech employers headquartered here, Folsom has many residents who are time-strapped professionals driving newer vehicles. Mobile oil change service fits Folsom perfectly — get your car serviced during your lunch break in the office parking lot, or while you&apos;re working from your Empire Ranch home office. We cover all of Folsom, from the newer subdivisions near Prairie City Road to the established neighborhoods of Russell Ranch and Willow Creek.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/service-areas/mobile-mechanic-folsom" className="text-orange-500 hover:underline font-medium text-sm">
              → Full Folsom Service Area Page
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
          <h2 className="section-heading text-center">Folsom Oil Change FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Ready for a Mobile Oil Change in Folsom?" subheading="We come to your home or office anywhere in Folsom. Same-day often available." />
    </>
  );
}
