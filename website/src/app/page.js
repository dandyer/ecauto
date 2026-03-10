import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';
import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Mechanic Sacramento CA | EC Mobile Auto Services LLC',
  description:
    'Need a mobile mechanic in Sacramento? EC Mobile Auto Services comes to your home, office, or roadside. Same-day oil changes, brakes, batteries & more. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC',
  description: 'Mobile auto repair and oil change service serving Sacramento County and surrounding areas.',
  url: 'https://ecmobileauto.com',
  telephone: '+19165550100',
  priceRange: '$$',
  image: 'https://ecmobileauto.com/og-image.jpg',
  founder: { '@type': 'Person', name: 'Enrique Castillo' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sacramento',
    addressRegion: 'CA',
    postalCode: '95814',
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 38.5816, longitude: -121.4944 },
  areaServed: [
    'Sacramento', 'Elk Grove', 'Rancho Cordova', 'Roseville', 'Folsom',
    'Citrus Heights', 'Carmichael', 'Fair Oaks', 'Antelope', 'North Highlands', 'Orangevale',
  ],
  openingHours: ['Mo-Sa 07:00-19:00'],
  hasMap: 'https://www.google.com/maps?q=Sacramento,CA',
};

const faqPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a mobile mechanic cost in Sacramento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mobile mechanic services in Sacramento typically range from $65 for a conventional oil change to $150+ for brake pad replacement per axle. EC Mobile Auto Services offers transparent, upfront pricing with no hidden fees and no trip charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a mobile mechanic more expensive than a shop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. While hourly labor rates can be similar, mobile mechanics often have lower overhead than traditional shops, which can translate to savings. When you factor in the time and fuel you save by not driving to a shop, mobile service often comes out ahead financially.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve Sacramento, Elk Grove, Rancho Cordova, Roseville, Folsom, Citrus Heights, Carmichael, Fair Oaks, Antelope, North Highlands, and Orangevale.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer same-day mobile mechanic service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Same-day and next-day appointments are often available. Call (916) 555-0100 and we will do our best to get to you quickly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of vehicles do you work on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work on all makes and models of cars, trucks, and SUVs. Whether you drive a domestic vehicle or an import, our technician can handle routine maintenance and common repairs on-site.',
      },
    },
  ],
};

const services = [
  {
    icon: '🛢️',
    title: 'Mobile Oil Change',
    description: 'Conventional, full synthetic, and high-mileage oil changes performed right at your location. Quick, clean, and done in under 30 minutes.',
    href: '/services/mobile-oil-change-sacramento',
  },
  {
    icon: '🛑',
    title: 'Brake Service',
    description: 'Squealing or grinding brakes? We inspect and replace brake pads and rotors at your home or office — no shop visit required.',
    href: '/services/mobile-brake-service-sacramento',
  },
  {
    icon: '🔋',
    title: 'Battery Replacement',
    description: 'Dead or weak battery? We test and replace your battery on the spot. Sacramento heat is brutal on batteries — don\'t get stranded.',
    href: '/services/mobile-battery-replacement-sacramento',
  },
  {
    icon: '🔍',
    title: 'Check Engine Diagnosis',
    description: 'We use professional OBD-II scan tools to diagnose your check engine light accurately and explain your options in plain English.',
    href: '/services/mobile-check-engine-sacramento',
  },
  {
    icon: '🔄',
    title: 'Tire Rotation',
    description: 'Regular tire rotations extend the life of your tires. We handle it at your location — no waiting at a tire shop.',
    href: '/services/tire-rotation-sacramento',
  },
  {
    icon: '🔎',
    title: 'Pre-Purchase Inspection',
    description: 'Buying a used car? We come to the seller\'s location and do a thorough inspection so you know exactly what you\'re buying.',
    href: '/services/pre-purchase-inspection-sacramento',
  },
];

const reviews = [
  {
    quote: 'Enrique showed up right on time and changed my oil in about 20 minutes while I worked from home. No more waiting at Jiffy Lube for an hour. This is how it should be done. Highly recommend for anyone in Sacramento.',
    name: 'Maria T.',
    city: 'Sacramento, CA',
    service: 'Mobile Oil Change',
  },
  {
    quote: 'My brakes were grinding and I was dreading taking a day off work to deal with it. EC Mobile Auto Services came to my office parking lot and had my brake pads replaced during my lunch break. Unbelievably convenient and the price was fair.',
    name: 'James R.',
    city: 'Elk Grove, CA',
    service: 'Brake Service',
  },
  {
    quote: 'I was buying a used car from a private seller and needed a pre-purchase inspection. Enrique met me at the seller\'s house, put the car on ramps, and gave me a full rundown. Found a couple issues I would have missed. Saved me from a bad purchase. Worth every penny.',
    name: 'Kevin L.',
    city: 'Folsom, CA',
    service: 'Pre-Purchase Inspection',
  },
];

const faqs = [
  {
    question: 'How much does a mobile mechanic cost in Sacramento?',
    answer: 'Our prices start at $65 for a conventional oil change, $85 for full synthetic, $150 per axle for brake pads, and $65 for a check engine diagnosis. We provide upfront pricing with no hidden fees and no trip charge within our service area. Visit our pricing page for a full breakdown.',
  },
  {
    question: 'Is a mobile mechanic more expensive than a shop?',
    answer: 'For most common services, our pricing is comparable to or less than a traditional shop — and that\'s before you factor in the time you save. You don\'t have to arrange a ride, take time off work, or wait in a waiting room. Many customers find mobile service saves them money overall.',
  },
  {
    question: 'Do you charge a trip fee or travel fee?',
    answer: 'No. We do not charge a trip fee or travel fee for locations within our service area, which includes Sacramento, Elk Grove, Rancho Cordova, Folsom, Roseville, Citrus Heights, and surrounding communities.',
  },
  {
    question: 'How long does a mobile oil change take?',
    answer: 'A standard oil change takes 20-30 minutes. We come fully equipped with fresh oil, a new filter, and all necessary tools. You don\'t need to do anything except let us know a good spot to park near your vehicle.',
  },
  {
    question: 'What vehicles do you work on?',
    answer: 'We work on all makes and models — American, Japanese, European, domestic cars, trucks, and SUVs. The only vehicles we don\'t service are commercial trucks and vehicles requiring specialized lift equipment.',
  },
];

const serviceAreas = [
  { name: 'Sacramento', href: '/service-areas/mobile-mechanic-sacramento' },
  { name: 'Elk Grove', href: '/service-areas/mobile-mechanic-elk-grove' },
  { name: 'Rancho Cordova', href: '/service-areas/mobile-mechanic-rancho-cordova' },
  { name: 'Roseville', href: '/service-areas/mobile-mechanic-roseville' },
  { name: 'Folsom', href: '/service-areas/mobile-mechanic-folsom' },
  { name: 'Citrus Heights', href: '/service-areas/mobile-mechanic-citrus-heights' },
  { name: 'Carmichael', href: '/service-areas/mobile-mechanic-sacramento' },
  { name: 'Fair Oaks', href: '/service-areas/mobile-mechanic-sacramento' },
  { name: 'Antelope', href: '/service-areas/mobile-mechanic-sacramento' },
  { name: 'North Highlands', href: '/service-areas/mobile-mechanic-sacramento' },
  { name: 'Orangevale', href: '/service-areas/mobile-mechanic-sacramento' },
];

export default function HomePage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />
      <SchemaMarkup schema={faqPageSchema} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">Sacramento County&apos;s #1 Mobile Mechanic</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Sacramento&apos;s Mobile Mechanic —<br className="hidden md:block" /> We Come to You
          </h1>
          <p className="text-blue-200 text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Skip the shop. EC Mobile Auto Services sends a professional mechanic directly to your home, office, or roadside — for oil changes, brakes, batteries, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:9165550100"
              className="btn-primary text-lg px-8 py-4"
            >
              📞 Call (916) 555-0100
            </a>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4">
              Book Online →
            </Link>
          </div>
          {/* Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: '✅', text: 'Licensed & Insured' },
              { icon: '⚡', text: 'Same-Day Available' },
              { icon: '🚗', text: 'All Makes & Models' },
              { icon: '📍', text: 'Serving Sacramento County' },
            ].map((badge) => (
              <div key={badge.text} className="bg-blue-800 bg-opacity-50 rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">{badge.icon}</div>
                <div className="text-blue-200 text-xs font-medium">{badge.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">How It Works</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Getting your car serviced has never been easier. Three steps and you&apos;re done.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', icon: '📱', title: 'Book Your Appointment', desc: 'Call (916) 555-0100 or fill out our online form. Tell us what your car needs and where you are. We\'ll confirm a time that works for you.' },
              { step: '2', icon: '🚐', title: 'We Arrive at Your Location', desc: 'Our mechanic shows up at your home, office, parking lot, or roadside — fully equipped with tools, parts, and everything needed to get the job done.' },
              { step: '3', icon: '✅', title: 'Drive Away Happy', desc: 'We complete the service on-site, answer any questions you have, and you\'re on your way. No waiting rooms, no rides needed, no wasted time.' },
            ].map((step) => (
              <div key={step.step} className="card text-center relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div className="text-5xl mb-4 mt-2">{step.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">Mobile Auto Repair Services</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">We handle the most common auto repairs and maintenance services — all performed at your location across Sacramento County.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/pricing" className="btn-secondary">
              View All Pricing →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY MOBILE */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">Why Choose a Mobile Mechanic?</h2>
          <p className="text-blue-200 text-center mb-10 max-w-2xl mx-auto">Traditional shops were built for a different era. Mobile service is built around your schedule.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '🏠', title: 'No Trip Required', desc: 'Stay home, stay at work, or stay wherever you are. We come to you — eliminating the biggest hassle of car maintenance.' },
              { icon: '⏱️', title: 'No Waiting Room Time', desc: 'The average shop visit takes 1.5–3 hours when you factor in travel, waiting, and pickup. We typically finish in 30–60 minutes at your location.' },
              { icon: '💬', title: 'Watch Your Mechanic Work', desc: 'When we work on your car, you can see exactly what\'s being done. No mystery charges, no upselling on work you don\'t need.' },
              { icon: '💰', title: 'Competitive Pricing', desc: 'Our overhead is lower than a traditional shop, and we pass those savings on to you. No dealer markups, no shop fees padded onto your bill.' },
              { icon: '🗓️', title: 'Flexible Scheduling', desc: 'Early morning, evenings, weekends — we work around your life, not the other way around. Same-day appointments often available.' },
              { icon: '🔒', title: 'Trusted & Transparent', desc: 'EC Mobile Auto Services is fully licensed and insured. Owner Enrique Castillo stands behind every job with honest, straightforward communication.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <div className="text-3xl shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-blue-200 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Service Areas</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">We serve the greater Sacramento area, including these cities and communities. No trip charge within our service area.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="card text-center hover:shadow-lg hover:border-orange-200 border border-gray-100 transition-all py-4"
              >
                <span className="font-semibold text-blue-900 text-sm">{area.name}</span>
                <p className="text-gray-400 text-xs mt-1">Sacramento County</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center">What Sacramento Drivers Say</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">Real customers, real results. See why Sacramento drivers are switching to mobile auto service.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-10">Got questions? We have answers. For more, visit our <Link href="/faq" className="text-orange-500 hover:underline">full FAQ page</Link>.</p>
          <FAQAccordion faqs={faqs} />
          <div className="text-center mt-8">
            <Link href="/faq" className="text-orange-500 hover:text-orange-600 font-semibold">
              See All FAQs →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
