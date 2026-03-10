import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Mechanic Rancho Cordova CA | EC Mobile Auto Services LLC',
  description:
    'Mobile mechanic serving Rancho Cordova, CA. We come to your home or office for oil changes, brakes, batteries, and more. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/service-areas/mobile-mechanic-rancho-cordova' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC — Rancho Cordova',
  description: 'Mobile mechanic serving Rancho Cordova, CA.',
  telephone: '+19165550100',
  url: 'https://ecmobileauto.com/service-areas/mobile-mechanic-rancho-cordova',
  areaServed: { '@type': 'City', name: 'Rancho Cordova', containedIn: { '@type': 'State', name: 'California' } },
};

export default function MechanicRanchoCordovaPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Service Area · Sacramento County</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Mechanic in Rancho Cordova, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Professional mobile auto repair in Rancho Cordova. We service your vehicle at home, at work, or anywhere you&apos;re parked — no shop trip required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165550100" className="btn-primary text-lg">📞 Call (916) 555-0100</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online →</Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Serving Rancho Cordova Drivers</h2>
          <div className="space-y-4 text-gray-700">
            <p>Rancho Cordova sits at the crossroads of Highway 50 and the Folsom Boulevard corridor, making it one of the most traffic-heavy parts of the greater Sacramento area. Residents and employees in Rancho Cordova&apos;s significant business parks — including Aerojet Rocketdyne, Dignity Health Global Education, and dozens of other employers — deal with serious daily commutes and high-mileage vehicles.</p>
            <p>EC Mobile Auto Services is perfectly positioned to serve Rancho Cordova residents and workers. We handle oil changes, brake service, battery replacement, check engine diagnosis, and more — all done at your location during your lunch break, before your shift, or at your home in the evening.</p>
            <p>We serve all of Rancho Cordova including Anatolia, Sunridge, Cordova Meadows, Mills Station, Sunrise, and the Folsom Boulevard corridor. We also serve the adjacent Fair Oaks and Citrus Heights border areas.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Services in Rancho Cordova</h2>
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
            <Link href="/pricing" className="btn-primary">View Full Pricing →</Link>
          </div>
        </div>
      </section>

      <CTASection heading="Book a Rancho Cordova Mobile Mechanic" subheading="Same-day and next-day appointments often available. No shop visit needed." />
    </>
  );
}
