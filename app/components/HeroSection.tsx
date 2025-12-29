import Image from 'next/image';
import Button from './Button';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/SJOBOMAIN.png" 
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      {/* Content on top of image (Z-axis) - positioned on the right */}
      <div className="absolute inset-0 flex items-center justify-end">
        <div className="mr-16 max-w-md space-y-6 text-[#394287]">
          <h2 className="text-4xl font-bold">Hello World</h2>
          <p className="text-lg">Hello World</p>
          <div className="flex flex-col gap-4">
            <Button className="py-3">Button 1</Button>
            <Button className="py-3">Button 2</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
