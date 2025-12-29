import Image from 'next/image';

export default function ContactSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left side - Static image */}
          <div className="w-full aspect-square bg-gray-300 rounded-lg overflow-hidden relative">
            <Image 
              src="/kontaktaOss.png"
              alt="Kontakta oss"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right side - Contact info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#394287]">Kontakt 🐾</h2>
            <h3 className="text-xl font-semibold text-[#394287]">Kontakta oss</h3>
            <p className="text-[#394287]">
              Om du har frågor angående Sjöbogården eller våra produkter, är du välkommen att kontakta oss. Du kan även följa oss på våra sociala medier.
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-[#394287]">✓ Adress</h4>
                <p className="text-[#394287]">Svenska Müllers, Kosterögatan 5, 211 24, Malmö, Sverige</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-[#394287]">✓ E-post</h4>
                <p className="text-[#394287]">info@sjobogarden.se</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
