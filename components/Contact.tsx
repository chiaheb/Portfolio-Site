
import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-gray-100 pb-20">
          <div className="space-y-6">
            <div className="flex flex-col space-y-2 text-xl md:text-2xl font-medium">
              <a href="mailto:brian.chiahe@gmail.com" className="hover:text-gray-500 transition-colors">brian.chiahe@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center space-x-8 text-sm font-bold uppercase tracking-widest text-gray-400">
            <a 
              href="https://www.linkedin.com/in/brianchiahe/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-black transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-between text-sm text-gray-400 gap-4">
          <p>Brian Chia © 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
