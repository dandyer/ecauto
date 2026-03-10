import Link from 'next/link';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'FAQ — Mobile Mechanic Sacramento CA | EC Mobile Auto Services',
  description:
    'Frequently asked questions about EC Mobile Auto Services LLC. Pricing, scheduling, service areas, what we work on, and more. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/faq' },
};

const allFaqs = [
  {
    question: 'How much does a mobile mechanic cost in Sacramento?',
    answer: 'Our pricing starts at $65 for a conventional oil change, $85 for full synthetic, $150 per axle for brake pad replacement, $120 for battery replacement (includes the battery), $65 for a check engine light diagnosis, $30 for a tire rotation, and $100 for a pre-purchase inspection. There is no trip fee or travel charge within our service area. Visit our pricing page for a full breakdown.',
  },
  {
    question: 'Is a mobile mechanic more expensive than going to a shop?',
    answer: 'Not for most services. Our prices are competitive with traditional independent shops and significantly lower than dealerships. When you factor in the time and fuel you save by not driving to a shop and waiting — often 1.5–3 hours per visit — mobile service frequently costs less overall. We pass our lower overhead directly to our customers.',
  },
  {
    question: 'Do you charge a trip fee or travel fee?',
    answer: 'No. EC Mobile Auto Services does not charge a trip fee, travel fee, or surcharge for coming to your location within our service area. Our service area includes Sacramento, Elk Grove, Rancho Cordova, Roseville, Folsom, Citrus Heights, Carmichael, Fair Oaks, Antelope, North Highlands, and Orangevale.',
  },
  {
    question: 'What service areas do you cover?',
    answer: 'We serve Sacramento, Elk Grove, Rancho Cordova, Roseville, Folsom, Citrus Heights, Carmichael, Fair Oaks, Antelope, North Highlands, and Orangevale. If you\'re unsure whether we cover your area, call (916) 517-3286 and we\'ll let you know.',
  },
  {
    question: 'How do I book a mobile mechanic appointment?',
    answer: 'The easiest way is to call (916) 517-3286. You can also text or book through our online contact form. We\'ll confirm your appointment time, your location, your vehicle details, and the service needed. Same-day and next-day appointments are often available.',
  },
  {
    question: 'What vehicles do you work on?',
    answer: 'We work on all makes and models of passenger cars, trucks, and SUVs — domestic and import. We service Toyota, Honda, Ford, Chevrolet, Dodge, Nissan, Hyundai, Kia, BMW, Mercedes, and more. We do not service commercial trucks, heavy equipment, or vehicles requiring a frame lift for specific repairs.',
  },
  {
    question: 'Can you work on my car in an apartment parking lot?',
    answer: 'In most cases, yes. We need a reasonably level, paved surface with enough space around the vehicle to work safely. Most apartment parking lots meet this requirement. If you\'re unsure, call us and describe the space — we\'ll let you know if it\'ll work.',
  },
  {
    question: 'How long does a mobile oil change take?',
    answer: 'A standard oil change takes 20–30 minutes at your location. We arrive fully equipped with the correct oil, a new filter, and all tools needed. You don\'t need to prepare anything.',
  },
  {
    question: 'What type of oil does my car need?',
    answer: 'Most vehicles made after 2010 require full synthetic oil. Older vehicles or those with high mileage may use conventional or high-mileage oil. We verify the correct specification from your owner\'s manual and oil cap before every service. Never assume — always verify.',
  },
  {
    question: 'Do you offer same-day service?',
    answer: 'We do our best to accommodate same-day requests, especially for oil changes and battery replacements. Availability depends on our current schedule. Call (916) 517-3286 as early in the day as possible for the best chance of same-day service.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes. EC Mobile Auto Services LLC is fully licensed as a business in California and carries general liability insurance. Owner Enrique Castillo takes pride in running a professional operation that customers can trust.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit cards (Visa, Mastercard, American Express, Discover), Venmo, Zelle, and Apple Pay. Payment is collected after service is completed and you are satisfied.',
  },
  {
    question: 'Do you provide a warranty on your work?',
    answer: 'Yes. We stand behind our work. Parts and labor are warranted for 90 days or 3,000 miles, whichever comes first. If an issue arises from our work within the warranty period, we\'ll return and make it right at no charge.',
  },
  {
    question: 'Can you do a pre-purchase inspection on a car I\'m buying from a private seller?',
    answer: 'Absolutely — this is one of our most popular services. We travel to the seller\'s location and perform a comprehensive 150+ point inspection. We provide you with a detailed assessment so you can buy with confidence or negotiate based on our findings. Pre-purchase inspections start at $100.',
  },
  {
    question: 'What if my car needs a repair you can\'t do on-site?',
    answer: 'We handle the most common repairs and maintenance services on-site. For more complex repairs that require a lift or specialized shop equipment (like transmission replacement or head gasket jobs), we\'ll diagnose the problem accurately and provide honest recommendations. We\'d rather refer you to a good shop than attempt a job we can\'t do properly in your driveway.',
  },
  {
    question: 'What is the 30-60-90 rule for cars?',
    answer: 'The 30-60-90 rule refers to maintenance intervals at 30,000, 60,000, and 90,000 miles. At 30,000 miles: replace air filter, inspect brake pads, check and rotate tires, inspect coolant. At 60,000 miles: replace spark plugs, replace brake fluid, replace coolant, inspect timing belt/chain. At 90,000 miles: replace transmission fluid, replace power steering fluid, inspect all belts and hoses, major tune-up. Sacramento\'s heat can accelerate some of these intervals — especially for fluids and batteries. Read our full guide on our blog.',
  },
];

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup schema={faqPageSchema} />

      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Knowledge Base</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Frequently Asked Questions — EC Mobile Auto Services
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl">
            Everything you want to know about mobile mechanic service in Sacramento. Can&apos;t find your answer? Call (916) 517-3286 — we&apos;re happy to help.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={allFaqs} />
        </div>
      </section>

      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 mb-4">Still have questions? Explore our in-depth guides:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/blog/how-much-does-mobile-mechanic-cost" className="text-orange-500 hover:underline font-medium text-sm">How Much Does a Mobile Mechanic Cost? →</Link>
            <Link href="/blog/mobile-mechanic-vs-shop" className="text-orange-500 hover:underline font-medium text-sm">Mobile Mechanic vs. Auto Shop →</Link>
            <Link href="/blog/30-60-90-car-maintenance-rule" className="text-orange-500 hover:underline font-medium text-sm">The 30-60-90 Maintenance Rule →</Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
