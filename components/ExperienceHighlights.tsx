
import React, { useState, useEffect, useRef } from 'react';

interface HighlightItem {
  title: string;
  type: 'fast' | 'scale' | 'consistency';
  imageUrl?: string;
}

const CharacterGraphic: React.FC<{ item: HighlightItem }> = ({ item }) => {
  const { type, imageUrl } = item;

  if (imageUrl) {
    return (
      <div className="w-full h-full flex items-center justify-start">
        <img 
          src={imageUrl} 
          alt={item.title} 
          className="w-full h-full object-contain object-left"
          onError={(e) => {
            console.warn(`Failed to load image for ${type}: ${imageUrl}. Falling back to SVG.`);
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
    );
  }

  if (type === 'scale') {
    return (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(20, 130) scale(0.35)">
          <path d="M100 30C138 30 170 61 170 100C170 138 138 170 100 170C61 170 30 138 30 100C30 61 61 30 100 30Z" stroke="black" strokeWidth="8" strokeLinecap="round"/>
          <circle cx="85" cy="95" r="8" fill="black"/>
          <circle cx="115" cy="95" r="8" fill="black"/>
        </g>
        <path d="M65 135 Q 90 125 105 85" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="6 4" strokeLinecap="round"/>
        <path d="M100 95 L 105 85 L 115 90" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" />
        <g transform="translate(65, 15) scale(0.75)">
          <path d="M100 30C130 30 160 55 160 95C160 135 130 165 100 165C70 165 40 135 40 95C40 55 70 30 100 30Z" stroke="black" strokeWidth="4" strokeLinecap="round"/>
          <path d="M100 30C75 30 55 45 50 75" fill="#D1D5DB" stroke="black" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="85" cy="80" r="4" fill="black"/>
          <circle cx="115" cy="80" r="4" fill="black"/>
          <path d="M160 95C175 95 185 105 185 115C185 125 175 135 160 135" stroke="black" strokeWidth="4" strokeLinecap="round"/>
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(10, 30)">
        <path d="M50 50C50 35 40 28 30 28C15 28 5 38 5 55C5 72 15 82 30 82C40 82 50 72 50 62" stroke="black" strokeWidth="2.5"/>
        <path d="M50 50C60 50 68 58 68 68C68 78 60 85 50 85" stroke="black" strokeWidth="2.5"/>
        <circle cx="25" cy="45" r="1.5" fill="black"/>
        <circle cx="38" cy="45" r="1.5" fill="black"/>
      </g>
      <g transform="translate(90, 30)">
        <path d="M50 50C50 35 40 28 30 28C15 28 5 38 5 55C5 72 15 82 30 82C40 82 50 72 50 62" stroke="black" strokeWidth="2.5"/>
        <path d="M50 50C60 50 68 58 68 68C68 78 60 85 50 85" stroke="black" strokeWidth="2.5"/>
        <circle cx="25" cy="45" r="1.5" fill="black"/>
        <circle cx="38" cy="45" r="1.5" fill="black"/>
        <path d="M30 28C20 28 10 33 10 45" fill="#D1D5DB" stroke="black" strokeWidth="2.5"/>
      </g>
      <g transform="translate(50, 100)">
        <path d="M50 50C50 35 40 28 30 28C15 28 5 38 5 55C5 72 15 82 30 82C40 82 50 72 50 62" stroke="black" strokeWidth="2.5"/>
        <path d="M50 50C60 50 68 58 68 68C68 78 60 85 50 85" stroke="black" strokeWidth="2.5"/>
        <circle cx="25" cy="45" r="1.5" fill="black"/>
        <circle cx="38" cy="45" r="1.5" fill="black"/>
      </g>
    </svg>
  );
};

const ExperienceHighlights: React.FC = () => {
  const highlights: HighlightItem[] = [
    {
      title: "move fast to capture value early",
      type: "fast",
      imageUrl: "https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/CarouselBH2.svg"
    },
    {
      title: "go from viable to scalable",
      type: "scale",
      imageUrl: "https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/CarouselBH1.svg" 
    },
    {
      title: "create design consistency",
      type: "consistency",
      imageUrl: "https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/Carousel3.svg" 
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === highlights.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? highlights.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    resetTimeout();
    // Reduced from 5000 to 3000 for faster auto-scrolling
    timeoutRef.current = window.setTimeout(nextSlide, 3000);

    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  const handleManualNav = (index: number) => {
    resetTimeout();
    setActiveIndex(index);
  };

  return (
    <section className="pb-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl italic">
            I help product and business teams to
          </h2>
        </div>
        
        <div className="relative">
          <div className="min-h-[300px] md:min-h-[360px]">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out absolute top-0 left-0 w-full ${
                  index === activeIndex 
                    ? "opacity-100 translate-y-0 pointer-events-auto" 
                    : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <div className="flex flex-col gap-4 md:gap-6 items-start justify-start">
                  <div className="w-full">
                    <h3 className="text-4xl md:text-6xl font-semibold leading-tight text-black tracking-tight max-w-none md:max-w-5xl">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-40 md:w-60 h-40 md:h-52 shrink-0">
                    <CharacterGraphic item={item} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 md:mt-12 flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <button 
                onClick={prevSlide}
                className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all text-gray-400"
                aria-label="Previous slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex space-x-3">
                {highlights.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleManualNav(index)}
                    className={`w-2 h-2 transition-all duration-500 rounded-full ${
                      index === activeIndex ? "bg-black scale-125" : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="p-2 border border-gray-200 rounded-full hover:bg-black hover:text-white transition-all text-gray-400"
                aria-label="Next slide"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
