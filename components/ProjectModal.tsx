import React, { useEffect, useRef, useState } from 'react';
import { Project, ProjectChapter, CarouselItem as CarouselItemType } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

// Global styles with refined line spacing and significantly increased body text size for better readability
const HEADER_STYLE = "text-2xl md:text-4xl lg:text-5xl text-black leading-[1.3] md:leading-[1.2] lg:leading-[1.3] font-medium tracking-tight";
const BODY_STYLE = "text-xl md:text-2xl lg:text-2xl text-gray-900/80 leading-[1.7] font-normal";

// Standard container for horizontal alignment across sections - Updated for better responsive padding on medium/large screens
const SECTION_CONTAINER = "max-w-[1500px] mx-auto px-6 md:px-20 lg:px-24 xl:px-32";

// Shared text processor for inline formatting (bold and strikethrough)
const processInlineFormatting = (str: string) => {
  const parts = str.split(/(\*\*.*?\*\*|~~.*?~~)/g);
  return parts.map((part, j) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={j} className="font-bold text-gray-900">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('~~') && part.endsWith('~~')) {
      return <span key={j} className="line-through text-gray-400 opacity-70 decoration-2 decoration-current">{part.slice(2, -2)}</span>;
    }
    return part;
  });
};

// Shared content rendering function to handle markdown-like bolding, strikethrough, and lists
const renderContent = (text: string) => {
  const lines = text.split('\n');
  const result: React.ReactNode[] = [];
  let currentList: React.ReactNode[] = [];

  const flushList = () => {
    if (currentList.length > 0) {
      result.push(
        <ul key={`list-${result.length}`} className="list-disc pl-5 md:pl-6 space-y-2 my-4 marker:text-gray-400">
          {currentList}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('- ')) {
      currentList.push(
        <li key={`li-${i}`} className="pl-1 md:pl-2">
          {processInlineFormatting(trimmed.substring(2))}
        </li>
      );
    } else {
      flushList();
      if (trimmed === '') {
        if (i < lines.length - 1) result.push(<br key={`br-${i}`} />);
      } else {
        result.push(
          <React.Fragment key={`line-${i}`}>
            {processInlineFormatting(line)}
            {/* Add break if next line is not list and we are not at end */}
            {i < lines.length - 1 && !lines[i+1].trim().startsWith('- ') && <br />}
          </React.Fragment>
        );
      }
    }
  });
  flushList();
  
  return result;
};

// Helper to render text with manual <br/> breaks and inline formatting
const renderTextWithBreaks = (text: string) => {
  return text.split('<br/>').map((part, i, arr) => (
    <React.Fragment key={i}>
      {processInlineFormatting(part)}
      {i < arr.length - 1 && <br />}
    </React.Fragment>
  ));
};

// Shared title rendering function to maintain consistency across different chapter templates
const renderTitle = (title: string, customStyle?: string) => {
  const lines = title.split('\n');
  const baseStyle = customStyle || HEADER_STYLE;
  if (lines.length === 1) return <h3 className={baseStyle}>{renderTextWithBreaks(title)}</h3>;
  return (
    <h3 className={baseStyle}>
      {renderTextWithBreaks(lines[0])}
      <br />
      <span className="bg-gradient-to-b from-[#4b5563] to-[#9ca3af] bg-clip-text text-transparent inline-block pb-1">
        {renderTextWithBreaks(lines[1])}
      </span>
    </h3>
  );
};

// Helper to determine if a URL is a video
const isVideo = (url?: string) => {
  if (!url) return false;
  return url.toLowerCase().endsWith('.webm') || url.toLowerCase().endsWith('.mp4');
};

const BackgroundMedia: React.FC<{ imageUrl?: string; color?: string; className?: string }> = ({ imageUrl, color, className = "" }) => {
  if (!imageUrl && !color) return null;

  if (isVideo(imageUrl)) {
    return (
      <div className={`absolute z-0 overflow-hidden ${className}`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={imageUrl} type={`video/${imageUrl?.split('.').pop()}`} />
        </video>
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/5" />
      </div>
    );
  }

  const style = {
    backgroundColor: color || 'transparent',
    ...(imageUrl && {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    })
  };

  return <div className={`absolute z-0 ${className}`} style={style} />;
};

const ScrollSection: React.FC<{ chapter: ProjectChapter }> = ({ chapter }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 2);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 2);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver(() => {
      checkScroll();
    });

    resizeObserver.observe(el);
    if (el.children.length > 0) {
      resizeObserver.observe(el.children[0]);
      resizeObserver.observe(el.children[el.children.length - 1]);
    }

    const timer = setTimeout(checkScroll, 100);
    window.addEventListener('resize', checkScroll);
    return () => {
      resizeObserver.disconnect();
      clearTimeout(timer);
      window.removeEventListener('resize', checkScroll);
    };
  }, [chapter.carouselItems]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full py-16 md:py-32 bg-[#fafafa]">
      <div className={SECTION_CONTAINER}>
        <div className="mb-24 md:mb-32 space-y-6 max-w-3xl">
          {renderTitle(chapter.title)}
          {chapter.content && (
            <div className={BODY_STYLE}>{renderContent(chapter.content)}</div>
          )}
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex overflow-x-auto gap-6 md:gap-12 pb-12 hide-scrollbar snap-x snap-mandatory"
          >
            {chapter.carouselItems?.map((item, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-[88vw] md:w-[60vw] lg:w-[45vw] min-h-[420px] md:min-h-[600px] snap-start relative bg-white rounded-[3rem] md:rounded-[4.5rem] overflow-hidden flex flex-col group border border-gray-100 shadow-sm"
              >
                {/* Text content - Consistent padding md:pt-16 and md:pb-16 */}
                <div className="pt-10 px-10 pb-10 md:pt-16 md:px-16 md:pb-16 space-y-2 md:space-y-4">
                  <h4 className="text-2xl md:text-4xl font-medium text-black tracking-tight leading-[1.1]">
                    {item.title}
                  </h4>
                  <p className="text-[#8e959c] text-base md:text-xl font-medium leading-relaxed max-w-2xl">
                    {item.caption}
                  </p>
                </div>

                {/* Image content - Fixed gap issue by using object-cover and top-left alignment for all views */}
                <div className="flex-1 relative w-full overflow-hidden pl-10 md:pl-16 pr-0">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover object-left-top transition-transform duration-700 scale-[1.15] md:scale-[1.05] origin-top-left group-hover:scale-[1.2] md:group-hover:scale-[1.1]" 
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-start gap-4 mt-6">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-14 h-14 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center transition-all ${
                canScrollLeft ? 'opacity-100 hover:bg-gray-50 active:scale-95' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-14 h-14 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center transition-all ${
                canScrollRight ? 'opacity-100 hover:bg-gray-50 active:scale-95' : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Secondary Body Text Section */}
        {chapter.secondaryContent && (
          <div className="mt-12 md:mt-24 space-y-6 max-w-3xl">
            <div className={BODY_STYLE}>{renderContent(chapter.secondaryContent)}</div>
          </div>
        )}
      </div>
    </div>
  );
};

const ChapterItem: React.FC<{ chapter: ProjectChapter }> = ({ chapter }) => {
  const { title, content, imageUrl, template, bgColor, bgImageUrl, mediaWidth } = chapter;

  // Moved up to be available for all templates
  const getMediaStyle = () => {
    if (!mediaWidth) return {};
    if (typeof mediaWidth === 'string') {
      return {
        '--mw-mobile': mediaWidth,
        '--mw-desktop': mediaWidth
      } as React.CSSProperties;
    }
    return {
      '--mw-mobile': mediaWidth.mobile || '100%',
      '--mw-desktop': mediaWidth.desktop || mediaWidth.mobile || '100%'
    } as React.CSSProperties;
  };

  const mediaStyle = getMediaStyle();

  if (template === 'casestudyscroll') {
    return <ScrollSection chapter={chapter} />;
  }

  if (template === 'casestudyquote') {
    const isBgDark = bgColor === '#1a1a1a' || bgColor === 'black';
    return (
      <div className="w-full flex flex-col bg-white overflow-hidden">
        {/* Quote/Text Section - Positioned above the image with reduced bottom padding */}
        <div 
          className="w-full pt-16 pb-8 md:pt-32 md:pb-12 flex items-center justify-center text-center px-8 md:px-12"
          style={{ backgroundColor: bgColor || '#f9fafb' }}
        >
          <div className="max-w-[1100px]">
            <div className={`text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.35] tracking-tight ${isBgDark ? 'text-white' : 'text-black'}`}>
              {renderContent(content)}
            </div>
          </div>
        </div>

        {/* Media Section - Below the quote */}
        {bgImageUrl && (
          <div 
            className="w-full pb-6 md:pb-12 flex justify-center items-center"
            style={{ backgroundColor: bgColor || '#f9fafb' }}
          >
             {/* Unified Responsive Media View */}
             <div className="w-full flex justify-center items-center px-0 md:px-0">
               {isVideo(bgImageUrl) ? (
                 <video 
                   autoPlay 
                   loop 
                   muted 
                   playsInline 
                   className="h-auto object-contain responsive-media"
                   style={{ 
                     clipPath: 'inset(2px 0 0 0)',
                     ...mediaStyle
                   }}
                 >
                   <source src={bgImageUrl} type={`video/${bgImageUrl.split('.').pop()}`} />
                 </video>
               ) : (
                 <img 
                   src={bgImageUrl} 
                   alt="Case study visual" 
                   className="h-auto object-contain responsive-media"
                   style={{ 
                    clipPath: 'inset(2px 0 0 0)',
                    ...mediaStyle 
                   }}
                 />
               )}
            </div>
          </div>
        )}
      </div>
    );
  }

  if (template === 'casestudyspread') {
    // Normalize items to an array (support existing data with single image or new array)
    const items = chapter.spreadItems || (imageUrl ? [{ imageUrl, bgImageUrl, bgColor }] : []);

    return (
      <div className="w-full bg-white relative overflow-hidden">
        
        {/* Title Section - Top */}
        <div className={`${SECTION_CONTAINER} pt-16 md:pt-32 pb-8 md:pb-12 relative z-10`}>
           <div className="max-w-3xl space-y-4 md:space-y-6">
              {renderTitle(title)}
           </div>
        </div>

        {/* Images Grid - Middle */}
        {items.length > 0 && (
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
             {items.map((item, idx) => {
               const ContentWrapper = item.link ? 'a' : 'div';
               const wrapperProps = item.link ? {
                  href: item.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "relative z-10 w-full h-full p-8 md:p-12 flex items-center justify-center group cursor-pointer block"
               } : {
                  className: "relative z-10 w-full h-full p-8 md:p-12 flex items-center justify-center group"
               };

               return (
                <div key={idx} className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
                  <BackgroundMedia imageUrl={item.bgImageUrl} color={item.bgColor} className="inset-0" />
                  <ContentWrapper {...wrapperProps}>
                     <img 
                       src={item.imageUrl} 
                       alt="" 
                       className="w-full h-full object-cover scale-110 md:scale-100 md:object-contain transition-transform duration-700 group-hover:scale-105" 
                     />
                  </ContentWrapper>
                </div>
               );
             })}
          </div>
        )}

        {/* Content Section - Bottom */}
        <div className={`${SECTION_CONTAINER} py-16 md:py-32 relative z-10`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <div className="lg:col-span-1">
              <div className="max-w-3xl space-y-4 md:space-y-6">
                <div className={BODY_STYLE}>{renderContent(content)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (template === 'casestudyleft' || template === 'casestudyright') {
    const isTextOnLeft = template === 'casestudyleft';
    
    // getMediaStyle removed from here as it is now at the top

    return (
      <div className={`w-full bg-white relative overflow-hidden flex flex-col-reverse ${isTextOnLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
        {/* TEXT CONTAINER (Child 1) */}
        <div className={`w-full lg:w-1/2 flex items-center ${isTextOnLeft ? 'lg:justify-end' : 'lg:justify-start'} pt-2 pb-16 md:pt-8 md:pb-32 lg:py-32 relative z-10 bg-white`}>
           {/* Adjusted padding to bring text closer to center on large screens */}
           <div className={`w-full max-w-[750px] px-6 md:px-20 ${isTextOnLeft ? 'lg:pl-20 lg:pr-4 xl:pl-32 xl:pr-10' : 'lg:pr-20 lg:pl-4 xl:pr-32 xl:pl-10'} space-y-4 md:space-y-6`}>
              {/* Desktop Title - Hidden on mobile */}
              <div className="hidden lg:block">
                {renderTitle(title)}
              </div>
              <div className={BODY_STYLE}>{renderContent(content)}</div>
           </div>
        </div>

        {/* IMAGE CONTAINER (Child 2) */}
        <div className={`w-full lg:w-1/2 relative flex flex-col justify-center items-center ${isTextOnLeft ? 'lg:items-start' : 'lg:items-end'} min-h-[250px] md:min-h-[450px] lg:min-h-0 pt-12 pb-2 md:pt-24 md:pb-12 lg:py-32`}>
           <BackgroundMedia 
             imageUrl={bgImageUrl} 
             color={bgColor} 
             className="inset-0" 
           />
           
           {/* Mobile Title - Visible only on mobile, placed above image in flex-col */}
           <div className="block lg:hidden w-full px-6 md:px-20 mb-8 relative z-10">
             {renderTitle(title)}
           </div>

           {/* Adjusted padding to bring image closer to center on large screens */}
           <div className={`relative z-10 w-full ${isTextOnLeft ? 'lg:pl-4 lg:pr-20 xl:pl-10 xl:pr-32' : 'lg:pr-4 lg:pl-20 xl:pr-10 xl:pl-32'} px-6 md:px-20 flex justify-center items-center`}>
             {imageUrl && (
               isVideo(imageUrl) ? (
                 <video 
                   autoPlay 
                   loop 
                   muted 
                   playsInline 
                   className="h-auto object-contain responsive-media"
                   style={{ 
                     clipPath: 'inset(5px 5px 5px 5px)',
                     ...mediaStyle
                   }}
                 >
                   <source src={imageUrl} type={`video/${imageUrl.split('.').pop()}`} />
                 </video>
               ) : (
                 <img 
                   src={imageUrl} 
                   alt={title} 
                   className="h-auto object-contain responsive-media"
                   style={{ 
                    clipPath: 'inset(5px 5px 5px 5px)',
                    ...mediaStyle 
                   }}
                 />
               )
             )}
           </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full py-16 md:py-32 bg-white relative">
      <div className={`${SECTION_CONTAINER} relative z-10`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <div className="lg:col-span-1">
            <div className="space-y-6 md:space-y-8 max-w-3xl">
              {renderTitle(title)}
              <div className={BODY_STYLE}>{renderContent(content)}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (project) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-white antialiased animate-modal-slide-up overflow-hidden">
      <div className="h-full overflow-y-auto scroll-smooth hide-scrollbar text-rendering-crisp">
        <nav className="sticky top-0 z-[70] w-full glass border-b border-gray-100/50 px-6 h-20 md:h-24 flex items-center justify-between">
          <div className="max-w-[1500px] mx-auto w-full flex justify-between items-center px-2 md:px-6">
            <div className="flex flex-col md:flex-row md:items-center md:gap-3">
              <span className="text-[10px] md:text-xs font-black tracking-[0.2em] text-gray-400 uppercase">
                Case Study
              </span>
              <span className="hidden md:block text-gray-300">/</span>
              <span className="text-sm md:text-xl font-bold tracking-tight text-black">
                {project.title}
              </span>
            </div>
            
            <button 
              onClick={onClose}
              className="p-2 md:p-4 hover:bg-black/5 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group"
              aria-label="Close Case Study"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </nav>

        <div className="relative aspect-[4/3] md:aspect-[21/9] w-full bg-gray-100 overflow-hidden">
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-12 left-0 right-0">
            <div className={SECTION_CONTAINER}>
              <h2 className="text-4xl md:text-8xl font-semibold text-white tracking-tight drop-shadow-sm">
                {project.title}
              </h2>
            </div>
          </div>
        </div>
        
        <div className="w-full py-12 md:py-32 bg-white relative">
          <div className={SECTION_CONTAINER}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              <div className="space-y-12">
                <div className="space-y-4 md:space-y-6 max-w-3xl">
                  <p className={HEADER_STYLE}>{project.description}</p>
                </div>
                <div className="space-y-6 md:space-y-10 max-w-3xl">
                  {project.longDescription.split('\n').map((para, pIdx) => (
                    <p key={pIdx} className={BODY_STYLE}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 p-8 md:p-16 bg-gray-50 rounded-[2.5rem] md:rounded-[3rem] border border-gray-100 shadow-sm">
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">Role</h4>
                  <p className="text-lg font-semibold text-black">{project.role}</p>
                </div>
                <div className="space-y-2 md:space-y-3">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">Timeline</h4>
                  <p className="text-lg font-semibold text-black">{project.timeline}</p>
                </div>
                <div className="space-y-2 md:space-y-3 col-span-1 sm:col-span-2">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">Platform</h4>
                  <p className="text-lg font-semibold text-black">{project.platform}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {project.bannerImageUrl && (
          <div className="w-full relative py-8 md:py-28 flex justify-center items-center overflow-hidden">
            <BackgroundMedia 
              imageUrl={project.bgImageUrl} 
              color={project.bgColor} 
              className="inset-0" 
            />
            <div className={`relative z-10 w-full px-0 md:px-16 lg:px-32 xl:px-48 flex justify-center`}>
              <img 
                src={project.bannerImageUrl} 
                alt={`${project.title} Banner`} 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        )}

        <div className="w-full">
          {project.chapters && project.chapters.map((chapter, idx) => (
            <ChapterItem key={idx} chapter={chapter} />
          ))}
        </div>

        <div className="w-full py-24 md:py-32 bg-gray-50 flex flex-col items-center justify-center text-center px-6">
          <h4 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400 mb-6 md:mb-8">End of project</h4>
          <button 
            onClick={onClose}
            className="px-10 py-5 md:px-12 md:py-6 bg-black text-white rounded-full font-semibold hover:scale-105 transition-transform active:scale-95 shadow-xl md:text-lg"
          >
            Back to work
          </button>
        </div>
      </div>
      
      <style>{`
        @keyframes modal-slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-modal-slide-up {
          animation: modal-slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .text-rendering-crisp {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        /* Responsive Media Width Logic */
        .responsive-media {
          width: var(--mw-mobile, 100%);
          max-width: none;
        }
        @media (min-width: 768px) {
          .responsive-media {
            width: var(--mw-desktop, var(--mw-mobile, 100%));
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;