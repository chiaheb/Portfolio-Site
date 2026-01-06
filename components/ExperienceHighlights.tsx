
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
      title: "act fast to capture value",
      type: "fast",
      imageUrl: "https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/CarouselBH2.svg"
    },
    {
      title: "go from viable to scalable",
      type: "scale",
      imageUrl: "https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/CarouselBH1.svg" 
    },
    {
      title: "turn complex into intuitive",
      type: "consistency",
      imageUrl: "https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/Carousel3.svg" 
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timeoutRef = useRef<number | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = () => {
    setPrevIndex(activeIndex);
    setActiveIndex((prev) => (prev === highlights.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setPrevIndex(activeIndex);
    setActiveIndex((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));
  };

  useEffect(() => {
    resetTimeout();
    if (isPlaying) {
      timeoutRef.current = window.setTimeout(nextSlide, 3500);
    }
    return () => resetTimeout();
  }, [activeIndex, isPlaying]);

  const handleManualNav = (index: number) => {
    if (index === activeIndex) return;
    resetTimeout();
    setPrevIndex(activeIndex);
    setActiveIndex(index);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="pb-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Experience Container - Softened Shadow */}
        <div className="bg-white rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 lg:p-20 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-gray-100 overflow-hidden">
          <div className="mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl italic">
              I help product and business teams to
            </h2>
          </div>
          
          <div className="relative">
            {/* Main Slides Container - Significantly tightened min-height for mobile */}
            <div className="relative min-h-[240px] md:min-h-[320px]">
              {highlights.map((item, index) => {
                const isActive = index === activeIndex;
                const isPrev = index === prevIndex;
                
                let opacity = 0;
                let transform = 'translateX(20px)';
                
                if (isActive) {
                  opacity = 1;
                  transform = 'translateX(0)';
                } else if (isPrev) {
                  opacity = 0;
                  transform = 'translateX(-20px)';
                }

                return (
                  <div
                    key={index}
                    className="absolute inset-0 w-full transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
                    style={{ 
                      opacity, 
                      transform,
                      visibility: isActive || isPrev ? 'visible' : 'hidden',
                      pointerEvents: isActive ? 'auto' : 'none'
                    }}
                  >
                    <div className="flex flex-col gap-2 md:gap-6 items-start justify-start">
                      <div className="w-full">
                        <h3 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight text-black tracking-tight max-w-none md:max-w-5xl">
                          {item.title}
                        </h3>
                      </div>
                      <div className="w-32 md:w-60 h-32 md:h-52 shrink-0">
                        <CharacterGraphic item={item} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation Controls - Minimized margin-top to sit tight to image on mobile */}
            <div className="mt-1 md:mt-6 flex items-center justify-start space-x-6">
              {/* Dots Pill - Minimal Shadow */}
              <div className="bg-[#f3f4f6] px-8 py-4 rounded-full flex items-center space-x-5 h-12 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                {highlights.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleManualNav(index)}
                    className="relative group p-1 focus:outline-none"
                    aria-label={`Go to slide ${index + 1}`}
                  >
                    <div className={`transition-all duration-500 rounded-full ${
                      index === activeIndex 
                        ? "bg-black w-10 h-[3px]" 
                        : "bg-black/20 group-hover:bg-black/40 w-[5px] h-[5px]"
                    }`} />
                    <div className="absolute inset-0 -m-2" />
                  </button>
                ))}
              </div>

              {/* Play/Pause Button - Minimal Shadow */}
              <button 
                onClick={togglePlay}
                className="w-12 h-12 bg-[#f3f4f6] rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.04)] focus:outline-none"
                aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
              >
                {isPlaying ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceHighlights;
