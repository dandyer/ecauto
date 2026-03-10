import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Mechanic Citrus Heights CA | EC Mobile Auto Services LLC',
  description:
    'Mobile mechanic serving Citrus Heights, CA. Oil changes, brakes, batteries & diagnostics at your home or office. No shop visit needed. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/service-areas/mobile-mechanic-citrus-heights' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC — Citrus Heights',
  description: 'Mobile mechanic serving Citrus Heights, CA.',
  telephone: '+19165173286',
  url: 'https://ecmobileauto.com/service-areas/mobile-mechanic-citrus-heights',
  areaServed: { '@type': 'City', name: 'Citrus Heights', containedIn: { '@type': 'State', name: 'California' } },
};

export default function MechanicCitrusHeightsPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Service Area · Sacramento County</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Mechanic in Citrus Heights, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Professional mobile auto repair serving all of Citrus Heights. We come to your home or driveway — fast, convenient, and fairly priced.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165173286" className="btn-primary text-lg">📞 Call (916) 517-3286</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online →</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Mobile Auto Service in Citrus Heights</h2>
          <div className="space-y-4 text-gray-700">
            <p>Citrus Heights is a suburban Sacramento County community nestled between Fair Oaks, Rancho Cordova, and Roseville. It&apos;s a community of working families, commuters, and long-time Sacramento-area residents who know the value of a good local mechanic.</p>
            <p>EC Mobile Auto Services brings full-service mobile auto repair to Citrus Heights. From the Sunrise Boulevard corridor to the Greenback Lane neighborhoods, we serve all of Citrus Heights with the same honest pricing and professional service that Sacramento drivers have come to rely on.</p>
            <p>Oil changes are our most popular service in Citrus Heights — we typically complete them in 20–30 minutes while you stay home. We also handle brake inspections and replacement, battery testing and swaps, check engine light diagnosis, tire rotations, and pre-purchase inspections for used cars found on Facebook Marketplace or Craigslist listings in the area.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Services in Citrus Heights, CA</h2>
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
          <div className="text-center mt-8">
            <Link href="/pricing" className="btn-primary">View Full Pricing</Link>
          </div>
        </div>
      </section>

      <CTASection heading="Book a Citrus Heights Mobile Mechanic" subheading="We come to you — same-day and next-day appointments available in Citrus Heights." />
    </>
  );
}
