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

  // Initial Loading Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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
      <div className="min-h-screen bg-[#020202] flex flex-col items-center justify-center relative overflow-hidden z-50">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-20"></div>
        <div className="relative z-10 flex flex-col items-center">
            <div className="w-32 h-32 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-8 shadow-[0_0_50px_rgba(6,182,212,0.3)]"></div>
            <h1 className="text-5xl font-black tracking-[0.2em] text-white animate-pulse mb-2">
            YOSEF
            </h1>
            <div className="flex items-center gap-2">
                <span className="h-px w-12 bg-cyan-500"></span>
                <span className="text-cyan-500 font-mono font-bold tracking-widest">TST SYSTEMS</span>
                <span className="h-px w-12 bg-cyan-500"></span>
            </div>
            <p className="text-gray-500 mt-6 text-xs font-mono animate-bounce">INITIALIZING CORE MODULES...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020202] text-white selection:bg-cyan-500 selection:text-black font-sans overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,0)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#06b6d4]/5 to-transparent opacity-30"></div>
      </div>

      <main className="relative z-10 transition-opacity duration-500 ease-in-out">
        {renderSection()}
      </main>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Footer / Copyright - Tech Style */}
      <footer className="fixed bottom-4 left-6 z-40 hidden lg:block">
        <div className="flex flex-col gap-1">
             <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-transparent"></div>
             <p className="text-[10px] text-cyan-500/60 font-mono tracking-widest">
                © 2024 YOSEF TST // SYSTEM ONLINE
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;