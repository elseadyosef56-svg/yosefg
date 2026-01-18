import React, { useState, useRef } from 'react';
import { Database, Network, Cpu, Lock, Server, Code2, Terminal, ZoomIn, ZoomOut, Move } from 'lucide-react';

const InteractiveTechTree = () => {
    // State for pan and zoom
    const [transform, setTransform] = useState({ x: 0, y: 0, scale: 0.8 });
    const [isDragging, setIsDragging] = useState(false);
    const lastMousePosition = useRef({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    // Node Data
    const nodes = [
        { id: 'core', x: 400, y: 300, label: 'YOSEF TST CORE', type: 'root' },
        
        { id: 'ai', x: 400, y: 150, label: 'Artificial Intelligence', type: 'category' },
        { id: 'web', x: 150, y: 450, label: 'Web Engineering', type: 'category' },
        { id: 'infra', x: 650, y: 450, label: 'Infrastructure', type: 'category' },

        { id: 'llm', x: 300, y: 50, label: 'LLMs & Agents', type: 'leaf' },
        { id: 'cv', x: 500, y: 50, label: 'Computer Vision', type: 'leaf' },
        { id: 'ml', x: 400, y: 0, label: 'Machine Learning', type: 'leaf' },

        { id: 'react', x: 50, y: 400, label: 'React / Next.js', type: 'leaf' },
        { id: 'node', x: 100, y: 550, label: 'Node.js', type: 'leaf' },
        { id: 'ui', x: 200, y: 380, label: 'UI/UX System', type: 'leaf' },

        { id: 'cloud', x: 750, y: 400, label: 'Cloud Architecture', type: 'leaf' },
        { id: 'sec', x: 700, y: 550, label: 'Cyber Security', type: 'leaf' },
        { id: 'db', x: 600, y: 380, label: 'Distributed DB', type: 'leaf' },
    ];

    const links = [
        { source: 'core', target: 'ai' },
        { source: 'core', target: 'web' },
        { source: 'core', target: 'infra' },
        { source: 'ai', target: 'llm' },
        { source: 'ai', target: 'cv' },
        { source: 'ai', target: 'ml' },
        { source: 'web', target: 'react' },
        { source: 'web', target: 'node' },
        { source: 'web', target: 'ui' },
        { source: 'infra', target: 'cloud' },
        { source: 'infra', target: 'sec' },
        { source: 'infra', target: 'db' },
    ];

    const handleWheel = (e: React.WheelEvent) => {
        // e.preventDefault(); // React synthetic events might not support this in all cases, better to use native if strict
        const scaleAmount = -e.deltaY * 0.001;
        const newScale = Math.min(Math.max(0.4, transform.scale + scaleAmount), 3);
        setTransform(prev => ({ ...prev, scale: newScale }));
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        lastMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        const deltaX = e.clientX - lastMousePosition.current.x;
        const deltaY = e.clientY - lastMousePosition.current.y;
        lastMousePosition.current = { x: e.clientX, y: e.clientY };
        setTransform(prev => ({ ...prev, x: prev.x + deltaX, y: prev.y + deltaY }));
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Zoom controls
    const zoomIn = () => setTransform(prev => ({ ...prev, scale: Math.min(prev.scale + 0.2, 3) }));
    const zoomOut = () => setTransform(prev => ({ ...prev, scale: Math.max(prev.scale - 0.2, 0.4) }));
    const reset = () => setTransform({ x: 0, y: 0, scale: 0.8 });

    return (
        <div className="relative w-full h-[600px] border border-cyan-500/30 rounded-2xl overflow-hidden bg-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.5)] group select-none">
             {/* Grid Background */}
             <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
             
             {/* Controls */}
             <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2">
                <button onClick={zoomIn} className="p-2 bg-gray-900/80 text-cyan-400 rounded hover:bg-gray-800 border border-gray-700 backdrop-blur"><ZoomIn size={20} /></button>
                <button onClick={zoomOut} className="p-2 bg-gray-900/80 text-cyan-400 rounded hover:bg-gray-800 border border-gray-700 backdrop-blur"><ZoomOut size={20} /></button>
                <button onClick={reset} className="p-2 bg-gray-900/80 text-cyan-400 rounded hover:bg-gray-800 border border-gray-700 backdrop-blur"><Move size={20} /></button>
             </div>
             
             <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur px-3 py-1 rounded text-xs text-cyan-500 font-mono border border-cyan-500/20 pointer-events-none">
                INTERACTIVE SYSTEM MAP // DRAG & ZOOM
             </div>

             <div 
                ref={containerRef}
                className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onWheel={handleWheel}
             >
                <svg width="100%" height="100%" viewBox="0 0 800 600" className="overflow-visible">
                    <defs>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>
                    <g transform={`translate(${transform.x},${transform.y}) scale(${transform.scale})`} style={{ transformOrigin: '400px 300px', transition: isDragging ? 'none' : 'transform 0.1s ease-out' }}>
                         {/* Connecting Lines */}
                         {links.map((link, i) => {
                             const start = nodes.find(n => n.id === link.source);
                             const end = nodes.find(n => n.id === link.target);
                             if (!start || !end) return null;
                             return (
                                 <line 
                                    key={i} 
                                    x1={start.x} y1={start.y} 
                                    x2={end.x} y2={end.y} 
                                    stroke="#06b6d4" 
                                    strokeWidth="1" 
                                    opacity="0.3"
                                    strokeDasharray="5,5"
                                 />
                             );
                         })}

                         {/* Nodes */}
                         {nodes.map((node) => (
                             <g key={node.id} transform={`translate(${node.x},${node.y})`}>
                                 {node.type === 'root' ? (
                                     <g className="transition-all duration-300 hover:scale-110 origin-center cursor-pointer group">
                                         <circle r="50" fill="#000" stroke="#8b5cf6" strokeWidth="2" filter="url(#glow)" className="animate-pulse-slow group-hover:stroke-purple-400 group-hover:stroke-[3px] transition-all" />
                                         <circle r="40" fill="none" stroke="#06b6d4" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow" />
                                         <circle r="60" fill="none" stroke="#8b5cf6" strokeWidth="1" opacity="0.2" className="group-hover:opacity-60 group-hover:stroke-purple-300 transition-all" />
                                     </g>
                                 ) : node.type === 'category' ? (
                                    <g className="transition-all duration-300 hover:scale-105 origin-center cursor-pointer group">
                                        <rect x="-80" y="-25" width="160" height="50" rx="4" fill="#0f172a" stroke="#06b6d4" strokeWidth="1" opacity="0.9" filter="url(#glow)" className="group-hover:stroke-cyan-300 group-hover:stroke-[2px] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] transition-all" />
                                        <path d="M-80 -15 L-80 -25 L-70 -25" stroke="white" strokeWidth="1" fill="none" />
                                        <path d="M80 15 L80 25 L70 25" stroke="white" strokeWidth="1" fill="none" />
                                    </g>
                                 ) : (
                                    <g className="transition-all duration-300 hover:scale-150 origin-center cursor-pointer group">
                                        <circle r="8" fill="#10b981" filter="url(#glow)" className="group-hover:fill-emerald-400 transition-colors" />
                                        <circle r="14" fill="none" stroke="#10b981" strokeWidth="1" opacity="0.3" className="group-hover:stroke-emerald-300 group-hover:opacity-100 group-hover:stroke-[2px] transition-all" />
                                    </g>
                                 )}

                                 <text 
                                    y={node.type === 'root' ? 5 : node.type === 'category' ? 5 : 30} 
                                    textAnchor="middle" 
                                    fill="white" 
                                    fontSize={node.type === 'root' ? 14 : node.type === 'category' ? 14 : 12} 
                                    fontWeight="bold"
                                    className={`${node.type === 'leaf' ? 'font-mono fill-cyan-400' : 'font-sans tracking-wider'} pointer-events-none`}
                                    style={{ textShadow: '0 0 10px rgba(0,0,0,0.8)' }}
                                 >
                                    {node.label}
                                 </text>
                             </g>
                         ))}
                    </g>
                </svg>
             </div>
        </div>
    );
};

const TechHub: React.FC = () => {
  const topics = [
    {
        title: 'Deep Neural Networks',
        arTitle: 'الشبكات العصبية العميقة',
        icon: <Network className="text-white" />,
        bg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
        content: 'تحاكي هذه الشبكات طريقة عمل الدماغ البشري، مما يسمح للأنظمة بالتعلم من البيانات غير المهيكلة.',
        stats: 'Accuracy: 99.8%',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop'
    },
    {
        title: 'LLMs & Generative AI',
        arTitle: 'الذكاء الاصطناعي التوليدي',
        icon: <Cpu className="text-white" />,
        bg: 'bg-gradient-to-br from-purple-500 to-pink-600',
        content: 'بناء وكلاء ذكاء اصطناعي (AI Agents) قادرين على فهم السياق واتخاذ قرارات معقدة.',
        stats: 'Tokens: 128K',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600&auto=format&fit=crop'
    },
    {
        title: 'Cybersecurity Ops',
        arTitle: 'العمليات الأمنية السيبرانية',
        icon: <Lock className="text-white" />,
        bg: 'bg-gradient-to-br from-red-500 to-rose-600',
        content: 'تشفير End-to-End وبروتوكولات حماية متقدمة ضد الهجمات السيبرانية الحديثة.',
        stats: 'Shield: Active',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop'
    },
     {
        title: 'Cloud Infrastructure',
        arTitle: 'البنية التحتية السحابية',
        icon: <Server className="text-white" />,
        bg: 'bg-gradient-to-br from-cyan-500 to-teal-600',
        content: 'تصميم أنظمة موزعة (Distributed Systems) عالية التوافر وقابلة للتوسع اللانهائي.',
        stats: 'Uptime: 99.99%',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-32 bg-cyan-500/10 blur-[100px] pointer-events-none"></div>
        <h2 className="text-5xl md:text-8xl font-black mb-2 tracking-tighter uppercase drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]">
          TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 text-shadow-glow">HUB</span>
        </h2>
        <p className="text-xl text-gray-400 font-sans font-bold tracking-wide">المركز التقني والمعرفي</p>
        
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/60 backdrop-blur text-emerald-400 text-sm font-mono shadow-lg mt-6">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            SECURE_DATA_ACCESS_GRANTED
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        {topics.map((topic, index) => (
            <div key={index} className="group relative glass-panel bg-[#0A0A0E] rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.1)]">
                {/* Image Section */}
                <div className="h-64 overflow-hidden relative">
                    <img 
                        src={topic.image} 
                        alt={topic.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1 opacity-80" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-[#0A0A0E]/50 to-transparent"></div>
                    
                    {/* Floating Icon with Strong Background */}
                    <div className={`absolute bottom-6 right-6 p-4 ${topic.bg} rounded-xl shadow-lg border border-white/20 group-hover:scale-110 transition-transform duration-300 z-10`}>
                        {React.cloneElement(topic.icon as React.ReactElement<any>, { size: 32, strokeWidth: 2.5 })}
                    </div>
                    
                    {/* Scanner Effect */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/80 shadow-[0_0_15px_#06b6d4] opacity-0 group-hover:opacity-100 animate-scan"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-8 relative">
                    <div className="flex justify-between items-start mb-3">
                         <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors font-mono tracking-tight">
                                {topic.title}
                            </h3>
                            <h4 className="text-base text-gray-400 font-bold mt-1 font-sans">{topic.arTitle}</h4>
                         </div>
                    </div>
                    
                    <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent my-5 group-hover:from-cyan-500/50 transition-all"></div>

                    <p className="text-gray-200 text-sm leading-relaxed mb-6 font-medium">
                        {topic.content}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs font-mono">
                        <div className="flex items-center gap-2 text-gray-500">
                             <Terminal size={14} />
                             <span>SYS.ROOT.ACCESS</span>
                        </div>
                        <div className="flex items-center gap-2 text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded border border-cyan-500/20">
                             <span>{topic.stats}</span>
                             <Code2 size={14} />
                        </div>
                    </div>
                </div>
            </div>
        ))}
      </div>
      
      {/* Interactive Tech Tree */}
      <div className="mt-12 p-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-cyan-500/30 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="bg-[#050505] rounded-[22px] p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 pointer-events-none"></div>
            <h3 className="text-3xl font-bold mb-10 text-center text-white flex flex-col items-center justify-center gap-2">
                <div className="p-3 bg-purple-600 rounded-xl shadow-lg mb-2">
                    <Database className="text-white" size={28} />
                </div>
                <span>خارطة النظام المتكامل</span>
                <span className="text-sm text-purple-400 font-mono tracking-widest">INTERACTIVE SYSTEM MAP</span>
            </h3>
            <InteractiveTechTree />
        </div>
      </div>
    </div>
  );
};

export default TechHub;