'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/service-areas/mobile-mechanic-sacramento', label: 'Service Areas' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <header className="bg-blue-900 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg md:text-xl shrink-0">
            <span className="text-2xl">🔧</span>
            <span className="leading-tight">
              <span className="block text-sm md:text-base font-extrabold">EC Mobile Auto Services</span>
              <span className="block text-xs text-blue-300 font-normal">Sacramento&apos;s Mobile Mechanic</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-blue-100 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:9165173286"
              className="btn-primary text-sm px-4 py-2 min-h-[44px]"
            >
              📞 <span className="hidden sm:inline ml-1">Call Now</span>
              <span className="sm:hidden ml-1">(916) 517-3286</span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white p-2 rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-blue-800 py-3">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-blue-100 hover:text-white hover:bg-blue-800 px-4 py-3 rounded-md text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-blue-100 hover:text-white hover:bg-blue-800 px-4 py-3 rounded-md text-sm font-medium transition-colors"
              >
                Contact / Book
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
