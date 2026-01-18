import React from 'react';
import { Phone, MessageCircle, Facebook, Clock, Share2, Mail, Brain, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
    const [copied, setCopied] = React.useState(false);
    const email = "elseadyosef56@gmail.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

  return (
    <div className="min-h-screen pt-24 pb-36 px-4 flex items-center justify-center relative overflow-hidden bg-[#020202]">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px]"></div>

      <div className="max-w-6xl w-full relative z-10">
        
        <div className="text-center mb-16 relative">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                مركز <span className="text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-purple-500">التواصل</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto"></div>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
                اختر الطريقة المناسبة لبدء مشروعك القادم أو طلب استشارة تقنية متقدمة
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Column 1: Direct Contact */}
            <div className="lg:col-span-1 space-y-6">
                 {/* Consultation Card - NEW */}
                 <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-purple-500 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-purple-500/5 group-hover:bg-purple-500/10 transition-colors"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-purple-500/20 rounded-lg text-purple-400">
                                <Brain size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-white">استشارة تقنية</h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">هل تواجه تحدياً تقنياً؟ احصل على تحليل شامل وحلول ذكية لمشروعك.</p>
                        <a 
                            href="https://wa.me/218915166502?text=مرحباً،%20أرغب%20في%20حجز%20موعد%20لاستشارة%20تقنية"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-3 rounded-lg border border-purple-500/50 text-purple-400 font-bold hover:bg-purple-500 hover:text-white transition-all shadow-[0_0_15px_rgba(168,85,247,0.1)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                        >
                            طلب استشارة
                        </a>
                    </div>
                </div>

                {/* Email Card - NEW */}
                <div className="glass-panel p-6 rounded-2xl border-l-4 border-l-cyan-500 relative group">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                             <Mail className="text-cyan-400" size={24} />
                             <span className="font-bold text-white">البريد الإلكتروني</span>
                        </div>
                        <button onClick={handleCopyEmail} className="text-gray-500 hover:text-white transition-colors">
                            {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                        </button>
                    </div>
                    <div className="bg-black/50 p-3 rounded-lg border border-white/5 mt-2 overflow-hidden">
                        <p className="text-cyan-500 font-mono text-sm break-all">{email}</p>
                    </div>
                     <a href={`mailto:${email}`} className="text-xs text-gray-500 mt-2 block hover:text-cyan-400 text-left">
                        إرسال رسالة مباشرة &larr;
                    </a>
                </div>
            </div>

            {/* Column 2: Main Contact Actions */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Phone */}
                <a href="tel:0915166502" className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center gap-4 group hover:bg-white/5 transition-all hover:-translate-y-1">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all">
                        <Phone size={32} className="text-cyan-400" />
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-black text-white tracking-widest" dir="ltr">091 516 6502</h3>
                        <span className="text-xs text-gray-500 uppercase tracking-widest mt-1 block">خط الاتصال المباشر</span>
                    </div>
                </a>

                {/* Whatsapp */}
                <a href="https://wa.me/218915166502" target="_blank" rel="noopener noreferrer" className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center gap-4 group hover:bg-white/5 transition-all hover:-translate-y-1">
                     <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center border border-green-500/30 group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)] transition-all">
                        <MessageCircle size={32} className="text-green-400" />
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-black text-white">WhatsApp</h3>
                        <span className="text-xs text-gray-500 uppercase tracking-widest mt-1 block">دردشة فورية</span>
                    </div>
                </a>

                {/* Socials */}
                <div className="md:col-span-2 glass-panel p-6 rounded-3xl flex flex-wrap justify-around items-center gap-4">
                     <a href="https://www.facebook.com/Yoseftst" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#1877F2]/10 border border-[#1877F2]/20 hover:bg-[#1877F2]/20 transition-all group">
                        <Facebook className="text-[#1877F2] group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-gray-300">Yoseftst</span>
                     </a>
                     
                     <a href="https://www.tiktok.com/@yosefelsead" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[#E6005C]/10 border border-[#E6005C]/20 hover:bg-[#E6005C]/20 transition-all group">
                        <Share2 className="text-[#E6005C] group-hover:scale-110 transition-transform" />
                        <span className="font-bold text-gray-300">Yosef Elsead</span>
                     </a>
                </div>

                {/* Hours */}
                <div className="md:col-span-2 glass-panel p-6 rounded-3xl bg-gradient-to-r from-gray-900 to-black flex items-center justify-between border-t border-white/10">
                     <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/5 rounded-full"><Clock className="text-gray-400" /></div>
                        <div>
                            <p className="text-sm font-bold text-white">ساعات العمل</p>
                            <p className="text-xs text-gray-500">12:00 PM - 12:00 AM</p>
                        </div>
                     </div>
                     <span className="px-4 py-1 rounded-full bg-red-900/20 text-red-500 text-xs font-bold border border-red-900/30">
                        مغلق الجمعة
                     </span>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;