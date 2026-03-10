import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Check Engine Light Diagnosis Sacramento CA | EC Mobile Auto',
  description:
    'Check engine light on in Sacramento? We come to you with professional OBD-II diagnostic tools. Accurate diagnosis, honest answers. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/services/mobile-check-engine-sacramento' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Check Engine Light Diagnosis Sacramento CA',
  description: 'Professional OBD-II check engine light diagnosis performed at your location in Sacramento, CA.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165550100',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  offers: [{ '@type': 'Offer', name: 'Check Engine Diagnosis', price: '65', priceCurrency: 'USD' }],
};

const commonCodes = [
  { code: 'P0420', desc: 'Catalyst System Efficiency Below Threshold — often means the catalytic converter or O2 sensor needs attention.' },
  { code: 'P0300-P0308', desc: 'Engine Misfire Detected — could be spark plugs, ignition coils, fuel injectors, or vacuum leaks.' },
  { code: 'P0442/P0455', desc: 'EVAP System Leak — often a loose or damaged gas cap. Sometimes a cracked vapor line.' },
  { code: 'P0171/P0174', desc: 'System Lean (Bank 1/2) — dirty MAF sensor, vacuum leak, or fuel system issue.' },
  { code: 'P0128', desc: 'Coolant Temperature Below Thermostat Regulating Temperature — thermostat stuck open.' },
  { code: 'P0101', desc: 'Mass Air Flow Sensor Circuit Range/Performance — dirty or failing MAF sensor.' },
];

const faqs = [
  {
    question: 'Is a check engine light always serious?',
    answer: 'Not always. Sometimes it\'s something as simple as a loose gas cap (which will set an EVAP leak code). However, some check engine codes indicate serious problems like misfires, catalytic converter failure, or engine issues that can cause further damage if ignored. The only way to know is to get it properly diagnosed.',
  },
  {
    question: 'What\'s the difference between a "check engine" and a flashing check engine light?',
    answer: 'A steady check engine light usually means a non-emergency issue that should be addressed soon. A flashing or blinking check engine light typically indicates an active engine misfire — this can cause serious and expensive catalytic converter damage if you continue driving. A flashing light means pull over safely and call us immediately.',
  },
  {
    question: 'Can\'t I just get the code read at AutoZone for free?',
    answer: 'You can get the code number for free, but a code number only tells you the system that triggered, not the root cause. P0420 (catalyst efficiency) could be a bad O2 sensor, catalytic converter, exhaust leak, or even an engine issue. Proper diagnosis requires live data analysis, not just reading a code number.',
  },
  {
    question: 'How much does a mobile check engine diagnosis cost?',
    answer: 'Our check engine diagnosis starts at $65. This includes a full OBD-II scan, live data analysis, and an explanation of what we found in plain English. If repairs are needed and you book them with us, the diagnostic fee is often credited toward the repair cost.',
  },
  {
    question: 'Can you fix the problem on the same visit?',
    answer: 'For many common issues — spark plugs, ignition coils, MAF sensor cleaning, gas cap replacement — we can often repair it on the same visit if we have the parts available. More complex repairs may require a follow-up appointment. We\'ll always give you an honest assessment.',
  },
];

export default function MobileCheckEnginePage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Auto Service · Sacramento, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Check Engine Light Diagnosis in Sacramento, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            That glowing check engine light is your car trying to tell you something. We come to your location with professional OBD-II diagnostic equipment and give you real answers — not guesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165550100" className="btn-primary text-lg">📞 Call (916) 555-0100</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Diagnosis →</Link>
          </div>
        </div>
      </section>

      {/* How We Diagnose */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="section-heading">Professional Diagnosis, Not Just Code Reading</h2>
            <p className="text-gray-700 mb-4">Any code reader gives you a DTC (Diagnostic Trouble Code) — a number like P0420. But that number is just a starting point. A real diagnosis means analyzing live sensor data, understanding the conditions under which the fault occurred, and knowing which tests to run to confirm the root cause.</p>
            <p className="text-gray-700 mb-4">We use professional-grade scan tools that access manufacturer-specific data, not just generic OBD-II codes. This means we can read more codes, see more data, and give you a more accurate diagnosis than a basic code reader.</p>
            <p className="text-gray-700">After diagnosis, we explain what we found in plain English, tell you how urgent the repair is, and give you an honest repair recommendation — with pricing upfront.</p>
          </div>
          <div>
            <h2 className="section-heading">What We Do</h2>
            <ul className="space-y-3">
              {[
                'Connect professional OBD-II scan tool to your vehicle',
                'Read all stored and pending fault codes',
                'Analyze live sensor data (O2 sensors, MAF, fuel trims, etc.)',
                'Review freeze frame data (conditions when fault occurred)',
                'Perform targeted tests based on fault code(s)',
                'Explain findings and recommended repair in plain language',
                'Provide upfront repair estimate if service is needed',
                'Clear codes and verify operation after repair (if completed same day)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-500 font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="card mt-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-blue-900">Diagnosis Fee</h3>
              <p className="text-3xl font-extrabold text-orange-500">From $65</p>
              <p className="text-gray-600 text-sm mt-1">Credited toward repair cost when you book repairs with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Codes */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Common Check Engine Codes We Diagnose</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">These are some of the most frequent codes we see on Sacramento vehicles. Every code needs proper diagnosis to confirm the real cause.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commonCodes.map((code) => (
              <div key={code.code} className="card flex gap-4 items-start">
                <span className="bg-blue-900 text-white text-xs font-bold px-2 py-1 rounded shrink-0 font-mono">{code.code}</span>
                <p className="text-gray-700 text-sm">{code.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">Check Engine Light FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Check Engine Light On? Don't Ignore It." subheading="Book a mobile diagnosis today — we come to you anywhere in Sacramento County." />
    </>
  );
}
