import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold leading-[0.95] mb-10 tracking-tighter max-w-5xl">
          <span className="text-gray-200 block">Architect</span>
          <span className="text-black block">Product designer</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl font-light leading-relaxed">
          My designs used to shape big cities, and now it helps to drive even bigger ideas and goals for startups.
        </p>
      </div>
    </section>
  );
};

export default Hero;