import React, { useState } from 'react';

const Watch = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      {/* Navigation Bar */}
      <header className="bg-white px-4 md:px-12 py-4 flex justify-between lg:justify-start items-center sticky top-0 z-[100] shadow-sm md:gap-12">
        {/* Logo Container */}
        <div className="flex items-center">
          <a href="/" className="hover:opacity-90 transition-opacity">
            <img
              src="/logo.jpeg"
              alt="Watch Logo"
              className="h-10 md:h-20 w-auto object-contain object-left transform md:scale-125"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-gray-800 font-semibold tracking-tight">
          <a href="#products" className="hover:text-emerald-800 transition flex items-center gap-1">
            Products <span className="text-[10px]">▼</span>
          </a>
          <a href="#blog" className="hover:text-emerald-800 transition">Blog</a>
          <a href="#press" className="hover:text-emerald-800 transition">Press</a>
          <a href="#about" className="hover:text-emerald-800 transition flex items-center gap-1">
            About ARS <span className="text-[10px]">▼</span>
          </a>
        </nav>

        {/* Action Buttons (Desktop and Mobile) */}
        <div className="ml-auto flex items-center gap-4">
          <button className="bg-[#747c27] hover:bg-emerald-900 text-white px-4 md:px-8 py-2 md:py-3 rounded-sm text-xs md:text-base font-bold transition">
            Get in Touch
          </button>

          {/* Hamburger Icon - Only Visible on Mobile/Tablet */}
          <button 
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="w-8 h-0.5 bg-gray-800"></span>
            <span className="w-8 h-0.5 bg-gray-800"></span>
            <span className="w-8 h-0.5 bg-gray-800"></span>
          </button>
        </div>
      </header>

      {/* Mobile Slide-over Menu */}
      <div 
        className={`fixed inset-0 z-[110] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
      >
        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 bg-black/50" 
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-xl p-8 flex flex-col gap-8">
          <button 
            onClick={() => setIsOpen(false)}
            className="self-end text-3xl font-light text-gray-600"
          >
            ✕
          </button>
          
          <nav className="flex flex-col gap-6 text-xl font-medium text-gray-800">
            <a href="#products" onClick={() => setIsOpen(false)}>Products</a>
            <a href="#blog" onClick={() => setIsOpen(false)}>Blog</a>
            <a href="#press" onClick={() => setIsOpen(false)}>Press</a>
            <a href="#about" onClick={() => setIsOpen(false)}>About ARS</a>
          </nav>

          <button className="mt-auto bg-[#747c27] text-white py-4 rounded-sm font-bold">
            Get in Touch
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/vdo.mp4" type="video/mp4" />
            <img src="https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80" alt="Watch" className="w-full h-full object-cover"/>
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 flex justify-center md:justify-end">
          <div className="max-w-lg text-center md:text-left text-white">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-light mb-4 leading-tight">
              Built to <span className="font-semibold text-[#C5A059]">Move</span> with You
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed opacity-90">
              From vitals to recovery, the Sensio smart band offers extended battery life and continuous health tracking.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-Nav Bar */}
      <section className="bg-[#747c27] py-4 border-b border-emerald-800 overflow-x-auto">
        <div className="container mx-auto px-6 md:px-12 flex space-x-8 md:space-x-12 whitespace-nowrap">
          <button className="text-white font-bold tracking-widest text-[10px] md:text-sm uppercase border-b-2 border-[#C5A059] pb-1">
            Overview
          </button>
          <button className="text-gray-300 font-bold tracking-widest text-[10px] md:text-sm uppercase hover:text-white transition pb-1">
            Features
          </button>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-white py-12 md:py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-[#747c27] mb-4 leading-tight">
            Built for Movement,<br className="md:hidden" /> Built for Scale.
          </h2>
          <p className="text-gray-600 max-w-2xl text-sm md:text-base leading-relaxed">
            Sensio's Smart Band delivers robust health monitoring in a sleek, wrist-worn form factor that's perfect for active use cases.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Watch;