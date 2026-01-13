
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

        {/* Project Section */}
        <section id="work" className="pt-0 pb-24 md:pb-32 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <header className="mb-16 md:mb-24">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-400">
                Selected projects
              </h2>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {PROJECTS.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
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
