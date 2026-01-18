import React from 'react';
import { GraduationCap, Flag, BookOpen, Globe, Cpu, MousePointerClick } from 'lucide-react';
import { Section } from '../types';

interface VisionProps {
    setActiveSection: (section: Section) => void;
}

const Vision: React.FC<VisionProps> = ({ setActiveSection }) => {
  return (
    <div className="min-h-screen pt-20 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
       <div className="flex flex-col items-center text-center mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 bg-purple-500/20 blur-[80px] pointer-events-none"></div>
        <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase tracking-widest text-white drop-shadow-lg relative z-10">
          الرؤية <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-purple to-brand-cyan text-glow">والمستقبل</span>
        </h2>
        <div className="h-1 w-48 bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-50 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Interactive Image Grid (Portals) */}
        <div className="grid grid-cols-2 gap-6 relative">
             {/* Decorative lines connecting images */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-brand-cyan/30 z-0 shadow-[0_0_10px_rgba(0,243,255,0.3)]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[2px] h-full bg-brand-cyan/30 z-0 shadow-[0_0_10px_rgba(0,243,255,0.3)]"></div>

            {/* Image 1 - Libya */}
            <div 
                className="group relative cursor-pointer mt-12 transform hover:-translate-y-2 transition-transform duration-300"
                onClick={() => setActiveSection(Section.TECH_HUB)}
            >
                 <div className="absolute -inset-0.5 bg-gradient-to-br from-green-500 to-black rounded-2xl opacity-30 group-hover:opacity-100 blur transition duration-500"></div>
                 <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black h-64 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1531297461136-82lw9z2l33y6?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" alt="Libya Tech" />
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                        <MousePointerClick className="text-green-400 mb-2 animate-bounce w-10 h-10" />
                        <span className="text-xs font-mono bg-green-900/80 px-3 py-1 text-green-300 border border-green-500/50 rounded font-bold">DATA_LINK: LIBYA_AI</span>
                    </div>
                    <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <div className="flex items-center gap-3 text-white">
                            <div className="p-1.5 bg-green-600 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                                <Flag size={14} className="text-white" />
                            </div>
                            <span className="font-bold text-base shadow-black drop-shadow-md">ليبيا المستقبل</span>
                        </div>
                    </div>
                 </div>
            </div>

            {/* Image 2 - Education */}
            <div 
                className="group relative cursor-pointer transform hover:-translate-y-2 transition-transform duration-300"
                onClick={() => setActiveSection(Section.TECH_HUB)}
            >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-red-500 to-black rounded-2xl opacity-30 group-hover:opacity-100 blur transition duration-500"></div>
                 <div className="relative rounded-2xl overflow-hidden border border-white/20 bg-black h-64 shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" alt="Harvard Code" />
                    <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                        <MousePointerClick className="text-red-400 mb-2 animate-bounce w-10 h-10" />
                         <span className="text-xs font-mono bg-red-900/80 px-3 py-1 text-red-300 border border-red-500/50 rounded font-bold">DATA_LINK: ACADEMIC</span>
                    </div>
                     <div className="absolute bottom-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <div className="flex items-center gap-3 text-white">
                            <div className="p-1.5 bg-red-600 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.5)]">
                                <GraduationCap size={14} className="text-white" />
                            </div>
                            <span className="font-bold text-base shadow-black drop-shadow-md">أكاديمية عالمية</span>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        {/* Right: Content */}
        <div className="space-y-8 text-right rtl">
            <div className="glass-panel p-8 rounded-tr-3xl rounded-bl-3xl border-r-4 border-r-brand-purple bg-[#101015]/80 relative overflow-hidden group shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl group-hover:bg-brand-purple/20 transition-all"></div>
                
                <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-4">
                    <div className="p-2 bg-brand-cyan/20 rounded-lg border border-brand-cyan/30">
                        <Globe className="text-brand-cyan animate-spin-slow" size={24} />
                    </div>
                    مشروع: ليبيا الذكية
                </h3>
                <p className="text-gray-200 leading-relaxed text-lg mb-6 font-medium">
                    مشروعي لا يقتصر على بناء المواقع، بل يهدف إلى <span className="text-white font-bold bg-brand-purple/20 px-1 rounded">توطين التكنولوجيا</span>. 
                    أعمل على نقل الخبرات العالمية من وادي السيليكون مباشرة إلى طرابلس وبنغازي وكل مدن ليبيا.
                </p>
                <ul className="space-y-3 text-sm text-gray-300 font-mono">
                    <li className="flex items-center gap-3 p-2 rounded hover:bg-white/5 transition-colors">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs">✓</span>
                         تطوير البنية التحتية الرقمية
                    </li>
                    <li className="flex items-center gap-3 p-2 rounded hover:bg-white/5 transition-colors">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20 text-green-400 text-xs">✓</span>
                         دمج الذكاء الاصطناعي في المؤسسات
                    </li>
                </ul>
                <button 
                    onClick={() => setActiveSection(Section.TECH_HUB)}
                    className="mt-8 text-black bg-brand-cyan px-6 py-2 rounded font-bold flex items-center gap-2 hover:gap-4 transition-all hover:bg-white shadow-[0_0_15px_rgba(0,243,255,0.4)]"
                >
                    شاهد المخطط التقني <BookOpen size={18} />
                </button>
            </div>

            <div className="glass-panel p-8 rounded-tl-3xl rounded-br-3xl border-r-4 border-r-brand-cyan bg-[#101015]/80 relative overflow-hidden shadow-lg">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                    <div className="p-2 bg-brand-purple/20 rounded-lg border border-brand-purple/30">
                        <Cpu className="text-brand-purple" size={24} />
                    </div>
                    المعيار الأكاديمي (CS50 & Stanford)
                </h3>
                <p className="text-gray-200 leading-relaxed mb-6 font-medium">
                    البرمجة ليست مجرد كتابة أكواد، بل هي هندسة تفكير. أعتمد المنهجيات التي تدرس في:
                </p>
                <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-red-500 hover:bg-red-900/10 transition-colors cursor-default">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-black shadow-[0_0_15px_rgba(185,28,28,0.4)] text-lg">H</div>
                        <div>
                            <span className="block font-bold text-white text-lg">Harvard University (CS50)</span>
                            <span className="text-xs text-red-400 font-mono font-bold">ALGORITHMS & DATA STRUCTURES</span>
                        </div>
                    </div>
                     <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-red-500 hover:bg-red-900/10 transition-colors cursor-default">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-700 to-red-900 flex items-center justify-center text-white font-black shadow-[0_0_15px_rgba(185,28,28,0.4)] text-lg">S</div>
                        <div>
                            <span className="block font-bold text-white text-lg">Stanford Engineering</span>
                            <span className="text-xs text-red-400 font-mono font-bold">AI & MACHINE LEARNING</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;