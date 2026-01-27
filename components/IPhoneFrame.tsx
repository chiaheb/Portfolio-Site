import React from 'react';

interface IPhoneFrameProps {
  src: string;
  className?: string;
}

const IPhoneFrame: React.FC<IPhoneFrameProps> = ({ src, className = "" }) => {
  const isVideo = src.toLowerCase().endsWith('.webm') || src.toLowerCase().endsWith('.mp4');

  return (
    <div className={`relative mx-auto w-full max-w-[320px] ${className}`} style={{ aspectRatio: '430/882' }}>
      {/* 
         Screen Content 
         Positioned to align perfectly within the bezel of the SVG frame below.
         Top: ~16px offset on 882px height ~ 1.8%
         Left: ~16px offset on 430px width ~ 3.7%
         Width: ~398px on 430px width ~ 92.5%
         Height: ~850px on 882px height ~ 96.4%
      */}
      <div 
        className="absolute top-[1.8%] left-[3.7%] w-[92.5%] h-[96.4%] bg-black overflow-hidden rounded-[38px] md:rounded-[48px] z-0"
      >
        {isVideo ? (
           <video 
             src={src} 
             className="w-full h-full object-cover" 
             autoPlay 
             muted 
             loop 
             playsInline 
           />
        ) : (
           <img 
             src={src} 
             alt="iPhone Content" 
             className="w-full h-full object-cover" 
           />
        )}
      </div>

      {/* Frame Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none drop-shadow-2xl">
        <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 430 882" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Shadow Definition */}
            <defs>
              <filter id="shadow" x="-50" y="-50" width="530" height="982" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="0" stdDeviation="20" floodColor="#000" floodOpacity="0.15"/>
              </filter>
              <linearGradient id="titanium_shine" x1="0" y1="0" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a4a4a" />
                <stop offset="50%" stopColor="#2a2a2a" />
                <stop offset="100%" stopColor="#4a4a4a" />
              </linearGradient>
            </defs>

            {/* Main Body with cutout for screen */}
            {/* Using a path that traces the outside and inside to create a filled frame */}
            <path 
              fillRule="evenodd" 
              clipRule="evenodd"
              d="M60 0C26.8629 0 0 26.8629 0 60V822C0 855.137 26.8629 882 60 882H370C403.137 882 430 855.137 430 822V60C430 26.8629 403.137 0 370 0H60ZM37.6 62.4C37.6 48.7032 48.7032 37.6 62.4 37.6H367.6C381.297 37.6 392.4 48.7032 392.4 62.4V819.6C392.4 833.297 381.297 844.4 367.6 844.4H62.4C48.7032 844.4 37.6 833.297 37.6 819.6V62.4Z" 
              fill="#2b2b2b"
            />
            
            {/* Outer Rim Highlight (Titanium Look) */}
            <path 
              d="M60 1.5H370C402.309 1.5 428.5 27.6913 428.5 60V822C428.5 854.309 402.309 880.5 370 880.5H60C27.6913 880.5 1.5 854.309 1.5 822V60C1.5 27.6913 27.6913 1.5 60 1.5Z" 
              stroke="url(#titanium_shine)" 
              strokeWidth="3"
            />

            {/* Inner Bezel (Black Border connecting frame to screen) */}
            <path 
               d="M62.4 37.6H367.6C381.297 37.6 392.4 48.7032 392.4 62.4V819.6C392.4 833.297 381.297 844.4 367.6 844.4H62.4C48.7032 844.4 37.6 833.297 37.6 819.6V62.4C37.6 48.7032 48.7032 37.6 62.4 37.6Z" 
               fill="black" 
               stroke="black" 
               strokeWidth="4"
            />

            {/* Dynamic Island */}
            <rect x="131" y="28" width="168" height="46" rx="23" fill="black"/>
            
            {/* Buttons (Side) */}
            <path d="M-2 210H2V240H-2C-3.1 240 -4 239.1 -4 238V212C-4 210.9 -3.1 210 -2 210Z" fill="#1f1f1f"/>
            <path d="M-2 270H2V320H-2C-3.1 320 -4 319.1 -4 318V272C-4 270.9 -3.1 270 -2 270Z" fill="#1f1f1f"/>
            <path d="M-2 340H2V390H-2C-3.1 390 -4 389.1 -4 388V342C-4 340.9 -3.1 340 -2 340Z" fill="#1f1f1f"/>
            <path d="M428 290H432C433.1 290 434 290.9 434 292V368C434 369.1 433.1 370 432 370H428V290Z" fill="#1f1f1f"/>
            
            {/* Antennas */}
            <rect x="428" y="100" width="2" height="10" fill="#666" opacity="0.5"/>
            <rect x="0" y="100" width="2" height="10" fill="#666" opacity="0.5"/>
            <rect x="428" y="800" width="2" height="10" fill="#666" opacity="0.5"/>
            <rect x="0" y="800" width="2" height="10" fill="#666" opacity="0.5"/>

            {/* Reflection Glare */}
            <path 
                d="M430 60C430 26.8629 403.137 0 370 0H60C26.8629 0 0 26.8629 0 60V822C0 855.137 26.8629 882 60 882H370C403.137 882 430 855.137 430 822V60Z" 
                fill="url(#glass_shine)" 
                style={{mixBlendMode: 'soft-light'}} 
                opacity="0.2"
                pointerEvents="none"
            />
            <defs>
                <linearGradient id="glass_shine" x1="0" y1="0" x2="430" y2="882" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="white" stopOpacity="0.8"/>
                    <stop offset="0.4" stopColor="white" stopOpacity="0"/>
                    <stop offset="0.6" stopColor="white" stopOpacity="0"/>
                    <stop offset="1" stopColor="white" stopOpacity="0.6"/>
                </linearGradient>
            </defs>
        </svg>
      </div>
    </div>
  );
};

export default IPhoneFrame;