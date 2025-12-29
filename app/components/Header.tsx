'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`w-full fixed top-0 left-0 z-10 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="h-12 w-auto relative">
            <Image 
              src="/logo.png"
              alt="Sjöbogården Logo"
              width={120}
              height={48}
              className="object-contain"
            />
          </div>
          <div className="flex gap-4">
            {/* Cart Icon Button - circular, transparent bg, border that changes color */}
            <a
              href="https://vacuously-aureate-elvin.ngrok-free.dev/shop"
              className={`w-10 h-10 bg-transparent border-2 rounded-full flex items-center justify-center transition-all duration-300 ${
                scrolled 
                  ? 'border-[#394287] text-[#394287] hover:border-white hover:text-white' 
                  : 'border-white text-white hover:border-[#394287] hover:text-[#394287]'
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" 
                />
              </svg>
            </a>
            
            {/* Hamburger Menu Button - circular, transparent bg, no border, just icon */}
            <button
              onClick={() => setMenuOpen(true)}
              className={`w-10 h-10 bg-transparent rounded-full flex items-center justify-center transition-all duration-300 ${
                scrolled 
                  ? 'text-[#394287] hover:text-white' 
                  : 'text-white hover:text-[#394287]'
              }`}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-5 h-5"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
