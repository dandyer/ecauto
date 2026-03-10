import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: 'About EC Mobile Auto Services LLC — Sacramento\'s Mobile Mechanic',
  description:
    'Meet Enrique Castillo, owner of EC Mobile Auto Services LLC. Sacramento-born mobile mechanic with a passion for honest, convenient auto repair. Call (916) 517-3286.',
  alternates: { canonical: 'https://ecmobileauto.com/about' },
};

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Enrique Castillo',
  jobTitle: 'Owner & Lead Mechanic',
  worksFor: {
    '@type': 'AutoRepair',
    name: 'EC Mobile Auto Services LLC',
    telephone: '+19165173286',
    address: { '@type': 'PostalAddress', addressLocality: 'Sacramento', addressRegion: 'CA' },
  },
  description: 'Sacramento-born and raised auto mechanic and owner of EC Mobile Auto Services LLC, providing mobile auto repair across Sacramento County.',
};

const values = [
  { icon: '🤝', title: 'Honesty First', desc: 'We tell you what your car actually needs — not what generates the most revenue. If something doesn\'t need fixing, we\'ll tell you. We build long-term relationships, not one-time transactions.' },
  { icon: '💡', title: 'Transparency', desc: 'You see exactly what we\'re doing and why. We show you the old parts, explain the diagnosis in plain English, and give you pricing before we begin any work.' },
  { icon: '⭐', title: 'Quality Work', desc: 'We use quality parts from reputable brands and follow manufacturer specifications. We don\'t cut corners — your car\'s safety and reliability depend on it.' },
  { icon: '🕐', title: 'Respect for Your Time', desc: 'We show up when we say we will. Mobile service is only worth it if the mechanic is reliable. We send updates and arrive in the promised window — always.' },
  { icon: '📍', title: 'Community Focus', desc: 'EC Mobile Auto Services is a Sacramento business serving Sacramento people. We take pride in our community and are invested in being a business our neighbors can trust.' },
  { icon: '🔧', title: 'Continuous Improvement', desc: 'The automotive world evolves constantly. We stay current on modern vehicle systems, diagnostic technology, and industry best practices to serve our customers better.' },
];

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup schema={personSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            About EC Mobile Auto Services LLC — Sacramento&apos;s Mobile Mechanic
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl">
            A Sacramento-born business built on the belief that good auto repair shouldn&apos;t require half a day of your time or a pocket full of worry.
          </p>
        </div>
      </section>

      {/* Enrique's Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Portrait placeholder */}
          <div className="md:col-span-1">
            <div className="bg-blue-900 rounded-2xl aspect-square flex flex-col items-center justify-center text-white text-center p-8">
              <div className="text-6xl mb-4">👨‍🔧</div>
              <p className="font-bold text-xl">Enrique Castillo</p>
              <p className="text-blue-300 text-sm mt-1">Owner & Lead Mechanic</p>
              <p className="text-blue-400 text-xs mt-2">EC Mobile Auto Services LLC</p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span>📍</span> <span>Born &amp; raised in Sacramento, CA</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span>🔧</span> <span>10+ years of auto repair experience</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span>✅</span> <span>Licensed &amp; fully insured</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span>🚗</span> <span>All makes &amp; models</span>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="md:col-span-2">
            <h2 className="section-heading">The Story Behind EC Mobile Auto</h2>
            <div className="space-y-4 text-gray-700">
              <p>Enrique Castillo has been fascinated by cars since he was a kid growing up in Sacramento, spending weekends in the driveway learning how engines worked alongside his uncle. What started as a hobby became a calling. By his early twenties, he was working at an independent shop in Sacramento, turning wrenches on everything from daily-driver sedans to weekend project cars.</p>
              <p>Over more than a decade in the trade, Enrique noticed a pattern: most of his customers dreaded bringing their car in. The commute, the wait, the uncertainty about what they were being charged for, the shuttle arrangement — it added stress to an already inconvenient situation. He believed there was a better way.</p>
              <p>In 2022, Enrique launched EC Mobile Auto Services LLC with a simple mission: bring professional auto repair to the customer, not the other way around. He invested in professional-grade tools and equipment, built a network of parts suppliers for quick sourcing, and started serving his Sacramento neighbors one driveway at a time.</p>
              <p>Today, EC Mobile Auto Services is a growing business serving drivers across Sacramento County — from Natomas to Elk Grove, from Folsom to Citrus Heights. Every job is personal. Enrique&apos;s name is on every vehicle he works on, and that accountability drives everything he does.</p>
              <p className="font-medium text-blue-900 italic">&ldquo;I started this business because I wanted to be the mechanic I wish I could have found when I was struggling to keep my own car running on a tight budget. Honest work, fair prices, and I come to you. That&apos;s it.&rdquo;</p>
              <p className="text-sm text-gray-500">— Enrique Castillo, Owner, EC Mobile Auto Services LLC</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-heading text-center">Our Values</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">These aren&apos;t just words on a website. They&apos;re the principles Enrique built this business around and holds himself to on every single job.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-blue-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area + Links */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-heading">Serving Sacramento Since 2022</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">EC Mobile Auto Services serves Sacramento, Elk Grove, Rancho Cordova, Roseville, Folsom, Citrus Heights, Carmichael, Fair Oaks, Antelope, North Highlands, Orangevale, and the surrounding communities.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/mobile-oil-change-sacramento" className="btn-primary">Our Services</Link>
            <Link href="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

      <CTASection heading="Ready to Meet Your Mobile Mechanic?" subheading="Call Enrique directly at (916) 517-3286 or book online. We'd love to earn your trust." />
    </>
  );
}
