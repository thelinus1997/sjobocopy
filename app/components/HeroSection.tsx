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
        <div className="mr-16 w-auto space-y-6 text-white animate-[fadeUp_0.8s_ease-out_0.2s_both]">
          <h2 className="font-normal whitespace-nowrap" style={{ fontSize: '65px' }}>En plats för alla djurvänner</h2>
          <h1 className="whitespace-nowrap" style={{ fontSize: '80px', fontWeight: 900 }}>Sjöbogården</h1>
          <div className="flex flex-row gap-4">
            <Button className="py-3">Om oss</Button>
            <Button className="py-3">Webshop</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
