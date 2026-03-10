import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Mechanic Elk Grove CA | EC Mobile Auto Services LLC',
  description:
    'Mobile mechanic serving Elk Grove, CA. Oil changes, brakes, batteries & more — we come to your home or apartment. No trip fee. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/service-areas/mobile-mechanic-elk-grove' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC — Elk Grove',
  description: 'Mobile mechanic serving Elk Grove, CA. We come to your home, apartment, or workplace.',
  telephone: '+19165550100',
  url: 'https://ecmobileauto.com/service-areas/mobile-mechanic-elk-grove',
  areaServed: { '@type': 'City', name: 'Elk Grove', containedIn: { '@type': 'State', name: 'California' } },
};

const elkGroveNeighborhoods = [
  'Laguna', 'Stonelake', 'Elk Grove Village', 'Sheldon', 'Waterman', 'Laguna West',
  'Lakeside', 'Franklin', 'Wilton', 'Vineyard', 'Cosumnes River', 'Laguna Ridge',
];

export default function MechanicElkGrovePage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Service Area · Sacramento County</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Mechanic in Elk Grove, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            EC Mobile Auto Services brings professional auto repair directly to Elk Grove residents. Home, apartment, or office — we come to you, no shop trip required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165550100" className="btn-primary text-lg">📞 Call (916) 555-0100</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online →</Link>
          </div>
        </div>
      </section>

      {/* Elk Grove Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Mobile Auto Service Built for Elk Grove</h2>
          <div className="space-y-4 text-gray-700">
            <p>Elk Grove is one of the fastest-growing cities in California, and its residents know what a busy life looks like. Between long commutes on I-5 to downtown Sacramento, raising families in neighborhoods like Laguna, Stonelake, and Sheldon, and keeping up with everything else modern life demands — finding time to sit at an auto shop for two hours is a real challenge.</p>
            <p>That&apos;s exactly why EC Mobile Auto Services is such a natural fit for Elk Grove. We come to you. Whether you live in a single-family home with a driveway or in one of the many apartment complexes throughout the city, we can perform most services right where your car is parked. Our flat work surface requirement and portable equipment means we don&apos;t need a shop — just access to your vehicle.</p>
            <p>Elk Grove drivers also deal with a lot of highway miles. Regular commuters on I-5 know that consistent oil changes and tire rotations are critical for high-mileage driving. We make it easy to stay on schedule without sacrificing your weekend or taking time off work.</p>
          </div>
        </div>
      </section>

      {/* Neighborhoods + Services Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-heading">Elk Grove Areas We Serve</h2>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {elkGroveNeighborhoods.map((hood) => (
                <div key={hood} className="card py-2 text-center">
                  <span className="text-blue-900 font-medium text-sm">{hood}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-heading">Services We Offer in Elk Grove</h2>
            <ul className="space-y-3 mt-4">
              {[
                { name: 'Mobile Oil Change — From $65', href: '/services/mobile-oil-change-sacramento' },
                { name: 'Brake Service — From $150/axle', href: '/services/mobile-brake-service-sacramento' },
                { name: 'Battery Replacement — From $120', href: '/services/mobile-battery-replacement-sacramento' },
                { name: 'Check Engine Diagnosis — From $65', href: '/services/mobile-check-engine-sacramento' },
                { name: 'Tire Rotation — From $30', href: '/services/tire-rotation-sacramento' },
                { name: 'Pre-Purchase Inspection — From $100', href: '/services/pre-purchase-inspection-sacramento' },
              ].map((s) => (
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

      {/* Nearby areas */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading">We Also Serve Nearby Communities</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { name: 'Sacramento', href: '/service-areas/mobile-mechanic-sacramento' },
              { name: 'Rancho Cordova', href: '/service-areas/mobile-mechanic-rancho-cordova' },
              { name: 'Folsom', href: '/service-areas/mobile-mechanic-folsom' },
              { name: 'Citrus Heights', href: '/service-areas/mobile-mechanic-citrus-heights' },
            ].map((city) => (
              <Link key={city.name} href={city.href} className="bg-gray-100 hover:bg-orange-100 rounded-full px-5 py-2 text-sm font-medium text-blue-900 transition-colors">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Elk Grove's Mobile Mechanic" subheading="Book an appointment today — we come to your home, apartment, or office anywhere in Elk Grove." />
    </>
  );
}
