import React, { useState, useEffect } from 'react';
import { Section } from './types';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import TechHub from './components/TechHub';
import Contact from './components/Contact';
import Register from './components/Register';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);
  const [isLoading, setIsLoading] = useState(true);

  // System Boot Sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // Slightly longer for the effect
    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case Section.HERO:
        return <Hero setActiveSection={setActiveSection} />;
      case Section.ABOUT:
        return <About setActiveSection={setActiveSection} />;
      case Section.VISION:
        return <Vision setActiveSection={setActiveSection} />;
      case Section.TECH_HUB:
        return <TechHub />;
      case Section.REGISTER:
        return <Register />;
      case Section.CONTACT:
        return <Contact />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#020202] z-[100] flex flex-col items-center justify-center font-mono text-xs">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        <div className="w-80 relative z-10">
            {/* Header Text */}
            <div className="flex justify-between mb-2 text-brand-cyan">
                <span>BIOS_CHECK...OK</span>
                <span>MEM_ALLOC...OK</span>
            </div>

            {/* Progress Bar Container */}
            <div className="h-1 w-full bg-[#111] overflow-hidden mb-4">
                <div className="h-full bg-brand-cyan animate-[scan_2s_ease-in-out_infinite] w-full origin-left"></div>
            </div>

            {/* Main Logo Loader */}
            <div className="text-center mt-8">
                <h1 className="text-4xl font-black tracking-widest text-white mb-2 font-display animate-pulse">
                    YOSEF
                </h1>
                <div className="flex items-center justify-center gap-2 text-gray-500">
                    <span className="w-2 h-2 bg-brand-cyan animate-ping rounded-full"></span>
                    <span>LOADING CORE MODULES</span>
                </div>
            </div>
            
            {/* Decoding Text Effect */}
            <div className="mt-12 text-[#333] text-center">
                 <p>0x0045F... INIT GRAPHICS ENGINE</p>
                 <p>0x0089A... LOAD_ASSETS</p>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-brand-cyan selection:text-black overflow-x-hidden">
      
      <main className="relative z-10">
        {renderSection()}
      </main>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Watermark Vertical */}
      <div className="fixed bottom-8 left-6 z-40 hidden xl:flex flex-col gap-4 items-center opacity-30">
         <div className="w-px h-24 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
         <p className="text-[10px] font-mono text-gray-500 writing-vertical-lr transform rotate-180 tracking-widest">
            YOSEF TST // VER 4.5
        </p>
      </div>
    </div>
  );
};

export default App;