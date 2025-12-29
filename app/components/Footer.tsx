'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#394287] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-12">
          {/* Column 1 */}
          <div className="space-y-4">
            <div className="w-32 h-32 relative">
              <Image
                src="/logo.png"
                alt="Sjöbogården Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm">Följ oss på:</p>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-[#394287] font-bold">IG</span>
              </button>
              <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                <span className="text-[#394287] font-bold">FB</span>
              </button>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold mb-4">Snabblänkar</h3>
            <ul className="space-y-2 text-sm">
              {['Om oss', 'Återförsäljare', 'Kontakt'].map((text) => (
                <li key={text}>
                  <a href="#" className="relative inline-block group">
                    {text}
                    <span
                      className="
                        absolute bottom-0 left-0 h-[1px] bg-white
                        w-0 transition-[width] duration-300
                        group-hover:w-full
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold mb-4">Få offert</h3>
            <ul className="space-y-2 text-sm">
              {[
                'Våra produkter',
                'Hund',
                'Katt',
                'Fågel',
                'Häst',
                'Akvaristik',
              ].map((text) => (
                <li key={text}>
                  <a href="#" className="relative inline-block group">
                    {text}
                    <span
                      className="
                        absolute bottom-0 left-0 h-[1px] bg-white
                        w-0 transition-[width] duration-300
                        group-hover:w-full
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold mb-4">Kontakt</h3>
            <div className="space-y-2 text-sm">
              <p>Svenska Müllers, Kosterögatan 5, 211 24, Malmö, Sverige</p>
              <p>info@sjobogarden.se</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
