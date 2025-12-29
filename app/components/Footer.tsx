import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 gap-12">
          {/* Column 1: Image and social media CTA */}
          <div className="space-y-4">
            <div className="w-32 h-32 relative">
              <Image 
                src="/logo.png"
                alt="Sjöbogården Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm">Hello World - Follow us on social media!</p>
          </div>
          
          {/* Column 2: Snabblänkar */}
          <div>
            <h3 className="font-bold mb-4">Snabblänkar</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Om oss</a></li>
              <li><a href="#" className="hover:text-blue-400">Återförsäljare</a></li>
              <li><a href="#" className="hover:text-blue-400">Kontakt</a></li>
              <li><a href="#" className="hover:text-blue-400">Få offert</a></li>
            </ul>
          </div>
          
          {/* Column 3: Våra produkter */}
          <div>
            <h3 className="font-bold mb-4">Våra produkter</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400">Hund</a></li>
              <li><a href="#" className="hover:text-blue-400">Katt</a></li>
              <li><a href="#" className="hover:text-blue-400">Fågel</a></li>
              <li><a href="#" className="hover:text-blue-400">Häst</a></li>
              <li><a href="#" className="hover:text-blue-400">Akvaristik</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom contact info */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-sm text-gray-400">
          <h4 className="font-semibold text-white mb-2">Kontakt</h4>
          <p>Svenska Müllers, Kosterögatan 5, 211 24, Malmö, Sverige</p>
          <p>info@sjobogarden.se</p>
        </div>
      </div>
    </footer>
  );
}
