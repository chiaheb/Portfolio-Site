
import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto">
          <div className="aspect-video w-full bg-gray-100">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-16 space-y-12">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">{project.title}</h2>
                <p className="text-xl text-gray-600 leading-relaxed italic">
                  "{project.description}"
                </p>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  {project.longDescription}
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Role</h4>
                  <p className="text-lg font-medium">{project.role}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Timeline</h4>
                  <p className="text-lg font-medium">{project.timeline}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Services</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-gray-100 flex justify-between items-center">
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Next Project</p>
                <p className="text-xl font-bold">HealSync Health Platform</p>
              </div>
              <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
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
