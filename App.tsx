
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceHighlights from './components/ExperienceHighlights';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import Contact from './components/Contact';
import { PROJECTS } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <ExperienceHighlights />

        {/* Project Grid Section */}
        <section id="work" className="py-24 px-6 border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
              {PROJECTS.map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={setSelectedProject}
                />
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>

      {/* Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
};

export default App;
