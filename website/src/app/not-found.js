import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | EC Mobile Auto Services LLC',
  description: 'The page you were looking for could not be found. EC Mobile Auto Services LLC — mobile mechanic serving Sacramento County.',
};

export default function NotFound() {
  return (
    <>
      {/* Header area */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-orange-400 font-extrabold text-6xl mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Page Not Found
          </h1>
          <p className="text-blue-200 text-lg max-w-xl mx-auto">
            The page you were looking for doesn&apos;t exist or may have been moved. Let us help you find what you need.
          </p>
        </div>
      </section>

      {/* Navigation options */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-10">Where would you like to go?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/" className="card text-center hover:shadow-lg hover:border-orange-200 border border-gray-100 transition-all">
              <div className="text-3xl mb-2">🏠</div>
              <p className="font-bold text-blue-900">Home</p>
              <p className="text-gray-500 text-xs mt-1">Back to the homepage</p>
            </Link>
            <Link href="/services" className="card text-center hover:shadow-lg hover:border-orange-200 border border-gray-100 transition-all">
              <div className="text-3xl mb-2">🔧</div>
              <p className="font-bold text-blue-900">Services</p>
              <p className="text-gray-500 text-xs mt-1">View all services we offer</p>
            </Link>
            <Link href="/service-areas" className="card text-center hover:shadow-lg hover:border-orange-200 border border-gray-100 transition-all">
              <div className="text-3xl mb-2">📍</div>
              <p className="font-bold text-blue-900">Service Areas</p>
              <p className="text-gray-500 text-xs mt-1">Cities we cover</p>
            </Link>
            <Link href="/contact" className="card text-center hover:shadow-lg hover:border-orange-200 border border-gray-100 transition-all">
              <div className="text-3xl mb-2">📞</div>
              <p className="font-bold text-blue-900">Contact</p>
              <p className="text-gray-500 text-xs mt-1">Book or ask a question</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Need Help Right Now?</h2>
          <p className="text-gray-600 mb-6">Skip the website and call us directly. We&apos;re available for same-day appointments across Sacramento County.</p>
          <a
            href="tel:9165550100"
            className="btn-primary text-lg inline-block"
          >
            📞 Call (916) 555-0100
          </a>
          <p className="text-gray-400 text-sm mt-4">EC Mobile Auto Services LLC · Sacramento, CA</p>
        </div>
      </section>
    </>
  );
}
