import Image from 'next/image';
import Button from './Button';

export default function InstagramGrid() {
  // 3x4 grid = 12 images (insta.webp to insta12.webp)
  const images = [
    '/insta.webp',
    '/insta2.webp',
    '/insta3.webp',
    '/insta4.webp',
    '/insta5.webp',
    '/insta6.webp',
    '/insta7.webp',
    '/insta8.webp',
    '/insta9.webp',
    '/insta10.webp',
    '/insta11.webp',
    '/insta12.webp',
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#394287]">Hello World</h2>
        
        {/* Centered container that takes up 1/3 of width */}
        <div className="max-w-4xl mx-auto">
          {/* 3 columns x 4 rows grid */}
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="aspect-square bg-gray-300 rounded-lg overflow-hidden relative">
                <Image 
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Buttons under the images */}
          <div className="flex gap-4 mt-8 justify-center">
            <Button className="py-3">Hello World</Button>
            <Button className="py-3">Hello World</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
