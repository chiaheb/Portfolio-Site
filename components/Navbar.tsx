import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity">
          Brian<span className="text-gray-400">Chia</span>
        </a>
        <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-gray-600">
          <a href="#work" className="hover:text-black transition-colors">Work</a>
          <a href="#contact" className="px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-all">
            Let's Talk
          </a>
        </div>
        <button className="md:hidden p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;