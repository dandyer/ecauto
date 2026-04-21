import { Suspense } from 'react';
import CTASection from '@/components/CTASection';
import SchemaMarkup from '@/components/SchemaMarkup';
import FormSuccess from '@/components/FormSuccess';

export const metadata = {
  title: 'Book a Mobile Mechanic in Sacramento, CA | EC Mobile Auto Services',
  description:
    'Book EC Mobile Auto Services for mobile oil change, brakes, battery, and more in Sacramento, CA. Call (916) 517-3286 or fill out our online form. Same-day available.',
  alternates: { canonical: 'https://ecmobileauto.com/contact' },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  name: 'EC Mobile Auto Services LLC',
  telephone: '+19165173286',
  url: 'https://ecmobileauto.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sacramento',
    addressRegion: 'CA',
    postalCode: '95814',
    addressCountry: 'US',
  },
  openingHours: ['Mo-Fr 07:00-19:00'],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+19165173286',
    contactType: 'customer service',
    areaServed: 'Sacramento County, CA',
  },
};

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup schema={contactSchema} />

      {/* Hero */}
      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Schedule Service</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Book a Mobile Mechanic in Sacramento, CA
          </h1>
          <p className="text-blue-200 text-xl max-w-2xl">
            Ready to schedule? Call, text, or fill out the form below. We confirm appointments quickly and offer same-day service when available.
          </p>
        </div>
      </section>

      {/* Contact Options + Form */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h2 className="section-heading">Get in Touch</h2>

            {/* Call */}
            <div className="card mb-4 border-l-4 border-orange-500">
              <p className="text-sm text-gray-500 mb-1">Fastest response — call or text</p>
              <a href="tel:9165173286" className="text-3xl font-extrabold text-blue-900 hover:text-orange-500 transition-colors block">
                (916) 517-3286
              </a>
              <div className="flex gap-3 mt-3">
                <a href="tel:9165173286" className="btn-primary text-sm px-4 py-2">📞 Call Now</a>
                <a href="sms:9165173286" className="btn-secondary text-sm px-4 py-2">💬 Text Us</a>
              </div>
            </div>

            {/* Hours */}
            <div className="card mb-4">
              <h3 className="font-bold text-blue-900 mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm">
                {[
                  { day: 'Monday – Friday', hours: '7:00 AM – 7:00 PM' },
                  { day: 'Saturday', hours: 'By appointment only' },
                  { day: 'Sunday', hours: 'By appointment only' },
                ].map((h) => (
                  <div key={h.day} className="flex justify-between">
                    <span className="text-gray-600">{h.day}</span>
                    <span className="font-medium text-gray-800">{h.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">* Same-day appointments subject to availability. Book early for best availability.</p>
            </div>

            {/* Service Area */}
            <div className="card">
              <h3 className="font-bold text-blue-900 mb-3">Service Area</h3>
              <div className="flex flex-wrap gap-2">
                {['Sacramento', 'Elk Grove', 'Rancho Cordova', 'Roseville', 'Folsom', 'Citrus Heights', 'Carmichael', 'Fair Oaks', 'Antelope', 'North Highlands', 'Orangevale'].map((city) => (
                  <span key={city} className="bg-blue-50 text-blue-900 text-xs font-medium px-2 py-1 rounded">{city}</span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">No trip fee within our service area.</p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="section-heading">Online Booking Request</h2>
            <Suspense><FormSuccess /></Suspense>
            <p className="text-gray-600 text-sm mb-6">Fill out the form and we&apos;ll confirm your appointment within a few hours (during business hours).</p>
            <form className="space-y-4" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="27bbf49b-602b-43bb-9140-6bb3c3c15cba" />
              <input type="hidden" name="subject" value="New Booking Request – EC Mobile Auto Services" />
              <input type="hidden" name="redirect" value="https://ecmobileauto.com/contact?sent=1" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 min-h-[44px]"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 min-h-[44px]"
                    placeholder="(916) 555-0000"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 min-h-[44px]"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed *</label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 min-h-[44px] bg-white"
                >
                  <option value="">Select a service...</option>
                  <option value="oil-change-conventional">Oil Change – Conventional</option>
                  <option value="oil-change-synthetic">Oil Change – Full Synthetic</option>
                  <option value="oil-change-highmileage">Oil Change – High-Mileage</option>
                  <option value="brake-service">Brake Service (Pads / Rotors)</option>
                  <option value="battery-test">Battery Test (Free)</option>
                  <option value="battery-replacement">Battery Replacement</option>
                  <option value="check-engine">Check Engine Light Diagnosis</option>
                  <option value="tire-rotation">Tire Rotation</option>
                  <option value="pre-purchase">Pre-Purchase Vehicle Inspection</option>
                  <option value="other">Other / Not Sure</option>
                </select>
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">Your City / ZIP Code *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 min-h-[44px]"
                  placeholder="Sacramento, CA 95814"
                />
              </div>
              <div>
                <label htmlFor="vehicle" className="block text-sm font-medium text-gray-700 mb-1">Vehicle (Year, Make, Model)</label>
                <input
                  type="text"
                  id="vehicle"
                  name="vehicle"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 min-h-[44px]"
                  placeholder="e.g. 2018 Toyota Camry"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900"
                  placeholder="Any symptoms, preferred days/times, or other details..."
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full text-lg py-4"
              >
                Submit Booking Request →
              </button>
              <p className="text-xs text-gray-500 text-center">We respond within a few hours during business hours. For immediate help, call (916) 517-3286.</p>
            </form>
          </div>
        </div>
      </section>

      <CTASection
        heading="Prefer to Call? We're Ready."
        subheading="Call or text (916) 517-3286 — fastest way to get scheduled."
        showBook={false}
      />
    </>
  );
}
