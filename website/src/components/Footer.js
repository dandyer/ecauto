import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🔧</span>
              <span className="text-white font-bold text-lg">EC Mobile Auto Services LLC</span>
            </div>
            <p className="text-blue-300 text-sm mb-4">Sacramento&apos;s Mobile Mechanic — We come to your home, office, or roadside.</p>
            <a
              href="tel:9165173286"
              className="inline-block text-orange-400 hover:text-orange-300 font-bold text-lg transition-colors"
            >
              (916) 517-3286
            </a>
            <p className="text-blue-400 text-xs mt-2">Licensed &amp; Insured • Sacramento, CA</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact / Book</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/mobile-oil-change-sacramento" className="hover:text-white transition-colors">Mobile Oil Change</Link></li>
              <li><Link href="/services/mobile-brake-service-sacramento" className="hover:text-white transition-colors">Brake Service</Link></li>
              <li><Link href="/services/mobile-battery-replacement-sacramento" className="hover:text-white transition-colors">Battery Replacement</Link></li>
              <li><Link href="/services/mobile-check-engine-sacramento" className="hover:text-white transition-colors">Check Engine Diagnosis</Link></li>
              <li><Link href="/services/tire-rotation-sacramento" className="hover:text-white transition-colors">Tire Rotation</Link></li>
              <li><Link href="/services/pre-purchase-inspection-sacramento" className="hover:text-white transition-colors">Pre-Purchase Inspection</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/service-areas/mobile-mechanic-sacramento" className="hover:text-white transition-colors">Sacramento</Link></li>
              <li><Link href="/service-areas/mobile-mechanic-elk-grove" className="hover:text-white transition-colors">Elk Grove</Link></li>
              <li><Link href="/service-areas/mobile-mechanic-folsom" className="hover:text-white transition-colors">Folsom</Link></li>
              <li><Link href="/service-areas/mobile-mechanic-rancho-cordova" className="hover:text-white transition-colors">Rancho Cordova</Link></li>
              <li><Link href="/service-areas/mobile-mechanic-roseville" className="hover:text-white transition-colors">Roseville</Link></li>
              <li><Link href="/service-areas/mobile-mechanic-citrus-heights" className="hover:text-white transition-colors">Citrus Heights</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-400">
          <p>&copy; {currentYear} EC Mobile Auto Services LLC. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <a href="tel:9165173286" className="hover:text-orange-400 transition-colors font-medium">(916) 517-3286</a>
            <span>•</span>
            <span>Licensed &amp; Insured</span>
            <span>•</span>
            <span>Sacramento, CA</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
