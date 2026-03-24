import React, { useEffect, useRef, useState } from 'react';

const Section = () => {
  const [isVisible, setIsVisible] = useState({ hardware: false, software: false });
  const hardwareRef = useRef();
  const softwareRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === hardwareRef.current) {
          setIsVisible(prev => ({ ...prev, hardware: entry.isIntersecting }));
        } else if (entry.target === softwareRef.current) {
          setIsVisible(prev => ({ ...prev, software: entry.isIntersecting }));
        }
      });
    }, { threshold: 0.2 });

    if (hardwareRef.current) observer.observe(hardwareRef.current);
    if (softwareRef.current) observer.observe(softwareRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-24 overflow-hidden">
     
      <div 
        ref={hardwareRef}
        className={`container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-40 transition-all duration-1000 transform ${
          isVisible.hardware ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        <div className="w-full md:w-1/2">
          <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Hardware
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#747c27] mb-6 leading-tight">
            Lightweight Wearables.<br /> Heavyweight Insights.
          </h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-xl">
            Built for team use and designed for comfort, ARS Trackers deliver 
            accurate data without getting in the way of practice or game play.
          </p>
          
          <div className="space-y-6">
            <FeatureItem title="Track speed and movement" desc="With accurate GPS data during every training session." />
            <FeatureItem title="Compact, low-profile design" desc="Fits comfortably under your kit without disrupting play." />
            <FeatureItem title="Power full practices" desc="And match days with seven-hour battery life." />
          </div>
        </div>

 
        <div className="w-full md:w-1/2">
          <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="/watch.jpeg" 
              alt="Hardware Tracker" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

       
      <div 
        ref={softwareRef}
        className={`container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16 transition-all duration-1000 transform ${
          isVisible.software ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
     
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <div className="w-full aspect-video overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="/watch2.jpeg" 
              alt="Software Dashboard" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2">
          <span className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Software
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#747c27] mb-6 leading-tight">
            Coach-Friendly Tools.<br /> Instant Impact.
          </h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed max-w-xl">
            ARS's software turns raw data into easy-to-read visuals—so you 
            can understand what's happening and act on it fast.
          </p>
          
          <div className="space-y-6">
            <FeatureItem title="Spot key performance moments" desc="Like top speed, max effort, and acceleration." />
            <FeatureItem title="Understand trends at a glance" desc="With simple, intuitive charts and visual breakdowns." />
            <FeatureItem title="Motivate your team" desc="With leaderboards and rankings that turn effort into competition." />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ title, desc }) => (
  <div className="border-l-2 border-[#C5A059]/40 pl-6 hover:border-emerald-700 transition-colors">
    <h4 className="text-[#747c27] font-bold text-lg">{title}</h4>
    <p className="text-gray-400 text-sm">{desc}</p>
  </div>
);

export default Section;