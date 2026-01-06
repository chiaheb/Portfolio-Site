
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent background scrolling when modal is open
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
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 lg:p-10">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={onClose}
      />
      {/* Increased max-width to 7xl and max-height to 95vh for a larger desktop experience */}
      <div className="relative w-full max-w-7xl max-h-[95vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-sm transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto">
          {/* Main Hero Image */}
          <div className="aspect-[21/9] w-full bg-gray-100">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-16 lg:p-20 space-y-16">
            <div className="grid md:grid-cols-12 gap-12 lg:gap-20">
              <div className="md:col-span-8 space-y-8">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{project.category}</span>
                  <h2 className="text-5xl md:text-6xl font-bold tracking-tight">{project.title}</h2>
                </div>
                <p className="text-2xl text-gray-600 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="prose prose-xl max-w-none text-gray-700 leading-relaxed border-t border-gray-100 pt-8">
                  {project.longDescription}
                </div>
              </div>

              <div className="md:col-span-4 space-y-10">
                <div className="p-8 bg-gray-50 rounded-2xl space-y-8">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Role</h4>
                    <p className="text-lg font-medium">{project.role}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Timeline</h4>
                    <p className="text-lg font-medium">{project.timeline}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-600 rounded-full text-xs font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="space-y-1 text-center md:text-left">
                <p className="text-sm text-gray-400 font-medium">Next Case Study</p>
                <p className="text-2xl font-bold hover:text-gray-600 cursor-pointer transition-colors">HealSync Health Platform</p>
              </div>
              <button className="w-full md:w-auto px-10 py-4 bg-black text-white rounded-full font-bold hover:bg-gray-800 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/10">
                View Live Site
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
