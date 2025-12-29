import Image from 'next/image';

export default function GridSection() {
  const items = [
    { name: 'HUND', image: '/dog.png', url: 'https://vacuously-aureate-elvin.ngrok-free.dev/product-category/hund' },
    { name: 'KATT', image: '/katt.png', url: 'https://vacuously-aureate-elvin.ngrok-free.dev/product-category/katt' },
    { name: 'FÅGEL', image: '/bird.png', url: 'https://vacuously-aureate-elvin.ngrok-free.dev/product-category/fagel' },
    { name: 'HÄST', image: '/horse.png', url: 'https://vacuously-aureate-elvin.ngrok-free.dev/product-category/hast' },
    { name: 'AKVARISTIK', image: '/fisk.png', url: 'https://vacuously-aureate-elvin.ngrok-free.dev/product-category/akvaristik' },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#394287]">Hello World</h2>
        
        {/* 3 columns x 2 rows grid */}
        <div className="grid grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              {/* Image */}
              <div className="w-full aspect-square bg-gray-300 rounded-lg overflow-hidden relative">
                <Image 
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Button with text underneath - now as a link */}
              <a 
                href={item.url}
                className="px-6 py-2 bg-[#394287] text-white border-2 border-white rounded-full hover:bg-white hover:text-[#394287] hover:border-[#394287] transition-all duration-300"
              >
                {item.name}
              </a>
            </div>
          ))}
          {/* Empty 6th grid item */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-full aspect-square bg-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
