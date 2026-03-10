import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Mechanic Pricing Sacramento CA — Transparent & Fair | EC Mobile Auto',
  description:
    'How much does a mobile mechanic cost in Sacramento? EC Mobile Auto Services pricing: oil changes from $65, brakes from $150/axle, battery from $120. No trip fee. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/pricing' },
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a mobile mechanic cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'EC Mobile Auto Services charges from $65 for a conventional oil change, $85 for full synthetic, $150 per axle for brake pads, $120 for battery replacement (includes battery), $65 for check engine diagnosis, $30 for tire rotation, and $100 for a pre-purchase inspection. There is no trip fee within our service area.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a mobile mechanic more expensive than a shop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. Our prices are competitive with or lower than many traditional shops in Sacramento. And when you factor in the time and fuel you save by not driving to a shop and waiting, mobile service often works out to be less expensive overall.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you charge a trip fee or travel fee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. EC Mobile Auto Services does not charge a trip fee or travel fee for locations within our service area, which covers Sacramento, Elk Grove, Rancho Cordova, Folsom, Roseville, Citrus Heights, and surrounding communities.',
      },
    },
  ],
};

const pricingData = [
  {
    category: 'Oil Changes',
    items: [
      { service: 'Conventional Oil Change', price: 'From $65', note: 'Up to 5 qts. Includes filter & fluid top-off.' },
      { service: 'Full Synthetic Oil Change', price: 'From $85', note: 'Up to 5 qts. Recommended for most 2010+ vehicles.' },
      { service: 'High-Mileage Oil Change', price: 'From $95', note: 'For vehicles with 75,000+ miles.' },
    ],
  },
  {
    category: 'Brakes',
    items: [
      { service: 'Brake Pad Replacement (per axle)', price: 'From $150', note: 'Includes pads and labor. Front or rear.' },
      { service: 'Brake Rotor Replacement (per axle)', price: 'Quote required', note: 'Call for vehicle-specific pricing. Includes rotors, pads, and labor.' },
      { service: 'Brake Inspection', price: 'Free with service', note: 'All four corners inspected. Included with brake service.' },
    ],
  },
  {
    category: 'Battery',
    items: [
      { service: 'Battery Test', price: 'FREE', note: 'Professional load test, not just a voltage check.' },
      { service: 'Battery Replacement', price: 'From $120', note: 'Includes the battery, installation, and terminal cleaning.' },
    ],
  },
  {
    category: 'Diagnostics & Other',
    items: [
      { service: 'Check Engine Light Diagnosis', price: 'From $65', note: 'Professional OBD-II scan + live data analysis. Applied to repair if booked.' },
      { service: 'Tire Rotation', price: 'From $30', note: 'All four tires. Includes pressure check and torque to spec.' },
      { service: 'Tire Rotation (with oil change)', price: '$25', note: 'Bundle discount when added to oil change.' },
      { service: 'Pre-Purchase Vehicle Inspection', price: 'From $100', note: '150+ point inspection at seller\'s location.' },
    ],
  },
];

const comparisonData = [
  { aspect: 'Oil Change (Full Synthetic)', mobile: '$85', dealership: '$120–$180', quickLube: '$90–$110' },
  { aspect: 'Brake Pads (per axle)', mobile: '$150+', dealership: '$250–$450+', quickLube: 'N/A (most don\'t do brakes)' },
  { aspect: 'Battery Replacement', mobile: '$120+', dealership: '$200–$350+', quickLube: '$150–$250' },
  { aspect: 'Check Engine Diagnosis', mobile: '$65', dealership: '$100–$175', quickLube: 'Free (code read only)' },
  { aspect: 'Trip to shop required', mobile: '✗ No', dealership: '✓ Yes', quickLube: '✓ Yes' },
  { aspect: 'Wait time', mobile: '0 min (you\'re home)', dealership: '1–3+ hours', quickLube: '30–90 min' },
  { aspect: 'Trip fee', mobile: '$0', dealership: 'N/A', quickLube: 'N/A' },
];

const faqs = [
  {
    question: 'How much does a mobile mechanic cost in Sacramento?',
    answer: 'EC Mobile Auto Services prices start at $65 for a conventional oil change, $85 for full synthetic, $150 per axle for brake pad replacement, $120 for battery replacement (includes battery), $65 for check engine diagnosis, and $30 for a tire rotation. Pre-purchase inspections start at $100. There is no trip fee within our service area.',
  },
  {
    question: 'Is a mobile mechanic more expensive than going to a shop?',
    answer: 'For most services, our prices are competitive with or lower than traditional shops in Sacramento. Dealerships in particular are significantly more expensive for the same services. When you add in the time savings from not having to drive to a shop and wait, mobile service is often the better value overall.',
  },
  {
    question: 'Do you charge extra for coming to my location?',
    answer: 'No. We do not charge a trip fee or travel fee for any location within our service area. Our listed prices are the prices you pay.',
  },
  {
    question: 'Do you provide written estimates before doing work?',
    answer: 'Always. We will give you a clear price before we begin any service. There are no surprise charges or fees added after the job. What we quote is what you pay.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit cards, Venmo, Zelle, and Apple Pay. Payment is collected after service is completed to your satisfaction.',
  },
];

export default function PricingPage() {
  return (
    <>
      <SchemaMarkup schema={faqPageSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Transparent Pricing · No Hidden Fees</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Mechanic Pricing in Sacramento, CA — Transparent &amp; Fair
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            No surprise bills. No trip fees. No pressure upsells. Just honest pricing for professional mobile auto service across Sacramento County.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165550100" className="btn-primary text-lg">📞 Call for a Quote</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online →</Link>
          </div>
        </div>
      </section>

      {/* No Trip Fee Banner */}
      <div className="bg-green-600 text-white text-center py-4 px-4">
        <p className="font-bold text-lg">✅ No Trip Fee — We Come to You for FREE Within Our Service Area</p>
      </div>

      {/* Pricing Tables */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Service Pricing</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Prices shown are starting prices. Final pricing may vary based on vehicle type, oil capacity, and parts required. We always quote before we work.</p>
          <div className="space-y-10">
            {pricingData.map((category) => (
              <div key={category.category}>
                <h3 className="text-xl font-bold text-blue-900 border-b-2 border-orange-500 pb-2 mb-4">{category.category}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Service</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Price</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 hidden sm:table-cell">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((item, i) => (
                        <tr key={item.service} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="py-3 px-4 text-sm font-medium text-gray-800">{item.service}</td>
                          <td className="py-3 px-4 text-sm font-bold text-orange-500 whitespace-nowrap">{item.price}</td>
                          <td className="py-3 px-4 text-xs text-gray-500 hidden sm:table-cell">{item.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Mobile Mechanic vs. Dealership vs. Quick Lube</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">See how EC Mobile Auto Services compares to other options in Sacramento for common services.</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">
              <thead>
                <tr>
                  <th className="text-left py-4 px-4 bg-blue-900 text-white text-sm">Service / Factor</th>
                  <th className="py-4 px-4 bg-orange-500 text-white text-sm text-center">EC Mobile Auto<br />(Mobile)</th>
                  <th className="py-4 px-4 bg-gray-700 text-white text-sm text-center">Dealership</th>
                  <th className="py-4 px-4 bg-gray-600 text-white text-sm text-center">Quick Lube</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.aspect} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 text-sm font-medium text-gray-800">{row.aspect}</td>
                    <td className="py-3 px-4 text-sm font-bold text-orange-600 text-center">{row.mobile}</td>
                    <td className="py-3 px-4 text-sm text-gray-600 text-center">{row.dealership}</td>
                    <td className="py-3 px-4 text-sm text-gray-600 text-center">{row.quickLube}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-xs mt-3 text-center">Dealership and quick lube prices are estimates based on Sacramento area market rates as of 2026. Actual prices vary.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">Pricing FAQ</h2>
          <FAQAccordion faqs={faqs} />
          <div className="text-center mt-8">
            <Link href="/blog/how-much-does-mobile-mechanic-cost" className="text-orange-500 hover:text-orange-600 font-semibold">
              Read: How Much Does a Mobile Mechanic Cost? (Full Guide) →
            </Link>
          </div>
        </div>
      </section>

      <CTASection heading="Get an Exact Quote" subheading="Call (916) 555-0100 and describe your vehicle and service need. We'll give you a firm price before booking." />
    </>
  );
}
