
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      onClick={() => onClick(project)}
      className="group cursor-pointer space-y-4"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-2xl">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <span className="text-xs font-medium uppercase tracking-widest text-gray-400">{project.category}</span>
        </div>
        <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
