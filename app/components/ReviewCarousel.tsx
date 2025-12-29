'use client';

import { useState } from 'react';
import Button from './Button';

export default function ReviewCarousel() {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    { 
      text: 'Vi på Sjöbogården väntar ivrigt på de första svansviftande recensionerna från våra fyrbenta vänner (och deras människor såklart)! Än så länge är det ganska tomt här, men vi är säkra på att våra produkter kommer att göra tassavtryck i både hjärtan och matskålar. Så snart din pälskling har smakat på vår kärlek i form av tuggben och godsaker, låt oss veta – vi ser fram emot att fylla denna sida med glada voff!', 
      author: 'Sjöbogården' 
    },
  ];

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white p-8 shadow-md text-center rounded-tl-sm rounded-tr-[3rem] rounded-bl-[3rem] rounded-br-sm relative">
            {/* Title inside carousel */}
            <h2 className="text-3xl font-bold mb-6 text-[#394287]">&gt; &quot; &lt; Recensioner</h2>
            
            {/* Review content */}
            <p className="text-xl italic mb-4 text-[#394287]">&quot;{reviews[currentReview].text}&quot;</p>
            <p className="text-[#394287]">- {reviews[currentReview].author}</p>
            
            {/* Arrow buttons inside carousel */}
            <Button
              onClick={() => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 p-0"
            >
              ←
            </Button>
            <Button
              onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 p-0"
            >
              →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
