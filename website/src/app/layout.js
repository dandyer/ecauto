import './globals.css';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://ecmobileauto.com'),
  title: {
    template: '%s | EC Mobile Auto Services LLC',
    default: 'Mobile Mechanic Sacramento CA | EC Mobile Auto Services LLC',
  },
  description:
    'EC Mobile Auto Services LLC — Sacramento\'s mobile mechanic. We come to your home, office, or roadside. Oil changes, brakes, batteries, diagnostics & more. Call (916) 555-0100.',
  keywords: ['mobile mechanic Sacramento', 'mobile oil change Sacramento', 'mobile auto repair Sacramento CA'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'EC Mobile Auto Services LLC',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://analyticlunch.com/t.js" data-id="site_150ce970" strategy="afterInteractive" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
