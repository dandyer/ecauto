import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  title: 'Mobile AC Service & Recharge in Sacramento, CA | EC Mobile Auto Services',
  description:
    "Sacramento summers hit 100°F+. Don't sweat it — EC Mobile Auto Services recharges and inspects your car AC at your home or office. Call (916) 517-3286.",
  alternates: { canonical: 'https://ecmobileauto.com/services/mobile-ac-service-sacramento' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile AC Service & Recharge Sacramento',
  provider: { '@type': 'LocalBusiness', name: 'EC Mobile Auto Services LLC', telephone: '+19165173286' },
  areaServed: { '@type': 'City', name: 'Sacramento' },
  description: 'Mobile AC recharge and inspection service in Sacramento, CA. We come to your home or workplace.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    price: '89',
    description: 'AC recharge starting price — includes refrigerant and inspection',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if my car AC needs a recharge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Signs include warm air blowing even on max cool, AC that works intermittently, or a musty smell from the vents. If your AC is noticeably weaker than it used to be, a low refrigerant charge is the most common culprit.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a mobile AC recharge take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic AC recharge typically takes 45-60 minutes on-site. If there is a leak or a larger issue, we will diagnose it and give you a clear estimate before proceeding.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a mobile AC recharge cost in Sacramento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AC recharge service at EC Mobile Auto Services starts at $89, which includes the refrigerant and a system inspection. Call (916) 517-3286 for an exact quote for your vehicle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a mobile mechanic fix an AC leak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We can diagnose AC leaks and handle many common repairs on-site. If the leak requires specialized equipment beyond our mobile setup, we will let you know and recommend next steps honestly.',
      },
    },
  ],
};

const faqs = [
  {
    question: 'How do I know if my car AC needs a recharge?',
    answer: 'Signs include warm air blowing even on max cool, AC that cools intermittently, or noticeably weaker airflow than before. Sacramento heat accelerates refrigerant loss — if your AC was fine last summer but weak this year, a recharge is likely the fix.',
  },
  {
    question: 'How long does a mobile AC recharge take?',
    answer: 'A basic AC recharge takes 45–60 minutes on-site. We include a full system inspection so we catch any other issues while we are already there.',
  },
  {
    question: 'How much does mobile AC service cost in Sacramento?',
    answer: 'AC recharge starts at $89, which includes refrigerant and inspection. Final price depends on your vehicle and how much refrigerant is needed. Call (916) 517-3286 for a quick quote.',
  },
  {
    question: 'Can you fix an AC leak on-site?',
    answer: 'Many common AC leaks can be addressed on-site. We will diagnose the system and be upfront about what we can fix mobile versus what requires a shop. No surprises.',
  },
  {
    question: 'What refrigerant does my car use?',
    answer: 'Most vehicles made after 1994 use R-134a refrigerant. Vehicles made after 2021 typically use R-1234yf. We carry both and will confirm which your vehicle requires before starting.',
  },
];

export default function MobileACServicePage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={faqSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-blue-300 mb-3">
            <Link href="/services" className="hover:text-white">Services</Link> → AC Service & Recharge
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Mobile AC Service & Recharge in Sacramento, CA
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mb-8">
            Sacramento summers average 95–105°F. Driving without AC isn't just uncomfortable — it's dangerous. EC Mobile Auto Services recharges and inspects your AC system wherever your car is parked.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165173286" className="btn-primary text-center text-lg px-8 py-4">
              📞 Call (916) 517-3286
            </a>
            <Link href="/contact" className="btn-secondary text-center text-lg px-8 py-4">
              Book Online
            </Link>
          </div>
        </div>
      </section>

      {/* Why it matters in Sacramento */}
      <section className="py-14 px-4 bg-orange-50 border-l-4 border-orange-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Sacramento Heat Is Especially Hard on Your AC System
          </h2>
          <p className="text-gray-700 mb-4">
            Sacramento's extreme summer heat — regularly 100°F or above — puts more stress on your car's AC system than nearly any other climate in California. Refrigerant degrades faster, hoses and seals dry out, and AC components work harder just to keep the cabin bearable.
          </p>
          <p className="text-gray-700">
            Most AC systems lose a small amount of refrigerant every year naturally. After 2–3 years without a recharge, performance noticeably drops. A quick recharge restores full cold air output and extends the life of your compressor — the most expensive part to replace.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">What's Included in Our Mobile AC Service</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Refrigerant level check and top-off (R-134a or R-1234yf)',
              'AC system pressure test',
              'Compressor operation inspection',
              'Check for visible leaks at hoses and connections',
              'Vent temperature measurement (before and after)',
              'Cabin air filter visual inspection',
              'Performance assessment at idle and running',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="text-green-500 font-bold text-lg mt-0.5">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">AC Service Pricing</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="text-left p-4">Service</th>
                  <th className="text-right p-4">Price</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['AC Recharge (R-134a)', 'from $89'],
                  ['AC Recharge (R-1234yf)', 'from $120'],
                  ['AC System Inspection Only', 'from $65'],
                  ['Cabin Air Filter Replacement (add-on)', 'from $25'],
                ].map(([service, price], i) => (
                  <tr key={service} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 text-gray-700">{service}</td>
                    <td className="p-4 text-right font-semibold text-blue-900">{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-500 text-sm mt-4 text-center">
            Prices vary by vehicle. Call <a href="tel:9165173286" className="text-orange-500 font-semibold">(916) 517-3286</a> for an exact quote.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">How Mobile AC Service Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: '1', title: 'Book Your Appointment', desc: 'Call or text (916) 517-3286. Tell us your location and vehicle. We will confirm a time that works for you.' },
              { step: '2', title: 'We Come to You', desc: 'Enrique arrives with professional AC service equipment. No need to drive anywhere — we work in your driveway, parking lot, or at your workplace.' },
              { step: '3', title: 'Cold Air Restored', desc: 'We recharge your refrigerant, inspect the system, and confirm your AC is blowing cold before we leave. Done in under an hour.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl font-bold text-blue-900 mb-4">AC Service Areas</h2>
          <p className="text-gray-600 mb-6">We provide mobile AC service throughout Sacramento County and surrounding cities:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Sacramento', 'Elk Grove', 'Rancho Cordova', 'Roseville', 'Folsom', 'Citrus Heights', 'Carmichael', 'Fair Oaks', 'Antelope', 'North Highlands', 'Orangevale'].map((city) => (
              <span key={city} className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">AC Service FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Sacramento Heat Won't Wait — Neither Should You" subheading="Call or text now to book same-day AC service." />
    </>
  );
}
