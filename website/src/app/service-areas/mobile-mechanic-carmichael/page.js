import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Mechanic Carmichael CA | EC Mobile Auto Services',
  description:
    'Mobile mechanic serving Carmichael, CA. Oil changes, brakes, batteries & diagnostics at your home or apartment. No trip fee. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/service-areas/mobile-mechanic-carmichael' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC — Carmichael',
  description: 'Mobile mechanic serving Carmichael, CA. We come to your home, apartment complex, or workplace.',
  telephone: '+19165173286',
  url: 'https://ecmobileauto.com/service-areas/mobile-mechanic-carmichael',
  areaServed: {
    '@type': 'Place',
    name: 'Carmichael',
    containedIn: { '@type': 'AdministrativeArea', name: 'Sacramento County', containedIn: { '@type': 'State', name: 'California' } },
  },
};

const neighborhoods = [
  'Manzanita Ave Corridor', 'Fair Oaks Blvd Area', 'Garfield Ave', 'Marconi Ave',
  'Winding Way', 'Palm Ave', 'San Juan Ave', 'Dewey Dr', 'Walnut Ave', 'Coyle Ave',
  'Arcade Creek', 'La Sierra', 'Cameron Park Dr', 'Rossmoor',
];

const services = [
  { name: 'Mobile Oil Change', href: '/services/mobile-oil-change-carmichael' },
  { name: 'Brake Service', href: '/services/mobile-brake-service-sacramento' },
  { name: 'Battery Replacement', href: '/services/mobile-battery-replacement-sacramento' },
  { name: 'Check Engine Diagnosis', href: '/services/mobile-check-engine-sacramento' },
  { name: 'Tire Rotation', href: '/services/tire-rotation-sacramento' },
  { name: 'Pre-Purchase Inspection', href: '/services/pre-purchase-inspection-sacramento' },
];

export default function MechanicCarmichaelPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <span className="mx-2">→</span>
            <span className="text-white">Carmichael</span>
          </nav>
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Service Area · Sacramento County</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Mechanic in Carmichael, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            EC Mobile Auto Services sends a professional mechanic directly to Carmichael residents. Your driveway, your apartment complex, or wherever your car is parked — we come to you.
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
          <h2 className="section-heading">Mobile Auto Repair Built for Carmichael</h2>
          <div className="space-y-4 text-gray-700">
            <p>Carmichael is one of Sacramento County&apos;s most established unincorporated communities, tucked between Sacramento proper to the west and Fair Oaks to the east. The community is characterized by mature tree-lined streets, established single-family neighborhoods, and a mix of older ranch homes and apartment complexes concentrated along Manzanita Avenue and Fair Oaks Boulevard.</p>
            <p>Many Carmichael residents have lived here for decades and drive vehicles that are well past the 100,000-mile mark. These older cars and trucks need attentive, regular maintenance — and the residents who own them often don&apos;t have time to sit at a shop for hours. EC Mobile Auto Services is a natural fit: we come to your home, handle the service efficiently, and leave your vehicle in better shape than we found it.</p>
            <p>Whether you live in an apartment along Manzanita, own a home off Garfield Avenue, or park in the lot at your workplace near Marconi, we can reach you. Enrique has served the Carmichael community and knows the area&apos;s roads and neighborhoods well.</p>
          </div>
        </div>
      </section>

      {/* Why Mobile in Carmichael */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Why Carmichael Drivers Choose Mobile Service</h2>
          <ul className="space-y-4 mt-6">
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
              <div>
                <p className="font-bold text-blue-900">No Shop Trips Through Busy Corridor Traffic</p>
                <p className="text-gray-700 text-sm mt-1">Fair Oaks Blvd and Manzanita Ave can be congested, especially during morning and evening rush. A mobile mechanic eliminates the need to navigate that traffic just to drop off a car.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
              <div>
                <p className="font-bold text-blue-900">Ideal for Older Vehicles That Need Frequent Service</p>
                <p className="text-gray-700 text-sm mt-1">Carmichael has a high concentration of older, high-mileage vehicles. Mobile service makes it easy to keep up with oil changes, belt inspections, and battery checks without a stressful shop visit.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
              <div>
                <p className="font-bold text-blue-900">Works at Apartment Complexes Too</p>
                <p className="text-gray-700 text-sm mt-1">We serve the many residents in Carmichael&apos;s apartment complexes along Manzanita and beyond. As long as you have a parking space, we can work there — no special setup required.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Neighborhoods + Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-heading">Carmichael Areas We Serve</h2>
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
            <h2 className="section-heading">Services We Offer in Carmichael</h2>
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
          <h2 className="section-heading text-center">Find Us in Carmichael</h2>
          <div className="mt-6 bg-gray-100 rounded-xl flex items-center justify-center h-48 border border-gray-200">
            <a
              href="https://www.google.com/maps/search/mobile+mechanic+carmichael+ca"
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
              { name: 'Sacramento', href: '/service-areas/mobile-mechanic-sacramento' },
              { name: 'Fair Oaks', href: '/service-areas/mobile-mechanic-fair-oaks' },
              { name: 'Citrus Heights', href: '/service-areas/mobile-mechanic-citrus-heights' },
              { name: 'Rancho Cordova', href: '/service-areas/mobile-mechanic-rancho-cordova' },
              { name: 'North Highlands', href: '/service-areas/mobile-mechanic-north-highlands' },
            ].map((city) => (
              <Link key={city.name} href={city.href} className="bg-white border border-gray-200 hover:border-orange-300 rounded-full px-5 py-2 text-sm font-medium text-blue-900 shadow-sm transition-colors">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Carmichael's Mobile Mechanic" subheading="Same-day and next-day appointments available. No shop trip needed — we come to you anywhere in Carmichael." />
    </>
  );
}
