import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Auto Repair Services in Sacramento, CA | EC Mobile Auto Services',
  description:
    'Full list of mobile auto repair and maintenance services in Sacramento CA. Oil changes, brakes, AC service, battery, tune-ups, coolant flush & more — we come to you.',
  alternates: { canonical: 'https://ecmobileauto.com/services' },
};

const services = [
  {
    icon: '🛢️',
    title: 'Mobile Oil Change',
    description: 'Conventional, full synthetic, and high-mileage oil changes at your home or office. Done in 30 minutes.',
    href: '/services/mobile-oil-change-sacramento',
    popular: true,
  },
  {
    icon: '❄️',
    title: 'AC Service & Recharge',
    description: "Sacramento summers hit 100°F+. Don't suffer without AC — we recharge and inspect your AC system on-site.",
    href: '/services/mobile-ac-service-sacramento',
    popular: true,
  },
  {
    icon: '🌡️',
    title: 'Coolant Flush',
    description: 'Overheating is a Sacramento summer reality. We flush and refill your cooling system to keep temperatures in check.',
    href: '/services/coolant-flush-sacramento',
  },
  {
    icon: '🔧',
    title: 'Tune-Up Service',
    description: 'Spark plugs, air filters, and ignition system service to restore performance and fuel economy.',
    href: '/services/tune-up-sacramento',
  },
  {
    icon: '🛑',
    title: 'Brake Service',
    description: 'Squealing or grinding brakes? We replace pads and rotors at your location — no shop visit needed.',
    href: '/services/mobile-brake-service-sacramento',
  },
  {
    icon: '🔋',
    title: 'Battery Replacement',
    description: 'Sacramento heat destroys batteries faster than most climates. Free test, fast replacement on-site.',
    href: '/services/mobile-battery-replacement-sacramento',
  },
  {
    icon: '⚙️',
    title: 'Serpentine Belt Replacement',
    description: 'A snapped belt leaves you stranded. We inspect and replace serpentine and drive belts before they fail.',
    href: '/services/serpentine-belt-sacramento',
  },
  {
    icon: '🔍',
    title: 'Check Engine Diagnosis',
    description: 'We scan and diagnose your check engine light with professional OBD-II tools and explain your options clearly.',
    href: '/services/mobile-check-engine-sacramento',
  },
  {
    icon: '🔄',
    title: 'Tire Rotation',
    description: 'Regular rotations extend tire life and improve handling. We handle it wherever your car is parked.',
    href: '/services/tire-rotation-sacramento',
  },
  {
    icon: '🔎',
    title: 'Pre-Purchase Inspection',
    description: "Buying a used car? We come to the seller's location so you know exactly what you're getting.",
    href: '/services/pre-purchase-inspection-sacramento',
  },
];

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC',
  url: 'https://ecmobileauto.com',
  telephone: '+19165550100',
  areaServed: 'Sacramento, CA',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Mobile Auto Repair Services',
    itemListElement: services.map((s, i) => ({
      '@type': 'Offer',
      position: i + 1,
      itemOffered: {
        '@type': 'Service',
        name: s.title,
        description: s.description,
      },
    })),
  },
};

export default function ServicesPage() {
  return (
    <>
      <SchemaMarkup schema={schema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Mobile Auto Repair Services in Sacramento, CA
          </h1>
          <p className="text-lg md:text-xl text-blue-200 max-w-2xl mx-auto">
            We bring the shop to you — at home, at work, or wherever your car is. All services performed on-site with professional equipment.
          </p>
          <a
            href="tel:9165550100"
            className="mt-8 inline-block btn-primary text-lg px-8 py-4"
          >
            📞 Call (916) 555-0100
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 text-center mb-3">
            All Services
          </h2>
          <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
            Every service is performed at your location in Sacramento County. No shop, no waiting room, no wasted time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="card hover:shadow-xl transition-shadow group relative flex flex-col"
              >
                {service.popular && (
                  <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm flex-1">{service.description}</p>
                <span className="mt-4 text-orange-500 text-sm font-semibold group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-blue-900 text-center mb-8">
            Why Sacramento Drivers Choose EC Mobile Auto Services
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: '🚗', label: 'We Come to You', sub: 'Home, work, or roadside' },
              { icon: '💰', label: 'Transparent Pricing', sub: 'No surprises, no trip fee' },
              { icon: '⏱️', label: 'Same-Day Available', sub: 'Call to check availability' },
              { icon: '🛡️', label: 'Licensed & Insured', sub: 'Fully covered work' },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold text-blue-900 text-sm">{item.label}</div>
                <div className="text-gray-500 text-xs mt-1">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Link */}
      <section className="py-10 px-4 bg-blue-50 text-center">
        <p className="text-blue-900 font-semibold text-lg mb-3">
          Wondering what it costs? See our full pricing guide.
        </p>
        <Link href="/pricing" className="btn-secondary px-6 py-3 inline-block">
          View Pricing →
        </Link>
      </section>

      <CTASection />
    </>
  );
}
