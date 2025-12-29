'use client';

import Image from 'next/image';
import Button from './Button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { label: 'Hem', href: '/' },
    { label: 'Produkter', href: '/produkter' },
    { label: 'Om oss', href: '/om-oss' },
    { label: 'Återförsäljare', href: '/aterforsaljare' },
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Logga in/Skapa konto', href: '/login' },
  ];

  return (
    <>
      {/* Overlay/Backdrop */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full bg-white shadow-2xl z-50 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: 'auto', minWidth: '320px', maxWidth: '90vw' }}
      >
        <div className="flex flex-col h-full p-8">
          {/* Header with Logo and Close Button */}
          <div className="flex items-start justify-between mb-8">
            <div className="h-12 w-auto relative">
              <Image 
                src="/logo.png"
                alt="Sjöbogården Logo"
                width={120}
                height={48}
                className="object-contain"
              />
            </div>
            <button 
              onClick={onClose}
              className="text-[#394287] text-3xl font-light hover:opacity-70 transition-opacity"
            >
              ×
            </button>
          </div>
          
          {/* Menu Items */}
          <nav className="flex flex-col space-y-0">
            {menuItems.map((item, index) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className="block py-4 text-[#394287] text-lg hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </a>
                {index < menuItems.length - 1 && (
                  <div className="border-b border-gray-200" />
                )}
              </div>
            ))}
          </nav>
          
          {/* Contact Info at Bottom */}
          <div className="mt-auto pt-8 text-[#394287] text-sm space-y-4">
            <div>
              <h4 className="font-semibold mb-1">Adress</h4>
              <p>Svenska Müllers, Kosterögatan 5, 211 24, Malmö, Sverige</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-1">E-post</h4>
              <p>info@sjobogarden.se</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
