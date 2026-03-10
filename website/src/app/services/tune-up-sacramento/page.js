import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  title: 'Mobile Tune-Up Service in Sacramento, CA | EC Mobile Auto Services',
  description:
    'Restore engine performance and fuel economy with a mobile tune-up in Sacramento. Spark plugs, air filters, ignition service — we come to you. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/services/tune-up-sacramento' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Tune-Up Service Sacramento',
  provider: { '@type': 'LocalBusiness', name: 'EC Mobile Auto Services LLC', telephone: '+19165550100' },
  areaServed: { '@type': 'City', name: 'Sacramento' },
  description: 'Mobile engine tune-up service in Sacramento CA. Spark plug replacement, air filter, ignition system inspection performed at your location.',
  offers: { '@type': 'Offer', priceCurrency: 'USD', price: '150', description: 'Tune-up starting price' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often does a car need a tune-up?',
      acceptedAnswer: { '@type': 'Answer', text: 'Conventional spark plugs need replacement every 30,000 miles. Iridium or platinum plugs last 60,000–100,000 miles. Other tune-up components like air filters typically need service every 15,000–30,000 miles depending on driving conditions.' },
    },
    {
      '@type': 'Question',
      name: 'What does a tune-up include?',
      acceptedAnswer: { '@type': 'Answer', text: 'A modern tune-up typically includes spark plug replacement, engine air filter replacement, cabin air filter inspection, fuel system inspection, ignition wire or coil inspection, and a throttle body check. We will tell you exactly what your vehicle needs.' },
    },
  ],
};

const faqs = [
  { question: 'How often does my car need a tune-up?', answer: 'Conventional spark plugs: every 30,000 miles. Platinum or iridium plugs: every 60,000–100,000 miles. Air filters: every 15,000–30,000 miles. Your owner\'s manual has the exact intervals for your vehicle, and we can check them when we arrive.' },
  { question: 'What are signs my car needs a tune-up?', answer: 'Rough idle, sluggish acceleration, worse gas mileage than usual, hard starting, misfiring or hesitation, and a check engine light with misfire codes are all common signs. If you notice any of these, a tune-up is a good starting point.' },
  { question: 'What does a mobile tune-up include?', answer: 'We typically replace spark plugs, replace the engine air filter, inspect the cabin air filter, check ignition wires or coils, inspect the fuel system cap and injectors visually, and check the throttle body. We tell you exactly what needs work before we start.' },
  { question: 'Will a tune-up improve my gas mileage?', answer: 'Yes — worn spark plugs cause incomplete combustion, which burns more fuel for less power. A fresh set of plugs and a clean air filter can improve fuel economy by 4–10% in many vehicles.' },
  { question: 'How long does a mobile tune-up take?', answer: 'Most tune-ups take 45–90 minutes on-site depending on the vehicle and how many components need service. We will give you a time estimate when you call.' },
];

export default function TuneUpPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />

      <section className="bg-blue-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-blue-300 mb-3">
            <Link href="/services" className="hover:text-white">Services</Link> → Tune-Up Service
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Mobile Tune-Up Service in Sacramento, CA
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mb-8">
            Rough idle, poor gas mileage, sluggish acceleration? A tune-up brings your engine back to life. We perform spark plug replacement, air filter service, and ignition system checks right at your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165550100" className="btn-primary text-center text-lg px-8 py-4">📞 Call (916) 555-0100</a>
            <Link href="/contact" className="btn-secondary text-center text-lg px-8 py-4">Book Online</Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">What a Modern Tune-Up Actually Covers</h2>
          <p className="text-gray-700 mb-4">
            The term "tune-up" has evolved as cars have changed. Modern vehicles don't have carburetors or distributors, but they still have wear items that directly affect engine performance, fuel efficiency, and emissions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[
              { item: 'Spark Plug Replacement', detail: 'Worn plugs cause misfires, rough idle, and wasted fuel. We replace all plugs with OEM-spec or better.' },
              { item: 'Engine Air Filter', detail: 'A clogged filter chokes your engine. Replacement takes minutes and directly improves performance and MPG.' },
              { item: 'Cabin Air Filter', detail: 'Affects interior air quality and HVAC performance. We inspect and replace if needed.' },
              { item: 'Ignition Wires / Coil Packs', detail: 'We inspect for cracks, corrosion, or weak spark — common culprits in rough-running engines.' },
              { item: 'Fuel System Visual Inspection', detail: 'Fuel cap, injectors, and lines checked for leaks or damage.' },
              { item: 'Throttle Body Check', detail: 'A dirty throttle body causes rough idle and poor acceleration. We inspect and can clean on-site.' },
            ].map((row) => (
              <div key={row.item} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="font-bold text-blue-900 mb-1">✓ {row.item}</div>
                <div className="text-gray-600 text-sm">{row.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-blue-50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Tune-Up Pricing</h2>
          <p className="text-gray-600 mb-1">Starting at <span className="text-2xl font-extrabold text-orange-500">$150</span></p>
          <p className="text-gray-500 text-sm mb-4">Final price depends on vehicle, number of spark plugs, and plug type (conventional vs. iridium/platinum). We quote before we start.</p>
          <a href="tel:9165550100" className="btn-primary px-8 py-3 inline-block">Call for a Quote</a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Tune-Up FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Better Performance Starts Here" subheading="Book a mobile tune-up in Sacramento — we come to your home or office." />
    </>
  );
}
