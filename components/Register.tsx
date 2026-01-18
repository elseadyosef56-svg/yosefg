import React, { useState } from 'react';
import { User, Smartphone, Send, Shield, Zap, BookOpen, Brain, Terminal, Sparkles } from 'lucide-react';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    courseType: 'full', 
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const courseLabels: {[key: string]: string} = {
        'full': 'الدورة الشاملة (Full Stack + CS50)',
        'basics': 'تأسيس برمجي (CS50 Intro)',
        'practical': 'احتراف الويب والذكاء الاصطناعي (Web & AI)',
        'vip': 'المسار الملكي (VIP Mentorship)',
        'ai_life': 'الذكاء الاصطناعي في الحياة اليومية (AI Daily Life)'
    };

    const message = `👋 مرحباً يوسف،%0A🚀 أرغب بالانضمام للنخبة التقنية:%0A%0A👤 الاسم: ${formData.name}%0A📱 الهاتف: ${formData.phone}%0A🔥 المسار المختار: ${courseLabels[formData.courseType]}`;
    
    window.open(`https://wa.me/218915166502?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-32 px-4 md:px-8 relative bg-[#030305] overflow-x-hidden">
       
       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            
            {/* LEFT: INFO & VISUALS */}
            <div className="lg:col-span-7 space-y-12">
                <div className="text-right">
                    <div className="inline-flex items-center gap-2 px-4 py-1 border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-xs font-mono mb-6 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
                        ADMISSIONS OPEN 2024
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 font-sans drop-shadow-lg">
                        انضم إلى نخبة <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-cyan to-brand-purple">الهندسة الرقمية</span>
                    </h1>
                    <p className="text-gray-400 font-mono text-sm tracking-wide">JOIN THE DIGITAL ENGINEERING ELITE</p>
                </div>

                {/* FEATURED: AI LIFE COURSE */}
                <div className="relative group cyber-card p-0.5 rounded-2xl bg-gradient-to-r from-brand-gold/50 to-orange-500/50">
                    <div className="absolute top-0 right-0 w-full h-full bg-brand-gold/10 blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="bg-[#08080A] p-8 rounded-2xl relative overflow-hidden">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-brand-gold text-black rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.4)]">
                                    <Sparkles size={28} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">دورة الذكاء الاصطناعي المصغرة</h3>
                                    <p className="text-brand-gold text-xs font-mono font-bold">AI FOR DAILY LIFE</p>
                                </div>
                            </div>
                            <span className="bg-brand-gold/20 text-brand-gold text-xs px-3 py-1 rounded-full border border-brand-gold/30">جديد / NEW</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            تعلم كيف تستخدم أدوات الذكاء الاصطناعي (مثل ChatGPT, Midjourney) لتسهيل حياتك اليومية، زيادة إنتاجيتك، وحل المشاكل المعقدة في ثوانٍ.
                        </p>
                        <div className="flex gap-2 text-[10px] font-mono text-gray-500 uppercase">
                            <span className="bg-white/5 px-2 py-1 rounded">Prompt Engineering</span>
                            <span className="bg-white/5 px-2 py-1 rounded">Productivity</span>
                        </div>
                    </div>
                </div>

                {/* CS50 & WEB Cards Mini Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#0A0A0F] border border-white/10 p-6 rounded-xl hover:border-red-500/50 transition-colors group">
                        <BookOpen className="text-red-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="text-white font-bold text-lg">علوم الحاسب</h3>
                        <p className="text-red-500/60 text-xs font-mono mb-2">CS50 FOUNDATION</p>
                        <p className="text-gray-500 text-xs">تأسيس قوي من جامعة هارفارد.</p>
                    </div>
                    <div className="bg-[#0A0A0F] border border-white/10 p-6 rounded-xl hover:border-brand-cyan/50 transition-colors group">
                        <Terminal className="text-brand-cyan mb-4 group-hover:scale-110 transition-transform" size={32} />
                        <h3 className="text-white font-bold text-lg">برمجة الويب</h3>
                        <p className="text-brand-cyan/60 text-xs font-mono mb-2">FULL STACK DEV</p>
                        <p className="text-gray-500 text-xs">بناء مواقع متكاملة وحديثة.</p>
                    </div>
                </div>
            </div>

            {/* RIGHT: REGISTRATION FORM */}
            <div className="lg:col-span-5 relative">
                <div className="sticky top-24">
                    <div className="bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 p-1 rounded-2xl shadow-2xl">
                        
                        <div className="h-1.5 w-full bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-gold rounded-t-xl mb-6"></div>

                        <form onSubmit={handleSubmit} className="px-6 pb-8 space-y-6">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-white flex items-center justify-center gap-2 font-eng tracking-wider">
                                    SECURE ACCESS
                                    <Shield size={20} className="text-green-500" />
                                </h3>
                                <p className="text-xs text-gray-500 font-mono mt-1">بوابة التسجيل الآمنة</p>
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <label className="text-[10px] font-mono text-brand-cyan font-bold uppercase">Cadet Name</label>
                                    <label className="text-[10px] font-sans text-gray-400">الاسم الثلاثي</label>
                                </div>
                                <div className="relative group">
                                    <User className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 group-focus-within:text-brand-cyan transition-colors" size={18} />
                                    <input 
                                        type="text" 
                                        required
                                        className="w-full bg-black/50 border border-white/10 p-3 pr-10 rounded-lg text-right text-white focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all font-sans text-sm"
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <div className="flex justify-between">
                                    <label className="text-[10px] font-mono text-brand-cyan font-bold uppercase">Phone Number</label>
                                    <label className="text-[10px] font-sans text-gray-400">رقم الهاتف</label>
                                </div>
                                <div className="relative group">
                                    <Smartphone className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 group-focus-within:text-brand-cyan transition-colors" size={18} />
                                    <input 
                                        type="tel" 
                                        required
                                        placeholder="09X XXX XXXX"
                                        className="w-full bg-black/50 border border-white/10 p-3 pr-10 rounded-lg text-right text-white dir-rtl focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan outline-none transition-all font-sans text-sm"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                    />
                                </div>
                            </div>

                            <div className="space-y-3 pt-2">
                                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                    <label className="text-[10px] font-mono text-brand-cyan font-bold uppercase">Select Module</label>
                                    <label className="text-[10px] font-sans text-gray-400">اختر المسار التدريبي</label>
                                </div>
                                <div className="grid grid-cols-1 gap-2 max-h-[300px] overflow-y-auto pr-1 custom-scrollbar">
                                    {[
                                        { id: 'ai_life', label: 'AI LIFE HACKS', sub: 'الذكاء الاصطناعي في حياتك اليومية (جديد)', icon: <Sparkles size={14} className="text-black" />, style: 'border-brand-gold bg-brand-gold text-black' },
                                        { id: 'full', label: 'FULL STACK AGENT', sub: 'الدورة الشاملة (الأقوى)', icon: <Zap size={14} />, style: 'border-brand-cyan bg-brand-cyan/10 text-brand-cyan' },
                                        { id: 'vip', label: 'VIP MENTORSHIP', sub: 'تدريب خاص ومكثف', icon: <User size={14} />, style: 'border-brand-purple bg-brand-purple/10 text-brand-purple' },
                                        { id: 'practical', label: 'WEB & AI OPS', sub: 'تخصص الويب والذكاء الاصطناعي', icon: <Terminal size={14} />, style: 'border-blue-500 bg-blue-500/10 text-blue-400' },
                                        { id: 'basics', label: 'CS50 INITIATION', sub: 'أساسيات علوم الحاسب', icon: <BookOpen size={14} />, style: 'border-red-500 bg-red-500/10 text-red-400' },
                                    ].map((option) => (
                                        <label 
                                            key={option.id}
                                            className={`relative flex items-center p-3 border rounded-lg cursor-pointer transition-all hover:translate-x-1 ${formData.courseType === option.id ? option.style : 'border-white/10 bg-black/40 text-gray-400 hover:border-white/30'}`}
                                        >
                                            <input 
                                                type="radio" 
                                                name="courseType"
                                                value={option.id}
                                                checked={formData.courseType === option.id}
                                                onChange={(e) => setFormData({...formData, courseType: e.target.value})}
                                                className="hidden"
                                            />
                                            <div className="ml-3">
                                                 {option.icon}
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-bold text-sm font-eng tracking-wider">{option.label}</div>
                                                <div className="text-[10px] font-sans font-medium opacity-80">{option.sub}</div>
                                            </div>
                                            {formData.courseType === option.id && <div className="w-2 h-2 rounded-full bg-current animate-ping"></div>}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <button 
                                type="submit"
                                className="w-full py-4 mt-2 bg-gradient-to-r from-brand-cyan to-blue-600 text-white rounded-lg font-black text-lg hover:shadow-[0_0_30px_rgba(0,243,255,0.4)] transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
                            >
                                <span className="relative z-10 font-eng tracking-widest">INITIATE</span>
                                <span className="relative z-10 text-sm opacity-80 font-sans">/ ابدأ التسجيل</span>
                                <Send size={18} className="relative z-10 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

       </div>
    </div>
  );
};

export default Register;