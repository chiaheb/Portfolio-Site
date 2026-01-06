
import React from 'react';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 border-b border-gray-100 pb-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
              Let's create something meaningful together.
            </h3>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-between text-sm text-gray-400 gap-4">
          <p>Brian Chia © 2026</p>
          <p className="font-medium">Vancouver, Canada</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
