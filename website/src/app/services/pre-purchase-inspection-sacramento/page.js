import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Pre-Purchase Vehicle Inspection Sacramento CA | Don\'t Buy a Lemon | EC Mobile Auto',
  description:
    'Pre-purchase car inspection in Sacramento, CA. We come to the seller\'s location. 150+ point inspection. Know exactly what you\'re buying before you commit. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/services/pre-purchase-inspection-sacramento' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Pre-Purchase Vehicle Inspection Sacramento CA',
  description: 'Comprehensive pre-purchase vehicle inspection in Sacramento, CA. We travel to the seller\'s location to inspect any used vehicle before you buy.',
  provider: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165550100',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  offers: [{ '@type': 'Offer', name: 'Pre-Purchase Vehicle Inspection', price: '100', priceCurrency: 'USD' }],
};

const inspectionChecklist = [
  { category: 'Exterior', items: ['Body panel alignment and gaps', 'Paint condition and overspray', 'Signs of prior accident damage or repainting', 'Rust or corrosion on body panels', 'Glass condition (chips, cracks)', 'Lights and lenses', 'Trim and weather stripping'] },
  { category: 'Engine Bay', items: ['Oil condition and level', 'Coolant condition and level', 'Belts and hoses', 'Battery condition', 'Signs of leaks (oil, coolant, power steering)', 'Fluid reservoirs', 'Air filter condition'] },
  { category: 'Undercarriage', items: ['Frame and subframe integrity', 'Signs of rust or corrosion', 'Exhaust system condition', 'CV axles and boots', 'Suspension components', 'Brake lines and hoses', 'Transmission and differential leaks'] },
  { category: 'Brakes', items: ['Brake pad thickness (all four corners)', 'Rotor condition and thickness', 'Caliper operation', 'Brake fluid level and condition', 'Parking brake operation'] },
  { category: 'Tires & Wheels', items: ['Tire tread depth (all four)', 'Tire wear patterns (indicates alignment or suspension issues)', 'Sidewall condition', 'Wheel condition (cracks, bends)', 'Lug nut security'] },
  { category: 'Interior', items: ['Dashboard warning lights', 'Air conditioning and heating', 'Power windows and locks', 'Seat condition and adjustment', 'Odometer consistency', 'Stereo and electronics'] },
  { category: 'Road Test', items: ['Engine performance and acceleration', 'Transmission shift quality', 'Brake pedal feel and stopping power', 'Steering responsiveness', 'Suspension ride quality', 'Unusual noises or vibrations'] },
  { category: 'Diagnostics', items: ['OBD-II scan for stored and pending fault codes', 'Review pending codes (can indicate recent issues cleared before sale)', 'EVAP system check'] },
];

const faqs = [
  {
    question: 'Do I need to be there for the inspection?',
    answer: 'We recommend being present so we can walk you through our findings in person and answer questions on the spot. However, if you can\'t be there, we can conduct the inspection with the seller present and send you a detailed written report.',
  },
  {
    question: 'Will the seller allow an inspection?',
    answer: 'Any honest seller should welcome an independent inspection — it gives both parties confidence in the transaction. If a seller refuses to allow a third-party inspection, that\'s a significant red flag and you should walk away.',
  },
  {
    question: 'How long does the inspection take?',
    answer: 'A thorough pre-purchase inspection takes 60–90 minutes. We don\'t rush — this is your protection against a potentially costly mistake.',
  },
  {
    question: 'What areas do you cover for pre-purchase inspections?',
    answer: 'We cover all of Sacramento County and surrounding areas, including Elk Grove, Folsom, Rancho Cordova, Roseville, Citrus Heights, and more. If the seller is within our service area, we\'ll come to them.',
  },
  {
    question: 'What if the car has problems — do you fix them on the spot?',
    answer: 'The pre-purchase inspection is an assessment only. We document all findings and give you a complete picture of the vehicle\'s condition. If you decide to buy the car and want repairs done, we can schedule a separate service appointment.',
  },
];

export default function PrePurchaseInspectionPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Mobile Auto Service · Sacramento, CA</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Pre-Purchase Vehicle Inspection in Sacramento, CA — Don&apos;t Buy a Lemon
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Buying a used car? We travel to the seller&apos;s location and perform a comprehensive inspection so you know exactly what you&apos;re buying before you hand over a single dollar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165550100" className="btn-primary text-lg">📞 Call (916) 555-0100</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Inspection →</Link>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">Why a Pre-Purchase Inspection Is Worth Every Penny</h2>
          <p className="text-gray-700 text-center mb-10 max-w-2xl mx-auto">
            The average used car sale price in California is over $25,000. A $100 inspection can save you from a $5,000 mistake.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🔍', title: 'Find Hidden Problems', desc: 'Sellers aren\'t always forthcoming about issues. We uncover hidden mechanical problems, prior accident damage, and signs of deferred maintenance that aren\'t obvious from a test drive.' },
              { icon: '💪', title: 'Negotiate from Strength', desc: 'If we find issues, you can use our findings to negotiate a lower price or ask the seller to fix problems before purchase. Our detailed report gives you leverage.' },
              { icon: '🚗', title: 'We Come to the Seller', desc: 'No need to transport the car to a shop. We come to the seller\'s driveway, dealership, or wherever the vehicle is located within our service area.' },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">150+ Point Inspection Checklist</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">We leave no stone unturned. Here&apos;s a summary of what we inspect:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspectionChecklist.map((section) => (
              <div key={section.category} className="card">
                <h3 className="font-bold text-blue-900 mb-3 text-sm uppercase tracking-wide">{section.category}</h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item} className="text-xs text-gray-600 flex items-start gap-1">
                      <span className="text-orange-500 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 px-4 bg-orange-50 border-y border-orange-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">Inspection Pricing</h2>
          <div className="card inline-block px-12 py-8">
            <p className="text-5xl font-extrabold text-orange-500 mb-2">From $100</p>
            <p className="text-gray-600">Complete 150+ point pre-purchase inspection</p>
            <p className="text-gray-500 text-sm mt-2">We travel to the seller&apos;s location. No trip fee within service area.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">Pre-Purchase Inspection FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Protect Your Investment" subheading="Book a pre-purchase inspection before your next used car purchase. We come to the seller anywhere in Sacramento County." />
    </>
  );
}
