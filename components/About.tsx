import React from 'react';
import { Code, Bot, Palette, Video, Layers, Terminal, ArrowRight, LayoutTemplate, ShieldCheck } from 'lucide-react';
import { Section } from '../types';

interface AboutProps {
  setActiveSection: (section: Section) => void;
}

const About: React.FC<AboutProps> = ({ setActiveSection }) => {
  const skills = [
    { title: 'Full-Stack Architecture', arTitle: 'هندسة الويب المتكاملة', icon: <Code size={28} />, bg: 'bg-gradient-to-br from-cyan-400 to-blue-600', shadow: 'shadow-cyan-500/40', border: 'group-hover:border-cyan-400' },
    { title: 'AI System Integration', arTitle: 'دمج أنظمة الذكاء الاصطناعي', icon: <Bot size={28} />, bg: 'bg-gradient-to-br from-purple-400 to-indigo-600', shadow: 'shadow-purple-500/40', border: 'group-hover:border-purple-400' },
    { title: 'Advanced UI/UX', arTitle: 'تجربة مستخدم متقدمة', icon: <LayoutTemplate size={28} />, bg: 'bg-gradient-to-br from-pink-400 to-rose-600', shadow: 'shadow-pink-500/40', border: 'group-hover:border-pink-400' },
    { title: 'Cyber Security', arTitle: 'الأمن السيبراني والحماية', icon: <ShieldCheck size={28} />, bg: 'bg-gradient-to-br from-emerald-400 to-green-600', shadow: 'shadow-emerald-500/40', border: 'group-hover:border-emerald-400' },
    { title: 'Visual Identity', arTitle: 'الهوية البصرية والتصميم', icon: <Palette size={28} />, bg: 'bg-gradient-to-br from-yellow-400 to-orange-600', shadow: 'shadow-yellow-500/40', border: 'group-hover:border-yellow-400' },
    { title: 'DevOps Engineering', arTitle: 'إدارة العمليات والأنظمة', icon: <Terminal size={28} />, bg: 'bg-gradient-to-br from-blue-400 to-cyan-600', shadow: 'shadow-blue-500/40', border: 'group-hover:border-blue-400' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center">
      
      {/* Header */}
      <div className="relative mb-24 text-center">
         <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
         <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter font-eng mb-4 drop-shadow-2xl">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-purple">ARCHITECT</span>
         </h2>
         <div className="flex flex-col items-center">
            <span className="text-gray-400 font-mono text-xs uppercase tracking-[0.4em] border-b border-gray-700 pb-2 mb-1">Building The Future of Libya</span>
            <span className="text-brand-cyan font-sans font-bold text-sm">بناء مستقبل ليبيا الرقمي</span>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full mb-24">
          
          {/* Bio Text */}
          <div className="text-right order-2 lg:order-1">
              <div className="border-r-4 border-brand-cyan pr-8 relative bg-gradient-to-l from-white/5 to-transparent p-8 rounded-l-3xl backdrop-blur-sm border-t border-b border-white/5">
                  <div className="absolute top-0 right-[-6px] w-3 h-3 bg-brand-cyan shadow-[0_0_15px_#00F0FF]"></div>
                  <div className="absolute bottom-0 right-[-6px] w-3 h-3 bg-brand-cyan shadow-[0_0_15px_#00F0FF]"></div>
                  
                  <h3 className="text-3xl font-bold text-white mb-6 font-sans flex items-center justify-end gap-3">
                      أنا يوسف، مهندس برمجيات شغوف
                      <span className="w-2 h-8 bg-brand-purple rounded"></span>
                  </h3>
                  <p className="text-gray-200 text-lg leading-loose font-medium mb-8">
                    مهمتي تتجاوز كتابة الكود؛ أنا أبني <span className="text-brand-cyan font-bold bg-brand-cyan/10 px-1 rounded">أنظمة بيئية رقمية متكاملة</span>. 
                    من خلال دمج الذكاء الاصطناعي مع أحدث تقنيات الويب، 
                    أسعى لنقل البنية التحتية التقنية في ليبيا إلى مستوى المنافسة العالمية.
                  </p>
                  
                  <div className="space-y-2">
                      <p className="text-brand-purple font-mono text-xs font-bold uppercase">
                        // SPECIALIZED IN
                      </p>
                      <div className="flex flex-wrap gap-2">
                          {['MERN STACK', 'NEXT.JS', 'PYTHON AI', 'CLOUD INFRA'].map((tag) => (
                              <span key={tag} className="bg-brand-purple/10 text-brand-purple border border-brand-purple/20 px-3 py-1 rounded text-xs font-bold font-mono">
                                  {tag}
                              </span>
                          ))}
                      </div>
                  </div>
              </div>
          </div>

          {/* Holographic Avatar */}
          <div className="order-1 lg:order-2 flex justify-center relative">
               <div className="relative w-72 h-96 border-2 border-white/10 rounded-2xl flex items-center justify-center group overflow-hidden bg-black shadow-[0_0_50px_rgba(0,243,255,0.1)]">
                   <div className="absolute inset-0 bg-gradient-to-b from-brand-cyan/20 to-transparent opacity-50 z-10 pointer-events-none"></div>
                   <img 
                    src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop" 
                    alt="Yosef Profile" 
                    className="w-full h-full object-cover grayscale mix-blend-luminosity group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                   />
                   
                   {/* HUD Overlay */}
                   <div className="absolute inset-0 z-20 p-4 flex flex-col justify-between">
                       <div className="flex justify-between">
                           <ShieldCheck className="text-brand-cyan w-6 h-6" />
                           <div className="h-1 w-10 bg-brand-cyan animate-pulse"></div>
                       </div>
                       <div className="bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10">
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="text-xs font-mono text-white font-bold">ID: YOSEF_DEV_01</div>
                                    <div className="text-[9px] text-gray-400">LEAD ARCHITECT</div>
                                </div>
                                <div className="text-[9px] font-mono bg-green-500/20 text-green-400 px-2 py-1 rounded border border-green-500/30 animate-pulse">ONLINE</div>
                            </div>
                       </div>
                   </div>
                   
                   {/* Scanning Line */}
                   <div className="absolute top-0 left-0 w-full h-1 bg-brand-cyan/80 shadow-[0_0_20px_#00F0FF] animate-scan opacity-0 group-hover:opacity-100 z-30"></div>
               </div>
          </div>
      </div>

      {/* Skills Matrix */}
      <div className="w-full">
          <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-brand-purple rounded-xl shadow-[0_0_20px_rgba(157,0,255,0.4)]">
                 <Layers className="text-white" size={24} />
              </div>
              <div>
                  <h3 className="text-2xl font-black text-white font-eng tracking-wider uppercase leading-none">
                      Technical <span className="text-brand-purple">Arsenal</span>
                  </h3>
                  <p className="text-sm text-gray-400 font-sans">الترسانة التقنية والمهارات</p>
              </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className={`group relative bg-[#0A0A0E] border border-white/10 p-6 rounded-2xl transition-all duration-300 hover:bg-[#121218] hover:border-opacity-100 ${skill.border} hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-6">
                     <div className={`p-4 rounded-2xl text-white shadow-xl ${skill.bg} ${skill.shadow} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      {skill.icon}
                    </div>
                    <div className="text-[10px] font-mono text-gray-500 font-bold group-hover:text-white transition-colors bg-white/5 px-2 py-1 rounded">LVL.99</div>
                </div>
               
                <div>
                    <h3 className="text-xl font-bold text-white font-eng tracking-wide group-hover:text-brand-cyan transition-colors">{skill.title}</h3>
                    <p className="text-sm text-gray-400 font-sans mt-1 group-hover:text-white transition-colors">{skill.arTitle}</p>
                </div>
                
                {/* Progress Bar Decoration */}
                <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mt-6">
                    <div className={`h-full w-[0%] group-hover:w-[100%] transition-all duration-1000 ease-out ${skill.bg}`}></div>
                </div>
              </div>
            ))}
          </div>
      </div>

    </div>
  );
};

export default About;