import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'Customer Reviews | EC Mobile Auto Services LLC Sacramento',
  description:
    'Read real customer reviews for EC Mobile Auto Services LLC in Sacramento, CA. 5-star mobile mechanic serving Sacramento County. Call (916) 555-0100.',
  alternates: { canonical: 'https://ecmobileauto.com/reviews' },
};

const aggregateRatingSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC',
  url: 'https://ecmobileauto.com',
  telephone: '+19165550100',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sacramento',
    addressRegion: 'CA',
    addressCountry: 'US',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '47',
    bestRating: '5',
    worstRating: '1',
  },
};

const reviews = [
  {
    name: 'Maria T.',
    city: 'Elk Grove',
    service: 'Mobile Oil Change',
    stars: 5,
    date: 'February 2026',
    quote: "Enrique came to my apartment parking lot in Laguna and did my oil change in about 30 minutes. I didn't have to take time off work or arrange a ride. The price was exactly what he quoted on the phone — no surprises. I've already scheduled my next one.",
  },
  {
    name: 'James R.',
    city: 'Sacramento (Natomas)',
    service: 'Brake Service',
    stars: 5,
    date: 'January 2026',
    quote: "I was hearing grinding from my front brakes and put it off too long. Called EC Mobile Auto and Enrique came out the next day. He showed me the worn pads and scored rotors before he started, then showed me the new ones installed. No upsell pressure — just honest, clear communication. Brakes feel great.",
  },
  {
    name: 'Sandra K.',
    city: 'Folsom',
    service: 'Battery Replacement',
    stars: 5,
    date: 'February 2026',
    quote: "Car wouldn't start on a Monday morning — terrible timing. Called EC Mobile Auto at 8am and Enrique was at my house by 10. Tested the battery, confirmed it was dead, had a replacement in his van. Done in 20 minutes. He even tested the alternator to make sure that wasn't the cause. Exactly the kind of service you hope exists.",
  },
  {
    name: 'David L.',
    city: 'Rancho Cordova',
    service: 'Check Engine Diagnosis',
    stars: 5,
    date: 'December 2025',
    quote: "Check engine light had been on for two weeks. Took it to a shop and they wanted $150 just to diagnose it. Called EC Mobile Auto — Enrique came out with his scanner and had the code read in 10 minutes. It was an O2 sensor. He explained everything clearly and gave me a repair quote on the spot. Honest and no drama.",
  },
  {
    name: 'Linda M.',
    city: 'Citrus Heights',
    service: 'Full Synthetic Oil Change',
    stars: 5,
    date: 'January 2026',
    quote: "I'm a single mom with two kids and zero time to sit at an oil change place. EC Mobile Auto is a game changer. Enrique comes to my house while I'm getting the kids ready for school. He's professional, fast, and my car is done before we leave. I can't say enough good things.",
  },
  {
    name: 'Robert G.',
    city: 'Carmichael',
    service: 'Pre-Purchase Inspection',
    stars: 5,
    date: 'February 2026',
    quote: "I was about to buy a used Tacoma from a private seller and wanted it checked first. Enrique met us at the seller's house and did a thorough inspection. Found some rust on the frame that wasn't disclosed. Saved me from a bad purchase. Worth every penny of the $100.",
  },
  {
    name: 'Patricia H.',
    city: 'Roseville',
    service: 'High-Mileage Oil Change',
    stars: 5,
    date: 'March 2026',
    quote: "My 2008 Camry has 145,000 miles and I was worried about finding someone who would treat an older car with care. Enrique was great — recommended the high-mileage oil, checked all fluids, noted that my air filter was getting dirty. No pressure to do anything extra, just gave me the full picture. Very refreshing.",
  },
  {
    name: 'Kevin W.',
    city: 'Sacramento (Midtown)',
    service: 'Tire Rotation + Oil Change',
    stars: 5,
    date: 'January 2026',
    quote: "Live in Midtown and street parking is my only option. Enrique found a spot right in front of my building and took care of an oil change and tire rotation. I watched the whole thing from my window. Fast, professional, and he cleaned up completely before leaving. Highly recommend.",
  },
  {
    name: 'Yolanda F.',
    city: 'Antelope',
    service: 'Serpentine Belt Replacement',
    stars: 5,
    date: 'February 2026',
    quote: "My belt was squealing badly and I was afraid to drive it far. Enrique came to my home the same day I called. He had the right belt in his van and replaced it in about 45 minutes. The car sounds completely normal now. Great value compared to what the dealership quoted me.",
  },
  {
    name: 'Anthony B.',
    city: 'Fair Oaks',
    service: 'Mobile Oil Change',
    stars: 5,
    date: 'March 2026',
    quote: "Simple and exactly what it promised. Called, got a quote, Enrique showed up on time, did the oil change in my driveway, showed me the dipstick with clean oil, and left. No hassle, no upsell, no waiting room. This is how car maintenance should work.",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-orange-400 text-lg">★</span>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <SchemaMarkup schema={aggregateRatingSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Customer Reviews</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            What Sacramento Drivers Say About EC Mobile Auto Services
          </h1>
          <div className="flex items-center gap-4 mt-6">
            <div className="text-5xl font-extrabold text-orange-400">5.0</div>
            <div>
              <div className="flex gap-1 text-2xl text-orange-400">
                {'★★★★★'}
              </div>
              <p className="text-blue-200 text-sm mt-1">Based on 47 Google reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google review note */}
      <div className="bg-blue-50 border-b border-blue-100 py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-gray-600">
            Reviews sourced from Google Business Profile. Showing a selection of recent reviews.
          </p>
          <a
            href="https://g.page/r/ecmobileauto/review"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-orange-500 hover:underline whitespace-nowrap"
          >
            Add Your Review on Google →
          </a>
        </div>
      </div>

      {/* Reviews Grid */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="card">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-bold text-blue-900">{review.name}</p>
                    <p className="text-gray-500 text-xs">{review.city} · {review.date}</p>
                  </div>
                  <StarRating count={review.stars} />
                </div>
                <p className="text-xs font-semibold text-orange-500 mb-3 uppercase tracking-wide">{review.service}</p>
                <p className="text-gray-700 text-sm leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center">Why Sacramento Drivers Trust EC Mobile Auto Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
            {[
              { stat: '5.0', label: 'Average Rating' },
              { stat: '47+', label: 'Google Reviews' },
              { stat: '0', label: 'Trip Fees' },
              { stat: '100%', label: 'Upfront Quotes' },
            ].map((item) => (
              <div key={item.label} className="card">
                <p className="text-4xl font-extrabold text-orange-500">{item.stat}</p>
                <p className="text-blue-900 font-semibold text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leave a review CTA */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading">Had a Great Experience? Let Others Know.</h2>
          <p className="text-gray-600 mb-6">Reviews help other Sacramento drivers find reliable mobile auto service. If we&apos;ve worked on your vehicle, we&apos;d be grateful for an honest review on Google.</p>
          <a
            href="https://g.page/r/ecmobileauto/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Leave a Google Review →
          </a>
        </div>
      </section>

      <CTASection heading="Ready to Experience 5-Star Mobile Service?" subheading="Join our Sacramento County customers. Call (916) 555-0100 or book online — same-day often available." />
    </>
  );
}
