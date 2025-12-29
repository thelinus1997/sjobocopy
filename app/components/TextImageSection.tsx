import Image from 'next/image';
import Button from './Button';

export default function TextImageSection() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left side - Image of a bird */}
          <div className="w-full aspect-square bg-gray-300 rounded-lg overflow-hidden relative">
            <Image 
              src="/birdfeed.png"
              alt="Bird feed"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Right side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#394287]">Hello World</h2>
            <p className="text-[#394287]">
              Hello World. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-[#394287]">
              Hello World. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-[#394287]">
              Hello World. Duis aute irure dolor in reprehenderit in voluptate velit 
              esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <Button className="py-3">Hello World</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
