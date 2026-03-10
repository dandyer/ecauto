import Link from 'next/link';

export default function CTASection({ heading, subheading, showBook = true }) {
  return (
    <section className="bg-orange-500 py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {heading || 'Ready to Book? We Come to You.'}
        </h2>
        <p className="text-orange-100 text-lg mb-8">
          {subheading || 'Same-day and next-day appointments available across Sacramento County. No shop visit needed.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:9165550100"
            className="inline-flex items-center justify-center bg-white text-orange-600 hover:bg-orange-50 font-bold py-4 px-8 rounded-lg transition-colors duration-200 min-h-[44px] text-lg"
          >
            📞 Call (916) 555-0100
          </a>
          {showBook && (
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 min-h-[44px] text-lg"
            >
              Book Online →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
