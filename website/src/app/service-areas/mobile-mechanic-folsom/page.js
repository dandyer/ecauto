import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Mechanic Folsom CA | EC Mobile Auto Services LLC',
  description:
    'Mobile mechanic serving Folsom, CA. Oil changes, brakes, batteries & diagnostics — we come to you. No trip fee. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/service-areas/mobile-mechanic-folsom' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC — Folsom',
  description: 'Mobile mechanic serving Folsom, CA. We come to your home, office, or workplace.',
  telephone: '+19165173286',
  url: 'https://ecmobileauto.com/service-areas/mobile-mechanic-folsom',
  areaServed: { '@type': 'City', name: 'Folsom', containedIn: { '@type': 'State', name: 'California' } },
};

export default function MechanicFolsomPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Service Area · Sacramento County</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Mechanic in Folsom, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Serving Folsom&apos;s tech workers, commuters, and families with professional mobile auto repair. We come to your home, office park, or Folsom Lake area parking lot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165173286" className="btn-primary text-lg">📞 Call (916) 517-3286</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online →</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Mobile Auto Repair for Folsom Drivers</h2>
          <div className="space-y-4 text-gray-700">
            <p>Folsom is one of the most desirable communities in the Sacramento region — a planned city with excellent schools, beautiful trails around Folsom Lake, and a booming tech sector. The Empire Ranch, Willow Creek, and Broadstone communities are home to many working professionals who commute into Sacramento or work locally at Intel, Oracle, or other major employers.</p>
            <p>These are exactly the people who benefit most from mobile auto service. Folsom commuters put serious miles on their vehicles driving US-50. Regular oil changes, tire rotations, and brake inspections are essential for keeping high-mileage commuter vehicles reliable — and doing all of this without losing a day to shop visits is a genuine quality-of-life improvement.</p>
            <p>EC Mobile Auto Services serves all of Folsom, including Empire Ranch, Willow Creek, Broadstone, Briggs Ranch, and the historic district. We also serve the surrounding areas of El Dorado Hills and Cameron Park when appointments are available.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Services in Folsom, CA</h2>
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

      <CTASection heading="Folsom's Mobile Mechanic" subheading="Book an appointment in Folsom today — we come to you, no shop required." />
    </>
  );
}
