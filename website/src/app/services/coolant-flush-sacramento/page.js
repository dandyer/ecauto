import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  title: 'Mobile Coolant Flush in Sacramento, CA | EC Mobile Auto Services',
  description:
    'Prevent overheating in Sacramento heat with a mobile coolant flush. EC Mobile Auto Services comes to you — no shop needed. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/services/coolant-flush-sacramento' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Coolant Flush Sacramento',
  provider: { '@type': 'LocalBusiness', name: 'EC Mobile Auto Services LLC', telephone: '+19165550100' },
  areaServed: { '@type': 'City', name: 'Sacramento' },
  description: 'Mobile coolant flush and radiator flush service in Sacramento, CA.',
  offers: { '@type': 'Offer', priceCurrency: 'USD', price: '99', description: 'Coolant flush starting price' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should I get a coolant flush?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most manufacturers recommend a coolant flush every 30,000 miles or every 2–5 years, whichever comes first. In Sacramento\'s extreme heat, leaning toward the shorter interval protects your engine better.' },
    },
    {
      '@type': 'Question',
      name: 'What happens if I skip a coolant flush?',
      acceptedAnswer: { '@type': 'Answer', text: 'Old coolant becomes acidic and loses its ability to prevent corrosion and regulate temperature. This leads to rust inside the cooling system, thermostat failure, and eventually engine overheating — a very expensive repair.' },
    },
  ],
};

const faqs = [
  { question: 'How often should I get a coolant flush?', answer: 'Most manufacturers recommend every 30,000 miles or 2–5 years. In Sacramento\'s high heat environment, the shorter interval is the safer bet. Check your owner\'s manual for your vehicle\'s specific recommendation.' },
  { question: 'What happens if I skip coolant flushes?', answer: 'Old coolant turns acidic and corrodes the inside of your radiator, hoses, and engine block. It also loses its ability to regulate temperature, leading to overheating. Engine overheating repairs can cost $1,500–$5,000+. A $99 flush is good insurance.' },
  { question: 'How long does a mobile coolant flush take?', answer: 'About 45–60 minutes on-site. We drain the old coolant, flush the system, and refill with the correct coolant type for your vehicle.' },
  { question: 'Does my car need a specific type of coolant?', answer: 'Yes — different manufacturers use different coolant formulations (green, orange, pink, blue). Using the wrong type can damage seals and metals. We always use the manufacturer-specified coolant for your vehicle.' },
  { question: 'Can overheating in Sacramento damage my engine permanently?', answer: 'Yes. A single severe overheating event can warp cylinder heads, blow head gaskets, or crack engine blocks — repairs that cost thousands. Sacramento summers make cooling system maintenance especially important.' },
];

export default function CoolantFlushPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />

      <section className="bg-blue-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-blue-300 mb-3">
            <Link href="/services" className="hover:text-white">Services</Link> → Coolant Flush
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Mobile Coolant Flush in Sacramento, CA
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mb-8">
            Sacramento heat is brutal on cooling systems. A coolant flush prevents overheating, corrosion, and costly engine damage — and we do it right at your location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165550100" className="btn-primary text-center text-lg px-8 py-4">📞 Call (916) 555-0100</a>
            <Link href="/contact" className="btn-secondary text-center text-lg px-8 py-4">Book Online</Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Why Coolant Flushes Matter in Sacramento</h2>
          <p className="text-gray-700 mb-4">
            Your engine produces enormous amounts of heat. The cooling system — coolant, radiator, thermostat, water pump — is what keeps that heat from destroying your engine. In Sacramento, where summer temperatures regularly exceed 100°F, that system is already working harder than it would in cooler climates.
          </p>
          <p className="text-gray-700 mb-4">
            Over time, coolant breaks down and becomes acidic. Acidic coolant corrodes radiator tubes, eats away at gaskets, and causes rust inside your engine. A coolant flush removes the old degraded fluid and replaces it with fresh coolant that protects, lubricates, and regulates temperature properly.
          </p>
          <p className="text-gray-700">
            Signs you need a coolant flush: temperature gauge running higher than normal, sweet smell from the engine area, visible rust particles in the coolant reservoir, or your coolant reservoir is discolored (should be clear, green, orange, or pink depending on type).
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Drain old coolant completely',
              'Flush system to remove deposits and rust',
              'Inspect radiator hoses for cracks or swelling',
              'Check thermostat operation',
              'Inspect radiator cap seal',
              'Refill with manufacturer-specified coolant',
              'Check for leaks after refill',
              'Top off to correct level',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-100">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 px-4 bg-blue-50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Coolant Flush Pricing</h2>
          <p className="text-gray-600 mb-4">Starting at <span className="text-2xl font-extrabold text-orange-500">$99</span> — price varies by vehicle and coolant type.</p>
          <a href="tel:9165550100" className="btn-primary px-8 py-3 inline-block">Call for an Exact Quote</a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Coolant Flush FAQ</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection heading="Don't Risk Overheating This Summer" subheading="Book a mobile coolant flush in Sacramento — we come to you." />
    </>
  );
}
