import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Mobile Mechanic Fair Oaks CA | EC Mobile Auto Services',
  description:
    'Mobile mechanic serving Fair Oaks, CA. Oil changes, brakes, batteries & diagnostics at your home or workplace. No trip fee. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/service-areas/mobile-mechanic-fair-oaks' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC — Fair Oaks',
  description: 'Mobile mechanic serving Fair Oaks, CA. We come to your home, driveway, or workplace.',
  telephone: '+19165550100',
  url: 'https://ecmobileauto.com/service-areas/mobile-mechanic-fair-oaks',
  areaServed: {
    '@type': 'Place',
    name: 'Fair Oaks',
    containedIn: { '@type': 'AdministrativeArea', name: 'Sacramento County', containedIn: { '@type': 'State', name: 'California' } },
  },
};

const neighborhoods = [
  'Fair Oaks Village', 'Diablo Ave Area', 'Hazel Ave Corridor', 'San Juan Ave',
  'Greenback Ln', 'Fair Oaks Blvd', 'Pennsylvania Ave', 'Sunset Ave',
  'American River Canyon', 'Sailor Bar Area', 'Oak Ave', 'Madison Ave',
];

const services = [
  { name: 'Mobile Oil Change', href: '/services/mobile-oil-change-fair-oaks' },
  { name: 'Brake Service', href: '/services/mobile-brake-service-sacramento' },
  { name: 'Battery Replacement', href: '/services/mobile-battery-replacement-sacramento' },
  { name: 'Check Engine Diagnosis', href: '/services/mobile-check-engine-sacramento' },
  { name: 'Tire Rotation', href: '/services/tire-rotation-sacramento' },
  { name: 'Pre-Purchase Inspection', href: '/services/pre-purchase-inspection-sacramento' },
];

export default function MechanicFairOaksPage() {
  return (
    <>
      <SchemaMarkup schema={localBusinessSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-blue-300 mb-4">
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <span className="mx-2">→</span>
            <span className="text-white">Fair Oaks</span>
          </nav>
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Service Area · Sacramento County</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Mobile Mechanic in Fair Oaks, CA
          </h1>
          <p className="text-blue-200 text-xl mb-8 max-w-2xl">
            EC Mobile Auto Services brings reliable auto repair right to Fair Oaks. Whether you live near the Village, by Sailor Bar, or anywhere along Greenback Lane — we come to you.
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
          <h2 className="section-heading">Mobile Auto Repair Tailored for Fair Oaks</h2>
          <div className="space-y-4 text-gray-700">
            <p>Fair Oaks is one of Sacramento County&apos;s most beloved unincorporated communities, known for its charming downtown Village, the famous Fair Oaks Chicken roaming Main Avenue, and easy access to the American River at Sailor Bar County Park. It has a small-town feel within reach of Sacramento&apos;s amenities — and a community that takes pride in its homes and vehicles.</p>
            <p>Fair Oaks is characterized by mature tree-lined streets, established homeowners, and a population that tends to hold onto their vehicles longer than average. That means older vehicles, higher mileage, and a real need for consistent, trustworthy maintenance. EC Mobile Auto Services brings the full service experience to your Fair Oaks driveway — no shop wait, no leaving your car overnight.</p>
            <p>From neighborhoods near the Village to homes backing the American River Canyon, we cover all of Fair Oaks. Enrique and his team arrive with everything needed to complete your service on-site, leaving your driveway clean and your car running right.</p>
          </div>
        </div>
      </section>

      {/* Why Mobile in Fair Oaks */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading">Why Fair Oaks Homeowners Choose Mobile Service</h2>
          <ul className="space-y-4 mt-6">
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">1</span>
              <div>
                <p className="font-bold text-blue-900">Skip the Shop, Stay on Your Property</p>
                <p className="text-gray-700 text-sm mt-1">Fair Oaks homeowners have driveways — use them. We perform oil changes, brake service, and battery replacements right on your property, so your afternoon stays yours.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">2</span>
              <div>
                <p className="font-bold text-blue-900">Older Vehicles Get the Attention They Need</p>
                <p className="text-gray-700 text-sm mt-1">Many Fair Oaks residents drive vehicles well over 100,000 miles. Our technicians specialize in high-mileage maintenance — high-mileage oil, belt inspections, and thorough multi-point checks every visit.</p>
              </div>
            </li>
            <li className="flex gap-4 items-start">
              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shrink-0 mt-0.5">3</span>
              <div>
                <p className="font-bold text-blue-900">Local, Honest Service You Can Watch</p>
                <p className="text-gray-700 text-sm mt-1">Unlike a shop where your car disappears into the back, we work in plain sight. You can watch every step, ask questions, and know exactly what was done before you get back in your vehicle.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Neighborhoods + Services */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="section-heading">Fair Oaks Areas We Serve</h2>
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
            <h2 className="section-heading">Services We Offer in Fair Oaks</h2>
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
          <h2 className="section-heading text-center">Find Us in Fair Oaks</h2>
          <div className="mt-6 bg-gray-100 rounded-xl flex items-center justify-center h-48 border border-gray-200">
            <a
              href="https://www.google.com/maps/search/mobile+mechanic+fair+oaks+ca"
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
              { name: 'Carmichael', href: '/service-areas/mobile-mechanic-carmichael' },
              { name: 'Orangevale', href: '/service-areas/mobile-mechanic-orangevale' },
              { name: 'Folsom', href: '/service-areas/mobile-mechanic-folsom' },
              { name: 'Citrus Heights', href: '/service-areas/mobile-mechanic-citrus-heights' },
              { name: 'Rancho Cordova', href: '/service-areas/mobile-mechanic-rancho-cordova' },
            ].map((city) => (
              <Link key={city.name} href={city.href} className="bg-white border border-gray-200 hover:border-orange-300 rounded-full px-5 py-2 text-sm font-medium text-blue-900 shadow-sm transition-colors">
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Fair Oaks' Mobile Mechanic" subheading="We come to your Fair Oaks home, driveway, or workplace. Book today — same-day often available." />
    </>
  );
}
