import React from 'react';
import { Home, User, Lightbulb, Cpu, Phone, PenTool } from 'lucide-react';
import { Section } from '../types';

interface NavigationProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: Section.HERO, label: 'الرئيسية', icon: <Home size={18} /> },
    { id: Section.ABOUT, label: 'نبذة', icon: <User size={18} /> },
    { id: Section.REGISTER, label: 'التسجيل', icon: <PenTool size={18} /> },
    { id: Section.TECH_HUB, label: 'تقنيات', icon: <Cpu size={18} /> },
    { id: Section.CONTACT, label: 'تواصل', icon: <Phone size={18} /> },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-lg px-4">
      {/* HUD Container */}
      <div className="relative bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)] clip-diagonal-inverse">
        
        {/* Glowing Top Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan to-transparent opacity-50"></div>

        <ul className="flex justify-between items-center relative z-10">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => setActiveSection(item.id)}
                className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'text-brand-black bg-brand-cyan shadow-[0_0_15px_rgba(0,243,255,0.4)] translate-y-[-10px]'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className={`transition-transform duration-300 ${activeSection === item.id ? 'scale-110' : ''}`}>
                  {item.icon}
                </div>
                
                {/* Active Indicator Dot */}
                {activeSection === item.id && (
                    <div className="absolute -bottom-2 w-1 h-1 bg-brand-cyan rounded-full"></div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;