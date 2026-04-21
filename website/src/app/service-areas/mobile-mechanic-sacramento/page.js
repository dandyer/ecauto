import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Mechanic Sacramento CA | EC Mobile Auto Services LLC',
  description:
    'Mobile mechanic serving all of Sacramento, CA. Oil changes, brakes, batteries, diagnostics & more — we come to you. Same-day available. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/service-areas/mobile-mechanic-sacramento' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC',
  description: 'Mobile mechanic serving all neighborhoods in Sacramento, CA.',
  telephone: '+19165173286',
  url: 'https://ecmobileauto.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sacramento',
    addressRegion: 'CA',
    postalCode: '95814',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'Sacramento',
    containedIn: { '@type': 'State', name: 'California' },
  },
};

const neighborhoods = [
  'Midtown', 'Land Park', 'Natomas', 'Arden-Arcade', 'Pocket', 'Curtis Park',
  'Oak Park', 'Florin', 'South Sacramento', 'Del Paso Heights', 'Tahoe Park',
  'College Greens', 'Elder Creek', 'Fruitridge', 'Boulevard Park',
  'Newton Booth', 'Richmond Grove', 'Woodlake', 'Valley Hi',
];

const services = [
  { name: 'Mobile Oil Change', href: '/services/mobile-oil-change-sacramento' },
  { name: 'Brake Service', href: '/services/mobile-brake-service-sacramento' },
  { name: 'Battery Replacement', href: '/services/mobile-battery-replacement-sacramento' },
  { name: 'Check Engine Diagnosis', href: '/services/mobile-check-engine-sacramento' },
  { name: 'Tire Rotation', href: '/services/tire-rotation-sacramento' },
  { name: 'Pre-Purchase Inspection', href: '/services/pre-purchase-inspection-sacramento' },
];

export default function MechanicSacramentoPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Service Area · Sacramento County</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Mechanic in Sacramento, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            EC Mobile Auto Services is Sacramento&apos;s locally owned mobile mechanic. We serve all Sacramento neighborhoods — your home, office, or apartment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165173286" className="btn-primary text-lg">📞 Call (916) 517-3286</a>
            <Link href="/contact" className="btn-secondary text-lg">Book Online →</Link>
          </div>
        </div>
      </section>

      {/* About Sacramento Service */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Your Sacramento Mobile Mechanic</h2>
          <div className="prose prose-lg text-gray-700 space-y-4">
            <p>Sacramento is one of California&apos;s most car-dependent cities. With sprawling neighborhoods stretching from Natomas in the north to Florin and Valley Hi in the south, most Sacramento residents rely on their vehicles every single day — for commutes on I-5, I-80, and US-50, grocery runs, school pickups, and weekend trips to the mountains or the bay.</p>
            <p>When your car needs service, the last thing you want is to add a shop trip to your busy schedule. EC Mobile Auto Services was built for Sacramento drivers. We come to your home in Land Park, your office in Midtown, your apartment complex in Natomas, or wherever your vehicle happens to be. No waiting rooms, no arranging rides, no lost half-days.</p>
            <p>Owner Enrique Castillo is a long-time Sacramento resident who knows this city. He built EC Mobile Auto Services to give Sacramento residents access to honest, skilled auto repair without the hassle of a traditional shop.</p>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Sacramento Neighborhoods We Serve</h2>
          <p className="text-gray-600 text-center mb-8">We serve every corner of Sacramento, including:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {neighborhoods.map((hood) => (
              <div key={hood} className="card text-center py-3">
                <span className="text-blue-900 font-medium text-sm">{hood}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">Don&apos;t see your neighborhood? Call us — we likely cover it. (916) 517-3286</p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">Mobile Auto Services in Sacramento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {services.map((s) => (
              <Link key={s.name} href={s.href} className="card hover:shadow-lg hover:border-orange-200 border border-gray-100 transition-all text-center py-5">
                <span className="font-semibold text-blue-900">{s.name}</span>
                <p className="text-orange-500 text-xs mt-1">Learn More →</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pricing" className="btn-primary">View Pricing →</Link>
          </div>
        </div>
      </section>

      {/* Other Areas */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading">We Also Serve These Nearby Cities</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { name: 'Elk Grove', href: '/service-areas/mobile-mechanic-elk-grove' },
              { name: 'Rancho Cordova', href: '/service-areas/mobile-mechanic-rancho-cordova' },
              { name: 'Folsom', href: '/service-areas/mobile-mechanic-folsom' },
              { name: 'Roseville', href: '/service-areas/mobile-mechanic-roseville' },
              { name: 'Citrus Heights', href: '/service-areas/mobile-mechanic-citrus-heights' },
            ].map((city) => (
              <Link key={city.name} href={city.href} className="bg-white border border-gray-200 hover:border-orange-300 rounded-full px-5 py-2 text-sm font-medium text-blue-900 shadow-sm transition-colors">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Book Sacramento's Mobile Mechanic" subheading="Same-day and next-day appointments available. No shop visit needed." />
    </>
  );
}
