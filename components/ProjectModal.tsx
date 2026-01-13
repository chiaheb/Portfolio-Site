
import React, { useEffect } from 'react';
import { Project, ProjectChapter } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

// Global styles with adjusted line spacing for desktop views
const HEADER_STYLE = "text-2xl md:text-4xl lg:text-5xl text-black leading-[1.5] md:leading-[1.4] lg:leading-[1.5] font-medium tracking-tight";
const BODY_STYLE = "text-lg md:text-xl lg:text-2xl text-gray-900/70 leading-[2.0] md:leading-[1.8] lg:leading-[2.0] font-normal";

const ChapterItem: React.FC<{ chapter: ProjectChapter }> = ({ chapter }) => {
  const { title, content, imageUrl, template, bgColor } = chapter;

  return (
    <div className="w-full py-20 md:py-32" style={{ backgroundColor: bgColor || '#fff' }}>
      {template === 'casestudy spread' ? (
        <div className="w-full">
          <div className="max-w-[1500px] mx-auto px-8 md:px-12 lg:px-16 mb-16">
            <div className="max-w-3xl space-y-6">
              <h3 className={HEADER_STYLE}>{title}</h3>
              <p className={BODY_STYLE}>{content}</p>
            </div>
          </div>
          {imageUrl && (
            <div className="w-full bg-white">
              <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-[1500px] mx-auto px-8 md:px-12 lg:px-16">
          {template === 'casestudyleft' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="space-y-6 max-w-2xl">
                <h3 className={HEADER_STYLE}>{title}</h3>
                <p className={BODY_STYLE}>{content}</p>
              </div>
              {imageUrl && (
                <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white shadow-sm border border-gray-100 w-full">
                  <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
                </div>
              )}
            </div>
          )}

          {template === 'casestudyright' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              {imageUrl && (
                <div className="order-2 lg:order-1 rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white shadow-sm border border-gray-100 w-full">
                  <img src={imageUrl} alt={title} className="w-full h-auto object-cover" />
                </div>
              )}
              <div className="order-1 lg:order-2 space-y-6 max-w-2xl">
                <h3 className={HEADER_STYLE}>{title}</h3>
                <p className={BODY_STYLE}>{content}</p>
              </div>
            </div>
          )}

          {!template && (
            <div className="space-y-8 max-w-3xl">
              <h3 className={HEADER_STYLE}>{title}</h3>
              <p className={BODY_STYLE}>{content}</p>
            </div>
          )}
        </div>
      )}
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
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 lg:p-10 antialiased">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-[1600px] max-h-[95vh] bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col animate-modal-enter transition-opacity duration-300">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 z-[70] p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110 active:scale-95 group"
          aria-label="Close Case Study"
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto scroll-smooth h-full hide-scrollbar text-rendering-crisp">
          {/* 1. Hero Header */}
          <div className="relative aspect-[4/3] md:aspect-[21/9] w-full bg-gray-100 overflow-hidden">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-12 left-8 md:left-20">
              <h2 className="text-4xl md:text-7xl font-semibold text-white tracking-tight drop-shadow-sm">
                {project.title}
              </h2>
            </div>
          </div>
          
          {/* Intro Section - Now always white background */}
          <div className="w-full py-16 md:py-24 bg-white">
            <div className="max-w-[1500px] mx-auto px-8 md:px-12 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                
                {/* Left Column: Summary and Long Writeup */}
                <div className="lg:col-span-7 space-y-12">
                  <div className="space-y-6 max-w-3xl">
                    <p className={HEADER_STYLE}>
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="space-y-10 max-w-3xl">
                    {project.longDescription.split('\n').map((para, pIdx) => (
                      <p key={pIdx} className={BODY_STYLE}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Right Column: Metadata Sidebar Card - Uses gray-50 for contrast on white bg */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-10 p-10 md:p-14 bg-gray-50 rounded-[3rem] border border-gray-100 shadow-sm">
                  <div className="space-y-3">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">Role</h4>
                    <p className="text-lg font-semibold text-black">{project.role}</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">Timeline</h4>
                    <p className="text-lg font-semibold text-black">{project.timeline}</p>
                  </div>
                  <div className="space-y-3 col-span-1 sm:col-span-2">
                    <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-gray-400">Platform</h4>
                    <p className="text-lg font-semibold text-black">{project.platform}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Deep-Dive Narrative Chapters */}
          <div className="w-full">
            {project.chapters && project.chapters.map((chapter, idx) => (
              <ChapterItem key={idx} chapter={chapter} />
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes modal-enter {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-modal-enter {
          animation: modal-enter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
      `}</style>
    </div>
  );
};

export default ProjectModal;