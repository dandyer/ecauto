import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Mechanic Antelope CA | EC Mobile Auto Services',
  description:
    'Mobile mechanic serving Antelope, CA. Oil changes, brakes, batteries & diagnostics — we come to your home or office. No trip fee. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/service-areas/mobile-mechanic-antelope' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC — Antelope',
  description: 'Mobile mechanic serving Antelope, CA. We come to your home, apartment, or workplace anywhere in Antelope.',
  telephone: '+19165173286',
  url: 'https://ecmobileauto.com/service-areas/mobile-mechanic-antelope',
  areaServed: {
    '@type': 'Place',
    name: 'Antelope',
    containedIn: { '@type': 'AdministrativeArea', name: 'Sacramento County', containedIn: { '@type': 'State', name: 'California' } },
  },
};

const neighborhoods = [
  'Antelope Commons', 'Quail Glen', 'Dry Creek Ranch', 'Highland Reserve',
  'Westborough Park', 'Palmbrook', 'Antelope Meadows', 'Shadow Glen',
  'Valle Verde', 'Walerga Rd Area', 'Don Julio Blvd', 'Elverta Rd Corridor',
];

const services = [
  { name: 'Mobile Oil Change', href: '/services/mobile-oil-change-antelope' },
  { name: 'Brake Service', href: '/services/mobile-brake-service-sacramento' },
  { name: 'Battery Replacement', href: '/services/mobile-battery-replacement-sacramento' },
  { name: 'Check Engine Diagnosis', href: '/services/mobile-check-engine-sacramento' },
  { name: 'Tire Rotation', href: '/services/tire-rotation-sacramento' },
  { name: 'Pre-Purchase Inspection', href: '/services/pre-purchase-inspection-sacramento' },
];

export default function MechanicAntelopePage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <span className="mx-2">→</span>
            <span className="text-white">Antelope</span>
          </nav>
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Service Area · Sacramento County</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Mechanic in Antelope, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Antelope families are busy. EC Mobile Auto Services brings professional auto repair directly to your home or workplace — so your vehicle gets serviced without disrupting your schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165173286" className="btn-primary text-lg">📞 Call (916) 517-3286</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online →</Link>
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Serving Antelope&apos;s Growing Community</h2>
          <div className="space-y-4 text-gray-700">
            <p>Antelope is one of northern Sacramento County&apos;s fastest-growing unincorporated communities, and for good reason. Large planned subdivisions, newer housing developments, highly rated schools, and easy freeway access to both Sacramento and Roseville have made it a destination for families who want space without leaving the metro area.</p>
            <p>With so many families in Antelope managing two or more vehicles — and long commutes along I-80 and Highway 65 — keeping up with vehicle maintenance is critical but time-consuming. EC Mobile Auto Services solves this directly: we come to your Antelope home while you&apos;re working from home, watching the kids, or just getting things done. Your vehicle is serviced in the driveway or your parking spot, and you don&apos;t miss a beat.</p>
            <p>We serve all of Antelope&apos;s subdivisions, from the established neighborhoods near Walerga Road to the newer developments off Don Julio Boulevard and Elverta Road. Multi-car households can schedule back-to-back appointments for added convenience.</p>
          </div>
        </div>
      </section>

      {/* Why Mobile in Antelope */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Why Antelope Commuters Choose Mobile Service</h2>
          <ul className="space-y-4 mt-6">
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
              <div>
                <p className="font-bold text-blue-900">No Extra Trip During a Packed Schedule</p>
                <p className="text-gray-700 text-sm mt-1">Antelope commuters already spend significant time on the road heading to Sacramento or Roseville. A mobile oil change or brake service at home means one less errand draining your limited free time.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
              <div>
                <p className="font-bold text-blue-900">Multiple Vehicles Serviced in One Visit</p>
                <p className="text-gray-700 text-sm mt-1">Many Antelope households have two or three vehicles. We can service multiple cars in a single appointment block — saving you time and keeping the whole fleet in top shape.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
              <div>
                <p className="font-bold text-blue-900">Flexible Hours That Work Around Your Family</p>
                <p className="text-gray-700 text-sm mt-1">We offer early morning and weekend appointments so Antelope parents and commuters don&apos;t have to choose between car maintenance and family time. Call us to discuss scheduling options.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Neighborhoods + Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-heading">Antelope Neighborhoods We Serve</h2>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {neighborhoods.map((hood) => (
                <div key={hood} className="card py-2 text-center">
                  <span className="text-blue-900 font-medium text-sm">{hood}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4">Don&apos;t see your subdivision? Call us — we likely cover it.</p>
          </div>
          <div>
            <h2 className="section-heading">Services We Offer in Antelope</h2>
            <ul className="space-y-3 mt-4">
              {services.map((s) => (
                <li key={s.name}>
                  <Link href={s.href} className="flex items-center gap-2 text-blue-900 hover:text-orange-500 font-medium text-sm transition-colors">
                    <span className="text-orange-500">→</span> {s.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/pricing" className="btn-primary mt-6 inline-block">See Full Pricing</Link>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">Find Us in Antelope</h2>
          <div className="mt-6 bg-gray-100 rounded-xl flex items-center justify-center h-48 border border-gray-200">
            <a
              href="https://www.google.com/maps/search/mobile+mechanic+antelope+ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-semibold hover:underline"
            >
              Find us on Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading">We Also Serve These Nearby Communities</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { name: 'North Highlands', href: '/service-areas/mobile-mechanic-north-highlands' },
              { name: 'Citrus Heights', href: '/service-areas/mobile-mechanic-citrus-heights' },
              { name: 'Roseville', href: '/service-areas/mobile-mechanic-roseville' },
              { name: 'Sacramento', href: '/service-areas/mobile-mechanic-sacramento' },
              { name: 'Carmichael', href: '/service-areas/mobile-mechanic-carmichael' },
            ].map((city) => (
              <Link key={city.name} href={city.href} className="bg-white border border-gray-200 hover:border-orange-300 rounded-full px-5 py-2 text-sm font-medium text-blue-900 shadow-sm transition-colors">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Antelope's Mobile Mechanic" subheading="We come to your Antelope home or workplace. Book today — same-day appointments often available." />
    </>
  );
}
