import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ExperienceHighlights from './components/ExperienceHighlights';
import ProjectCard from './components/ProjectCard';
import ProjectModal from './components/ProjectModal';
import Contact from './components/Contact';
import { PROJECTS } from './constants';
import { Project } from './types';

/**
 * CUSTOM CASE STUDY IMAGES
 * Swap these URLs to change the card images on the homepage.
 * IDs '1', '2', '3', '4' correspond to the project order.
 */
const PROJECT_IMAGE_OVERRIDES: Record<string, string> = {
  '1': 'https://raw.githubusercontent.com/chiaheb/portfolio-assets/refs/heads/main/CS%20BG%20Test%201.svg', // Direct (Fintech)
  '2': 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000', // Assignor (Healthcare)
  '3': 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e12?q=80&w=2000', // Floor View (E-commerce)
  '4': 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000', // FIX.CX (Productivity)
};

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <ExperienceHighlights />

        {/* Project Section */}
        <section id="work" className="py-12 md:py-24 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <header className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-400">
                Selected projects
              </h2>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {PROJECTS.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  // Use the override URL if it exists, otherwise fallback to data in constants
                  imageUrl={PROJECT_IMAGE_OVERRIDES[project.id] || project.coverImageUrl}
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