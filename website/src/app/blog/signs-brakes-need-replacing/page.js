import Link from 'next/link';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata = {
  title: '7 Signs Your Brakes Need Replacing — Don\'t Ignore These',
  description:
    'Squealing, grinding, vibration, pulling — here are 7 clear warning signs your brakes need replacement. How to tell which signs are urgent and which can wait.',
  alternates: { canonical: 'https://ecmobileauto.com/blog/signs-brakes-need-replacing' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '7 Signs Your Brakes Need Replacing — Don\'t Ignore These',
  author: { '@type': 'Person', name: 'Enrique Castillo' },
  publisher: { '@type': 'Organization', name: 'EC Mobile Auto Services LLC', url: 'https://ecmobileauto.com' },
  datePublished: '2026-03-05',
  dateModified: '2026-03-05',
  description: '7 warning signs your brakes need replacing — from squealing to warning lights, and how urgent each sign is.',
};

export default function BrakesNeedReplacingPage() {
  return (
    <>
      <SchemaMarkup schema={articleSchema} />

      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Safety Guide</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            7 Signs Your Brakes Need Replacing — Don&apos;t Ignore These
          </h1>
          <div className="flex items-center gap-4 text-blue-300 text-sm">
            <span>By Enrique Castillo</span>
            <span>·</span>
            <span>March 5, 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </div>
      </section>

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <p className="font-bold text-red-800 text-lg mb-2">Brakes Are Not Optional Maintenance</p>
            <p className="text-gray-700">Unlike an oil change you can delay a few hundred miles, brake issues tend to get worse — and more dangerous — the longer you wait. Most brake problems give you clear warning signs before they become emergencies. Knowing what to listen and feel for can keep you and everyone on Sacramento roads safe.</p>
          </div>

          {[
            {
              num: '1',
              title: 'Squealing or Screeching When Braking',
              urgency: 'Moderate — attend within 1–2 weeks',
              body: 'This is the most common brake warning sign, and it\'s intentional. Modern brake pads contain a small metal wear indicator that contacts the rotor when pads reach the minimum safe thickness. The result is a high-pitched squeal designed to get your attention.\n\nImportant distinction: if the squealing only happens on the first few stops of the day (especially in the morning after the car has sat overnight), that\'s usually surface rust being scrubbed off the rotor — completely normal. If it squeals consistently every time you brake, that\'s the wear indicator doing its job. Don\'t ignore it.',
              color: 'yellow',
            },
            {
              num: '2',
              title: 'Grinding or Metal-on-Metal Scraping',
              urgency: 'Urgent — address immediately',
              body: 'Grinding means your brake pads are completely worn down and the metal backing plate is now contacting your rotor. This is beyond the wear indicator stage — you\'re damaging your rotors with every stop. Rotors that are scored or damaged by metal-on-metal contact often need to be replaced along with the pads, which significantly increases repair cost.\n\nMore importantly, severely worn brakes have reduced stopping power. If you\'re hearing grinding, your stopping distance is compromised. Get brake service before your next significant drive.',
              color: 'red',
            },
            {
              num: '3',
              title: 'Vibration or Pulsing When Braking',
              urgency: 'Moderate — address within 1–2 weeks',
              body: 'If you feel a rhythmic pulsing or shuddering through the brake pedal when stopping, the most common cause is warped rotors. Rotors warp when they overheat — from hard repeated braking, from a stuck caliper, or simply from years of normal use and heat cycling.\n\nWarped rotors create uneven contact with the brake pad, causing the pulsing you feel. Besides being annoying, warped rotors are less effective than flat ones. In mild cases, rotors can be machined (resurfaced) flat. In more advanced cases, replacement is required.',
              color: 'yellow',
            },
            {
              num: '4',
              title: 'Car Pulling to One Side When Braking',
              urgency: 'Address soon — potential caliper or hose issue',
              body: 'If your vehicle pulls left or right when you apply the brakes — not just during normal driving — it suggests uneven brake application. The most common causes are a stuck brake caliper (one side is applying more force than the other), uneven pad wear, or a collapsed brake hose that\'s causing pressure differences side to side.\n\nA stuck caliper is a more serious issue than worn pads. Beyond the pulling sensation, a stuck caliper causes that side\'s brake to remain partially applied, generating excessive heat, accelerated pad wear, and in severe cases, risk of fire from overheating.',
              color: 'orange',
            },
            {
              num: '5',
              title: 'Spongy or Soft Brake Pedal',
              urgency: 'Urgent — brake fluid or hydraulic issue',
              body: 'A properly functioning brake system should have a firm, consistent pedal feel. If your pedal feels soft, spongy, or sinks gradually toward the floor when held, this points to a hydraulic problem — either air in the brake lines or, more seriously, a brake fluid leak.\n\nBrake fluid is hygroscopic (it absorbs moisture over time), which lowers its boiling point and can cause it to vaporize under hard braking — leading to "brake fade." If your pedal has always been this way, moisture-contaminated fluid may be the culprit and a brake fluid flush can resolve it. If it changed suddenly, have the system inspected immediately.',
              color: 'red',
            },
            {
              num: '6',
              title: 'Brake Warning Light Is On',
              urgency: 'Investigate immediately',
              body: 'Modern vehicles have a brake warning light on the dashboard. It can be triggered by low brake fluid level, a fault in the ABS (anti-lock brake system), or an issue with the electronic brake force distribution system. Some vehicles also have pad wear sensors that trigger the light directly.\n\nDon\'t confuse this with the parking brake light — if the parking brake is released and the brake warning light is still illuminated, treat it as a fault indicator. A low brake fluid level in isolation often means your pads are worn (pads wear thinner, caliper pistons extend further, and more fluid fills that space — low fluid can indicate low pads). Either way, investigation is warranted.',
              color: 'red',
            },
            {
              num: '7',
              title: 'Visual Inspection — Thin Pads Through the Wheel',
              urgency: 'Check every few months',
              body: 'Many Sacramento drivers don\'t realize you can visually inspect brake pad thickness without removing the wheel. Look through the spokes of your wheel at the rotor — you should see the brake pad pressed against the shiny rotor surface. Most pads start at about 12mm of friction material. If what you see looks thin (less than 3–4mm, roughly the thickness of two quarters), it\'s time for brake service.\n\nThis is particularly useful if you\'re buying a used car — a quick look through the wheel gives you a rough sense of brake condition before purchase. For a full assessment, our <Link href="/services/pre-purchase-inspection-sacramento">pre-purchase inspection</Link> includes a complete brake evaluation.',
              color: 'blue',
            },
          ].map((sign) => (
            <div key={sign.num} className="mb-10">
              <div className="flex items-start gap-4">
                <span className="bg-blue-900 text-white rounded-full w-10 h-10 flex items-center justify-center font-extrabold text-lg shrink-0 mt-1">{sign.num}</span>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">{sign.title}</h2>
                  <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${
                    sign.color === 'red' ? 'bg-red-100 text-red-700' :
                    sign.color === 'orange' ? 'bg-orange-100 text-orange-700' :
                    sign.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    Urgency: {sign.urgency}
                  </span>
                  {sign.body.split('\n\n').map((para, i) => (
                    <p key={i} className="text-gray-700 mb-4 leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">How Long Do Brake Pads Last?</h2>
          <p className="text-gray-700 mb-4">Brake pad life varies significantly based on driving style, vehicle weight, and pad type. A general range for Sacramento drivers:</p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">→</span><span><strong>City driving (Midtown, South Sacramento, Elk Grove surface streets):</strong> 25,000–35,000 miles. Frequent stop-and-go traffic wears pads faster.</span></li>
            <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">→</span><span><strong>Highway commuting (I-5, I-80, US-50):</strong> 40,000–60,000 miles. Fewer stops per mile means slower wear.</span></li>
            <li className="flex items-start gap-2"><span className="text-orange-500 shrink-0">→</span><span><strong>Mixed driving:</strong> 35,000–50,000 miles is a reasonable expectation for most Sacramento drivers.</span></li>
          </ul>

          <h2 className="text-2xl font-bold text-blue-900 mt-8 mb-4">Mobile Brake Service in Sacramento</h2>
          <p className="text-gray-700 mb-4">Brake pad and rotor replacement doesn&apos;t require a shop. EC Mobile Auto Services performs complete <Link href="/services/mobile-brake-service-sacramento" className="text-orange-500 hover:underline">mobile brake service</Link> at your home, apartment, or workplace in Sacramento County. We arrive with the correct pads and rotors for your vehicle, complete the job on-site, and test the brakes before we leave.</p>
          <p className="text-gray-700 mb-4">If you&apos;ve noticed any of the 7 signs above, call (916) 555-0100 to discuss your situation. We&apos;ll give you an honest assessment and an upfront quote — no shop visit required.</p>
        </div>
      </article>

      <section className="py-8 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-bold text-blue-900 mb-4">Related</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/services/mobile-brake-service-sacramento" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">Mobile Brake Service Sacramento →</p>
            </Link>
            <Link href="/blog/how-much-does-mobile-mechanic-cost" className="card hover:shadow-md transition-shadow text-sm">
              <p className="font-semibold text-blue-900">How Much Does Mobile Mechanic Cost? →</p>
            </Link>
          </div>
        </div>
      </section>

      <CTASection heading="Brakes Making Noise? We Come to You." subheading="Mobile brake service anywhere in Sacramento County. Call (916) 555-0100 for an upfront quote." />
    </>
  );
}
