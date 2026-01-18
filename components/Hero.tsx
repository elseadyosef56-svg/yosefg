import React from 'react';
import { Section } from '../types';
import { BookOpen, Cpu, Send, ChevronLeft, Database, Globe, Shield, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: Section) => void;
}

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-12 pb-24">
      
      {/* --- Dynamic Background Elements --- */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-20 transform perspective-[1000px] rotateX(15deg) pointer-events-none"></div>
      <div className="absolute top-0 w-full h-full bg-gradient-to-b from-transparent via-brand-purple/5 to-black pointer-events-none"></div>

      <div className="max-w-7xl px-4 relative z-10 flex flex-col items-center w-full">
        
        {/* --- System Status Badge --- */}
        <div className="flex flex-col md:flex-row items-center gap-3 mb-10 border border-white/10 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full">
             <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono font-bold text-green-400 tracking-widest">
                    SYSTEM ONLINE <span className="text-gray-500 opacity-70 mx-1">/</span> النظام متصل
                </span>
             </div>
        </div>

        {/* --- LUXURY LOGO --- */}
        <div className="relative mb-12 group cursor-default">
             {/* Glowing Aura */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-cyan/20 blur-[100px] rounded-full opacity-50 pointer-events-none"></div>
             
             <h1 className="relative flex flex-col items-center leading-none z-10">
                <span className="text-[5rem] sm:text-[7rem] md:text-[9rem] lg:text-[11rem] font-black font-display tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                    YOSEF
                </span>
                <div className="flex items-center gap-4 mt-[-10px] md:mt-[-30px]">
                    <span className="h-[2px] w-16 md:w-40 bg-gradient-to-l from-brand-cyan to-transparent"></span>
                    <div className="relative px-4 py-1">
                        <span className="absolute inset-0 bg-brand-cyan/10 skew-x-[-10deg] border border-brand-cyan/30"></span>
                        <span className="relative text-3xl md:text-6xl font-black font-tech text-brand-cyan tracking-[0.2em] drop-shadow-[0_0_15px_rgba(0,243,255,0.8)]">
                            TST
                        </span>
                    </div>
                    <span className="h-[2px] w-16 md:w-40 bg-gradient-to-r from-brand-cyan to-transparent"></span>
                </div>
             </h1>
        </div>

        {/* --- POWERFUL SLOGAN --- */}
        <div className="max-w-5xl mx-auto mb-20 relative">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-sans drop-shadow-lg mb-4">
                <span className="block text-brand-cyan font-display mb-2 tracking-widest text-lg md:text-xl uppercase">The Next Generation</span>
                الجيل القادم في ليبيا: بوابتك نحو المستقبل
            </h2>
            <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed">
                حيث يلتقي <span className="text-white font-bold border-b border-brand-purple">الذكاء الاصطناعي</span> بالإبداع الهندسي لخلق واقع رقمي جديد.
                <br/>
                <span className="font-mono text-xs text-brand-cyan opacity-80 mt-1 block">WHERE AI MEETS ENGINEERING CREATIVITY</span>
            </p>
        </div>

        {/* --- CONTROL DECK (Bilingual Buttons) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4 z-20">
          
          {/* BUTTON 01: ACADEMY */}
          <button 
            onClick={() => setActiveSection(Section.REGISTER)}
            className="group relative h-48 bg-[#08080A] border border-white/10 clip-button-tech overflow-hidden hover:border-brand-cyan transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="absolute inset-0 p-8 flex flex-col justify-between items-start text-left">
                <div className="w-full flex justify-between items-start">
                    <div className="p-3 bg-brand-cyan text-black rounded-lg shadow-[0_0_20px_rgba(0,243,255,0.5)] group-hover:scale-110 transition-transform duration-300">
                        <BookOpen size={28} strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] font-mono text-brand-cyan font-bold border border-brand-cyan/30 px-2 py-1 rounded bg-black/50">01</span>
                </div>
                <div>
                    <h3 className="text-2xl font-black font-display text-white tracking-wider group-hover:text-brand-cyan transition-colors">
                        ACADEMY
                    </h3>
                    <p className="text-sm text-gray-400 font-sans font-bold mt-1">الأكاديمية والتدريب</p>
                </div>
             </div>
          </button>

          {/* BUTTON 02: TECH HUB */}
          <button 
            onClick={() => setActiveSection(Section.TECH_HUB)}
            className="group relative h-48 bg-[#08080A] border border-white/10 clip-button-tech overflow-hidden hover:border-brand-purple transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="absolute inset-0 p-8 flex flex-col justify-between items-start text-left">
                <div className="w-full flex justify-between items-start">
                    <div className="p-3 bg-brand-purple text-white rounded-lg shadow-[0_0_20px_rgba(157,0,255,0.5)] group-hover:scale-110 transition-transform duration-300">
                        <Database size={28} strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] font-mono text-brand-purple font-bold border border-brand-purple/30 px-2 py-1 rounded bg-black/50">02</span>
                </div>
                <div>
                    <h3 className="text-2xl font-black font-display text-white tracking-wider group-hover:text-brand-purple transition-colors">
                        TECH HUB
                    </h3>
                    <p className="text-sm text-gray-400 font-sans font-bold mt-1">المركز التقني</p>
                </div>
             </div>
          </button>
          
           {/* BUTTON 03: CONTACT */}
          <button 
            onClick={() => setActiveSection(Section.CONTACT)}
            className="group relative h-48 bg-[#08080A] border border-white/10 clip-button-tech overflow-hidden hover:border-white transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             <div className="absolute inset-0 p-8 flex flex-col justify-between items-start text-left">
                <div className="w-full flex justify-between items-start">
                    <div className="p-3 bg-white text-black rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-300">
                        <Send size={28} strokeWidth={2.5} />
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 font-bold border border-white/30 px-2 py-1 rounded bg-black/50">03</span>
                </div>
                <div>
                    <h3 className="text-2xl font-black font-display text-white tracking-wider group-hover:text-gray-300 transition-colors">
                        CONNECT
                    </h3>
                    <p className="text-sm text-gray-400 font-sans font-bold mt-1">تواصل معنا</p>
                </div>
             </div>
          </button>

        </div>
      </div>

      {/* --- Footer Ticker --- */}
      <div className="absolute bottom-0 w-full h-10 border-t border-white/10 bg-[#050505]/95 backdrop-blur-xl flex items-center justify-between px-6 z-50 overflow-hidden">
          <div className="flex gap-8 animate-marquee whitespace-nowrap text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest">
              <span className="flex items-center gap-2"><Sparkles size={10} className="text-brand-gold"/> INNOVATION FOR LIBYA</span>
              <span className="flex items-center gap-2"><Globe size={10} className="text-brand-cyan"/> GLOBAL STANDARDS</span>
              <span className="flex items-center gap-2"><Zap size={10} className="text-brand-purple"/> AI INTEGRATION</span>
          </div>
      </div>
    </div>
  );
};

export default Hero;