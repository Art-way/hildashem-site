import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// SVG Icons used within the Header
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
);
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
);

// The Header component itself
export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="md:hidden">
          <button className="text-gray-700"><MenuIcon /></button>
        </div>
        
        {/* Logo Section */}
        <div className="text-center md:text-left">
          <Link href="/" className="block">
            <Image src="/logo.png" alt="Hildashem Logo" width={160} height={40} className="h-12 w-auto mx-auto md:mx-0" priority />
          </Link>
        </div>
        
        {/* Navigation Section */}
        <nav className="hidden md:flex items-center space-x-6 font-sans text-gray-700">
          <Link href="/" className="hover:text-rose-800 transition-colors">Hem</Link>
          <Link href="/p/om-mig.html" className="hover:text-rose-800 transition-colors">Om mig</Link>
          <Link href="/category/pysseltips" className="hover:text-rose-800 transition-colors">Pysseltips</Link>
          <Link href="/p/kontakt.html" className="hover:text-rose-800 transition-colors">Kontakt</Link>
        </nav>
        
        {/* Search Icon */}
        <div>
          <button className="text-gray-700"><SearchIcon /></button>
        </div>
      </div>
    </header>
  );
}
