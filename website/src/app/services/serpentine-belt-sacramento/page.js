import CTASection from '@/components/CTASection';
import FAQAccordion from '@/components/FAQAccordion';
import SchemaMarkup from '@/components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  title: 'Mobile Serpentine Belt Replacement in Sacramento, CA | EC Mobile Auto Services',
  description:
    'Serpentine belt worn, cracked, or squealing? EC Mobile Auto Services replaces it at your location in Sacramento. Call (916) 517-3286 before it snaps.',
  alternates: { canonical: 'https://ecmobileauto.com/services/serpentine-belt-sacramento' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Serpentine Belt Replacement Sacramento',
  provider: { '@type': 'LocalBusiness', name: 'EC Mobile Auto Services LLC', telephone: '+19165173286' },
  areaServed: { '@type': 'City', name: 'Sacramento' },
  description: 'Mobile serpentine belt inspection and replacement in Sacramento CA. We come to you.',
  offers: { '@type': 'Offer', priceCurrency: 'USD', price: '120', description: 'Serpentine belt replacement starting price' },
};

const faqs = [
  { question: 'What does the serpentine belt do?', answer: 'The serpentine belt drives your alternator, power steering pump, AC compressor, and water pump. When it fails, you lose all of these systems at once — and your engine can overheat quickly if the water pump stops.' },
  { question: 'How do I know if my serpentine belt needs replacing?', answer: 'Warning signs include a loud squealing noise from the engine bay, visible cracks or fraying on the belt, power steering suddenly feeling heavy, battery warning light (alternator stopped charging), or AC stopping suddenly.' },
  { question: 'What happens if the serpentine belt breaks while driving?', answer: 'If the belt snaps, you will likely lose power steering immediately, the battery will stop charging, the AC will stop, and your engine may overheat within minutes if the water pump is also belt-driven. Pull over immediately and call us.' },
  { question: 'How long does serpentine belt replacement take?', answer: 'On most vehicles, serpentine belt replacement takes 30–60 minutes on-site. Some engines with complex belt routing take longer.' },
  { question: 'How often should a serpentine belt be replaced?', answer: 'Most manufacturers recommend inspection at 60,000 miles and replacement by 90,000–100,000 miles. However, Sacramento heat degrades rubber faster — visual inspection every 30,000 miles is smart.' },
];

export default function SerpentineBeltPage() {
  return (
    <>
      <SchemaMarkup schema={serviceSchema} />

      <section className="bg-blue-900 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-blue-300 mb-3">
            <Link href="/services" className="hover:text-white">Services</Link> → Serpentine Belt Replacement
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            Mobile Serpentine Belt Replacement in Sacramento, CA
          </h1>
          <p className="text-lg text-blue-200 max-w-2xl mb-8">
            A worn or cracked serpentine belt is an emergency waiting to happen. When it snaps, your alternator, AC, power steering, and water pump all stop at once. We replace it at your location before that happens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:9165173286" className="btn-primary text-center text-lg px-8 py-4">📞 Call (916) 517-3286</a>
            <Link href="/contact" className="btn-secondary text-center text-lg px-8 py-4">Book Online</Link>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-orange-50 border-l-4 border-orange-500">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-blue-900 mb-3">Warning Signs You Need a New Belt — Act Before It Breaks</h2>
          <ul className="space-y-2 text-gray-700">
            {[
              'Loud squealing or chirping noise from the engine, especially on startup',
              'Visible cracks, fraying, glazing, or chunks missing from the belt surface',
              'Power steering suddenly feels heavy or unresponsive',
              'Battery warning light on (alternator no longer charging)',
              'AC stopped working suddenly',
              'Engine temperature rising unexpectedly',
            ].map((sign) => (
              <li key={sign} className="flex items-start gap-2">
                <span className="text-orange-500 font-bold mt-0.5">⚠</span>
                <span>{sign}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-10 px-4 bg-blue-50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Serpentine Belt Replacement Pricing</h2>
          <p className="text-gray-600 mb-1">Starting at <span className="text-2xl font-extrabold text-orange-500">$120</span></p>
          <p className="text-gray-500 text-sm mb-4">Includes belt and labor. Price varies by vehicle make/model. We quote before we start — no surprises.</p>
          <a href="tel:9165173286" className="btn-primary px-8 py-3 inline-block">Call for a Quote</a>
        </div>
      </section>

      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-blue-900 mb-8">Serpentine Belt FAQ</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTASection heading="Don't Wait Until It Snaps" subheading="Call now — we replace serpentine belts at your location across Sacramento County." />
    </>
  );
}
