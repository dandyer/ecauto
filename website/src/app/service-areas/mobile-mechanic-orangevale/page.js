import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Mechanic Orangevale CA | EC Mobile Auto Services',
  description:
    'Mobile mechanic serving Orangevale, CA. Oil changes, brakes, batteries & diagnostics at your home. No trip fee. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/service-areas/mobile-mechanic-orangevale' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC — Orangevale',
  description: 'Mobile mechanic serving Orangevale, CA. We come to your home, property, or driveway.',
  telephone: '+19165173286',
  url: 'https://ecmobileauto.com/service-areas/mobile-mechanic-orangevale',
  areaServed: {
    '@type': 'Place',
    name: 'Orangevale',
    containedIn: { '@type': 'AdministrativeArea', name: 'Sacramento County', containedIn: { '@type': 'State', name: 'California' } },
  },
};

const neighborhoods = [
  'Orangevale Village', 'Hazel Ave Corridor', 'Greenback Ln Area', 'Winding Way',
  'Oak Ave', 'Filbert Ave', 'Madison Ave East', 'Orangevale Ave',
  'Folsom Lake Drive Area', 'Nielsen Rd', 'Sunset Ave', 'Arnold Rd',
];

const services = [
  { name: 'Mobile Oil Change', href: '/services/mobile-oil-change-sacramento' },
  { name: 'Brake Service', href: '/services/mobile-brake-service-sacramento' },
  { name: 'Battery Replacement', href: '/services/mobile-battery-replacement-sacramento' },
  { name: 'Check Engine Diagnosis', href: '/services/mobile-check-engine-sacramento' },
  { name: 'Tire Rotation', href: '/services/tire-rotation-sacramento' },
  { name: 'Pre-Purchase Inspection', href: '/services/pre-purchase-inspection-sacramento' },
];

export default function MechanicOrangevalePage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <span className="mx-2">→</span>
            <span className="text-white">Orangevale</span>
          </nav>
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Service Area · Sacramento County</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Mechanic in Orangevale, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            Orangevale residents are spread out, and auto shops are far away. EC Mobile Auto Services brings professional repair directly to your property — trucks, SUVs, older rigs, we handle them all.
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
          <h2 className="section-heading">Mobile Auto Repair Made for Orangevale&apos;s Rural Character</h2>
          <div className="space-y-4 text-gray-700">
            <p>Orangevale is unlike most Sacramento County communities — it retains a genuinely semi-rural character, with larger lots, horse properties, oak trees, and residents who value space and independence. Nestled east of Citrus Heights and north of Folsom Lake, it&apos;s close to the foothills without being remote. But that foothill-adjacent location also means auto shops can feel far away, especially for residents deep in the residential streets east of Hazel Avenue.</p>
            <p>Orangevale residents commonly drive older trucks, full-size SUVs, and work vehicles that put on serious mileage hauling trailers, navigating rural roads, and commuting to Folsom, Rancho Cordova, and Sacramento. These vehicles need consistent maintenance, and mobile service is uniquely well-suited for a community where many properties have ample space to work. We can service a pickup truck or SUV right in your driveway or on your property — no issue.</p>
            <p>The relative lack of nearby auto shops in Orangevale means residents often drive 20–30 minutes for routine service. EC Mobile Auto Services eliminates that entirely. We come to you, complete the work efficiently, and you keep your morning or afternoon.</p>
          </div>
        </div>
      </section>

      {/* Why Mobile in Orangevale */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Why Orangevale Drivers Choose Mobile Service</h2>
          <ul className="space-y-4 mt-6">
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
              <div>
                <p className="font-bold text-blue-900">Shops Are Far — We&apos;re Not</p>
                <p className="text-gray-700 text-sm mt-1">Getting to a good shop from eastern Orangevale takes time and planning. Mobile service eliminates that drive entirely. We come to your property, handle the job, and you&apos;re done.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
              <div>
                <p className="font-bold text-blue-900">Trucks and SUVs Welcome</p>
                <p className="text-gray-700 text-sm mt-1">We regularly service full-size pickups, 4WD SUVs, and work trucks common in Orangevale. Oil changes, brake service, and battery replacements on larger vehicles are no problem for our team.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
              <div>
                <p className="font-bold text-blue-900">Ideal for Property Owners with Multiple Vehicles</p>
                <p className="text-gray-700 text-sm mt-1">Many Orangevale properties have two, three, or more vehicles. We can service multiple cars in a single visit, keeping your whole fleet maintained without multiple shop trips.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Neighborhoods + Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-heading">Orangevale Areas We Serve</h2>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {neighborhoods.map((hood) => (
                <div key={hood} className="card py-2 text-center">
                  <span className="text-blue-900 font-medium text-sm">{hood}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-xs mt-4">Don&apos;t see your road? Call us — we likely cover it.</p>
          </div>
          <div>
            <h2 className="section-heading">Services We Offer in Orangevale</h2>
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
          <h2 className="section-heading text-center">Find Us in Orangevale</h2>
          <div className="mt-6 bg-gray-100 rounded-xl flex items-center justify-center h-48 border border-gray-200">
            <a
              href="https://www.google.com/maps/search/mobile+mechanic+orangevale+ca"
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
              { name: 'Fair Oaks', href: '/service-areas/mobile-mechanic-fair-oaks' },
              { name: 'Folsom', href: '/service-areas/mobile-mechanic-folsom' },
              { name: 'Citrus Heights', href: '/service-areas/mobile-mechanic-citrus-heights' },
              { name: 'Carmichael', href: '/service-areas/mobile-mechanic-carmichael' },
              { name: 'Rancho Cordova', href: '/service-areas/mobile-mechanic-rancho-cordova' },
            ].map((city) => (
              <Link key={city.name} href={city.href} className="bg-white border border-gray-200 hover:border-orange-300 rounded-full px-5 py-2 text-sm font-medium text-blue-900 shadow-sm transition-colors">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Orangevale's Mobile Mechanic" subheading="We come to your property anywhere in Orangevale. Call (916) 517-3286 — same-day service often available." />
    </>
  );
}
