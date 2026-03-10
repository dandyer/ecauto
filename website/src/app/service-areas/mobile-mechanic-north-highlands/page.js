import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Mechanic North Highlands CA | EC Mobile Auto Services',
  description:
    'Mobile mechanic serving North Highlands, CA. Oil changes, brakes, batteries & diagnostics — we come to you. No trip fee. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/service-areas/mobile-mechanic-north-highlands' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC — North Highlands',
  description: 'Mobile mechanic serving North Highlands, CA. We come to your home, apartment, or workplace.',
  telephone: '+19165550100',
  url: 'https://ecmobileauto.com/service-areas/mobile-mechanic-north-highlands',
  areaServed: {
    '@type': 'Place',
    name: 'North Highlands',
    containedIn: { '@type': 'AdministrativeArea', name: 'Sacramento County', containedIn: { '@type': 'State', name: 'California' } },
  },
};

const neighborhoods = [
  'McClellan Park Area', 'Watt Ave Corridor', 'Roseville Rd', 'Elkhorn Blvd',
  'Don Julio Blvd', 'Marysville Blvd', 'Rio Linda Blvd', 'Grand Ave',
  'Date Ave', 'Norwood Ave', 'Auburn Blvd', 'Norwood Village',
];

const services = [
  { name: 'Mobile Oil Change', href: '/services/mobile-oil-change-north-highlands' },
  { name: 'Brake Service', href: '/services/mobile-brake-service-sacramento' },
  { name: 'Battery Replacement', href: '/services/mobile-battery-replacement-sacramento' },
  { name: 'Check Engine Diagnosis', href: '/services/mobile-check-engine-sacramento' },
  { name: 'Tire Rotation', href: '/services/tire-rotation-sacramento' },
  { name: 'Pre-Purchase Inspection', href: '/services/pre-purchase-inspection-sacramento' },
];

export default function MechanicNorthHighlandsPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <span className="mx-2">→</span>
            <span className="text-white">North Highlands</span>
          </nav>
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Service Area · Sacramento County</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Mechanic in North Highlands, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            EC Mobile Auto Services comes directly to North Highlands residents. We handle oil changes, brakes, batteries, and diagnostics at your home or workplace — no shop visit needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165550100" className="btn-primary text-lg">📞 Call (916) 555-0100</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online →</Link>
          </div>
        </div>
      </section>

      {/* Local Context */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Dependable Mobile Service for North Highlands</h2>
          <div className="space-y-4 text-gray-700">
            <p>North Highlands sits just north of Sacramento, bordered by McClellan Park — the former McClellan Air Force Base that has been transformed into a major business and industrial park. The community is practical and working-class, with many residents depending on their vehicles daily for commutes to Sacramento, Antelope, and across the county.</p>
            <p>Vehicles in North Highlands tend to rack up serious mileage. With daily drives on Watt Avenue, Marysville Boulevard, and I-80, consistent maintenance isn&apos;t optional — it&apos;s how you keep your car going. EC Mobile Auto Services makes it easier to stay on schedule by coming directly to your home or apartment, removing the barrier of a shop visit for residents who can&apos;t afford to be without their vehicle for a half-day.</p>
            <p>We serve all of North Highlands, from the neighborhoods clustered around Auburn Boulevard and Roseville Road to the residential streets near Elkhorn Boulevard and Don Julio. If you work at McClellan Park, we can also come to your workplace parking lot during your shift.</p>
          </div>
        </div>
      </section>

      {/* Why Mobile in North Highlands */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Why North Highlands Residents Choose Mobile Service</h2>
          <ul className="space-y-4 mt-6">
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
              <div>
                <p className="font-bold text-blue-900">No Car Needed to Get Your Car Fixed</p>
                <p className="text-gray-700 text-sm mt-1">If your vehicle won&apos;t start or you can&apos;t spare the time to get to a shop, a mobile mechanic is the answer. We come to you — you don&apos;t need a ride or a tow.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
              <div>
                <p className="font-bold text-blue-900">Convenient for Shift Workers and Commuters</p>
                <p className="text-gray-700 text-sm mt-1">Many North Highlands residents work shifts or have irregular hours. We offer flexible scheduling and can often accommodate early-morning or weekend appointments that traditional shops won&apos;t.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
              <div>
                <p className="font-bold text-blue-900">Upfront Pricing, No Surprise Upsells</p>
                <p className="text-gray-700 text-sm mt-1">We quote your service before we start and stick to that quote. No shop pressure tactics, no last-minute add-ons. What we tell you on the phone is what you pay.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Neighborhoods + Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-heading">North Highlands Areas We Serve</h2>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {neighborhoods.map((hood) => (
                <div key={hood} className="card py-2 text-center">
                  <span className="text-blue-900 font-medium text-sm">{hood}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4">Don&apos;t see your street? Call us — we likely cover it.</p>
          </div>
          <div>
            <h2 className="section-heading">Services We Offer in North Highlands</h2>
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
          <h2 className="section-heading text-center">Find Us in North Highlands</h2>
          <div className="mt-6 bg-gray-100 rounded-xl flex items-center justify-center h-48 border border-gray-200">
            <a
              href="https://www.google.com/maps/search/mobile+mechanic+north+highlands+ca"
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
              { name: 'Antelope', href: '/service-areas/mobile-mechanic-antelope' },
              { name: 'Sacramento', href: '/service-areas/mobile-mechanic-sacramento' },
              { name: 'Citrus Heights', href: '/service-areas/mobile-mechanic-citrus-heights' },
              { name: 'Carmichael', href: '/service-areas/mobile-mechanic-carmichael' },
              { name: 'Roseville', href: '/service-areas/mobile-mechanic-roseville' },
            ].map((city) => (
              <Link key={city.name} href={city.href} className="bg-white border border-gray-200 hover:border-orange-300 rounded-full px-5 py-2 text-sm font-medium text-blue-900 shadow-sm transition-colors">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="North Highlands' Mobile Mechanic" subheading="Dependable auto service at your door. Call (916) 555-0100 to book — same-day often available." />
    </>
  );
}
