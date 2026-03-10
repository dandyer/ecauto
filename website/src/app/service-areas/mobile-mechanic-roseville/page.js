import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Mechanic Roseville CA | EC Mobile Auto Services LLC',
  description:
    'Mobile mechanic serving Roseville, CA (Placer County). Oil changes, brakes, batteries & more. We come to you in West Roseville, Galleria area, and beyond. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/service-areas/mobile-mechanic-roseville' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC — Roseville',
  description: 'Mobile mechanic serving Roseville, CA in Placer County.',
  telephone: '+19165550100',
  url: 'https://ecmobileauto.com/service-areas/mobile-mechanic-roseville',
  areaServed: { '@type': 'City', name: 'Roseville', containedIn: { '@type': 'State', name: 'California' } },
};

export default function MechanicRosevillePage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Service Area · Placer County</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Mechanic in Roseville, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            EC Mobile Auto Services extends into Placer County, serving Roseville&apos;s growing communities with professional mobile auto repair. From West Roseville to the Galleria area — we come to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165550100" className="btn-primary text-lg">📞 Call (916) 555-0100</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online →</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Mobile Auto Repair for Roseville Residents</h2>
          <div className="space-y-4 text-gray-700">
            <p>Roseville is one of California&apos;s fastest-growing cities, with thriving master-planned communities in West Roseville, established neighborhoods near the Galleria, and a massive commuter population that depends on I-80 every day. The city&apos;s population has grown by more than 20% over the past decade, bringing tens of thousands of new vehicles to Placer County roads.</p>
            <p>EC Mobile Auto Services extends our Sacramento County service area into Roseville, providing the same professional, convenient mobile mechanic experience that Sacramento drivers enjoy. Whether you live in the Morgan Creek, Crocker Ranch, or any of the newer subdivisions in West Roseville, we can come to your home and handle your car&apos;s maintenance needs on-site.</p>
            <p>Roseville&apos;s location at the base of the Sierra Nevada means vehicles here experience both hot summer temperatures and colder winter conditions — a combination that accelerates battery wear and makes proper maintenance even more important. Our mobile service makes it easy to stay on schedule.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Roseville Communities We Serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
            {['West Roseville', 'Galleria Area', 'Crocker Ranch', 'Morgan Creek', 'Diamond Oaks', 'Kaseberg', 'Fiddyment Ranch', 'Westpark'].map((hood) => (
              <div key={hood} className="card text-center py-3">
                <span className="text-blue-900 font-medium text-sm">{hood}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Services in Roseville, CA</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {[
              { name: 'Mobile Oil Change', price: 'From $65', href: '/services/mobile-oil-change-sacramento' },
              { name: 'Brake Service', price: 'From $150/axle', href: '/services/mobile-brake-service-sacramento' },
              { name: 'Battery Replacement', price: 'From $120', href: '/services/mobile-battery-replacement-sacramento' },
              { name: 'Check Engine Diagnosis', price: 'From $65', href: '/services/mobile-check-engine-sacramento' },
              { name: 'Tire Rotation', price: 'From $30', href: '/services/tire-rotation-sacramento' },
              { name: 'Pre-Purchase Inspection', price: 'From $100', href: '/services/pre-purchase-inspection-sacramento' },
            ].map((s) => (
              <Link key={s.name} href={s.href} className="card hover:shadow-lg hover:border-orange-200 border border-gray-100 transition-all">
                <h3 className="font-bold text-blue-900">{s.name}</h3>
                <p className="text-orange-500 font-semibold text-sm mt-1">{s.price}</p>
                <p className="text-gray-500 text-xs mt-2">Learn More →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Roseville's Mobile Mechanic" subheading="Book an appointment in Roseville — we come to you, no Placer County shop required." />
    </>
  );
}
