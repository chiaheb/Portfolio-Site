
import React, { useState } from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  imageUrl?: string; // Optional direct plug for external URLs
  index: number;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, imageUrl, index, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Use the plugged-in URL if provided, otherwise fallback to project data
  const displayImageUrl = imageUrl || project.imageUrl;

  // Soft background colors as fallback/loading state
  const bgColors = ['bg-[#e8eaed]', 'bg-[#d2dbe0]', 'bg-[#f1f3f4]', 'bg-[#e5e7eb]'];
  const bgColor = bgColors[index % bgColors.length];

  return (
    <div 
      onClick={() => onClick(project)}
      className={`group cursor-pointer relative rounded-[2.5rem] md:rounded-[3.5rem] ${bgColor} min-h-[500px] md:min-h-[700px] flex flex-col items-center text-center transition-[transform,box-shadow] duration-700 hover:shadow-2xl hover:translate-y-[-8px] overflow-hidden isolate [transform:translateZ(0)]`}
      style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
    >
      {/* Full-bleed External Image Layer */}
      <div className="absolute inset-0 z-0 bg-gray-100 pointer-events-none">
        <img 
          src={displayImageUrl} 
          alt={project.title}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      </div>

      {/* Content Container - Optimized for smooth text transitions */}
      <div className="relative z-20 p-8 md:p-16 pt-16 md:pt-28 flex flex-col items-center w-full h-full pointer-events-none">
        <div className="space-y-4 [backface-visibility:hidden] [transform:translateZ(0)]">
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#1a1a1a] [transform:translateZ(0)]">
            {project.title}
          </h3>
          <p className="text-lg md:text-xl text-[#3c4043] font-medium max-w-md mx-auto leading-relaxed [transform:translateZ(0)]">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
