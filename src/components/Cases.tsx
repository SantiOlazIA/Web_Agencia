import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLIENT, type Case } from '../lib/client.config';

// Cases / Portfolio — Drag-to-scroll horizontal row with Mockup Modal
const Cases = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [selectedCase, setSelectedCase] = useState<Case | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>('Todos');

    const categories = ['Todos', ...Array.from(new Set(CLIENT.cases.map((c) => c.category)))];
    const filteredCases = activeFilter === 'Todos' ? CLIENT.cases : CLIENT.cases.filter((c) => c.category === activeFilter);

    return (
        <section id="cases" className="py-16 md:py-20 px-6 md:px-16 lg:px-24 bg-secondary text-primary relative">
            <div className="max-w-7xl mx-auto">

                {/* Gold divider at top */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ originX: 0.5 }}
                    className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-12"
                />

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 relative"
                >
                    {/* Abstract Glow behind header */}
                    <motion.div
                        animate={{ y: [-15, 15, -15], scale: [1, 1.05, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-[60px] pointer-events-none"
                    />

                    <div className="relative z-10 w-full md:w-auto">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] max-w-2xl text-slate-900 mt-2">
                            CASOS DE <span className="text-accent">ÉXITO</span> POR <span className="text-accent underline decoration-4 underline-offset-8">SECTOR</span>
                        </h2>
                    </div>
                </motion.div>

                {/* Filters */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-10 relative z-10">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${activeFilter === cat
                                ? 'bg-accent text-slate-950 border-accent shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                                : 'bg-white/5 text-slate-400 border-white/10 hover:border-accent/50 hover:text-white backdrop-blur-md'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Drag-to-scroll Cases Row */}
                <div ref={containerRef} className="relative w-full overflow-hidden py-4 sm:py-10 mt-2 sm:mt-8 mb-10 cursor-grab active:cursor-grabbing">

                    {/* Gradient masks */}
                    <div className="absolute top-0 left-0 w-8 sm:w-16 md:w-32 h-full bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-8 sm:w-16 md:w-32 h-full bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

                    <motion.div
                        drag="x"
                        dragConstraints={containerRef}
                        dragElastic={0.05}
                        dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }}
                        className="flex gap-4 sm:gap-6 md:gap-10 w-max"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredCases.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    onClick={() => setSelectedCase(item)}
                                    className="relative flex flex-col justify-end w-[280px] sm:w-[350px] md:w-[420px] aspect-square rounded-[2rem] overflow-hidden group/card shadow-xl hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-all duration-500 border border-white/10 cursor-pointer bg-slate-900 shrink-0"
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0 w-full h-full">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover object-center opacity-50 group-hover/card:opacity-80 group-hover/card:scale-105 transition-all duration-700 ease-in-out mix-blend-luminosity group-hover/card:mix-blend-normal"
                                        />
                                        {/* Heavy Gradient Overlay for text readability (Ziux Style) */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent opacity-100 transition-opacity duration-500" />
                                    </div>

                                    {/* Content overlaid on image */}
                                    <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-4 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-md flex items-center gap-2 w-max">
                                                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse shadow-[0_0_8px_theme(colors.accent.DEFAULT)]"></span>
                                                <span className="text-accent text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                                                    Ver Demo HD
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="min-h-[72px] sm:min-h-[80px]">
                                                <h3 className="text-3xl sm:text-4xl font-black tracking-tighter uppercase text-white mb-2 leading-[1.1] drop-shadow-lg">
                                                    {item.name}
                                                </h3>
                                            </div>
                                            <p className="text-slate-400 text-xs sm:text-sm font-semibold tracking-widest uppercase opacity-70 group-hover/card:opacity-100 transition-opacity duration-500 mb-4 h-5">
                                                Demo de {item.category}
                                            </p>

                                            <a
                                                href={item.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="w-max px-5 py-2.5 bg-white/10 hover:bg-accent text-white hover:text-slate-950 font-bold uppercase tracking-widest text-[10px] sm:text-xs rounded-full backdrop-blur-md border border-white/20 hover:border-accent transition-all duration-300 flex items-center gap-2 shadow-lg"
                                            >
                                                Visitar Web
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>

            </div>

            {/* Interactive Mockup Modal */}
            <AnimatePresence>
                {selectedCase && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-md overflow-y-auto"
                        onClick={() => setSelectedCase(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 30 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 30 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-6xl my-auto bg-slate-900/80 border border-slate-800 rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center p-6 md:p-8"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedCase(null)}
                                className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white rounded-full transition-colors z-50 backdrop-blur-md"
                                aria-label="Cerrar modal"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="flex flex-col md:flex-row justify-start items-center md:items-end w-full mb-2 md:mb-4 mt-2 md:mt-0 gap-4 md:gap-6 pr-8 md:pr-16">
                                <div className="text-center md:text-left flex-1 min-w-0">
                                    <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase">{selectedCase.category}</span>
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mt-0 text-white leading-tight break-words">{selectedCase.name}</h3>
                                </div>
                                <motion.a
                                    href={selectedCase.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="shrink-0 px-6 py-3 bg-accent text-slate-950 font-black uppercase tracking-[0.1em] rounded-full hover:bg-white shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all flex items-center gap-2 whitespace-nowrap mb-1"
                                >
                                    Visitar Web
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </motion.a>
                            </div>

                            {/* CSS Device Mockups */}
                            <div className="flex flex-col md:flex-row items-center justify-start w-full max-w-5xl mt-4 relative md:pr-16">

                                {/* Laptop Mockup */}
                                <div className="relative w-full md:w-[85%] aspect-video bg-slate-800 rounded-t-xl md:rounded-t-2xl border-[6px] md:border-[12px] border-b-0 border-slate-700 shadow-2xl overflow-hidden flex flex-col items-center justify-start z-10">
                                    {/* Screen content */}
                                    <div className="w-full h-full bg-slate-950 relative overflow-hidden group">
                                        <img
                                            src={selectedCase.image}
                                            alt={`Vista en computadora de ${selectedCase.name}`}
                                            className="w-full h-full object-cover object-center transition-transform duration-[3s] ease-in-out group-hover:scale-[1.03]"
                                        />
                                    </div>
                                    {/* Laptop Base */}
                                    <div className="absolute -bottom-1 w-[110%] h-[6%] bg-slate-600 rounded-b-xl shadow-inner flex justify-center z-10">
                                        {/* Trackpad indentation */}
                                        <div className="w-1/4 h-1/2 bg-slate-500 rounded-b-md mt-0.5 opacity-50"></div>
                                    </div>
                                </div>

                                {/* Mobile Mockup (Flows normally on mobile, absolute floating on desktop) */}
                                <div className="relative md:absolute md:bottom-[-20px] md:right-0 w-[60%] md:w-[26%] aspect-[390/844] bg-slate-900 rounded-[2.5rem] border-[8px] md:border-[12px] border-slate-800 shadow-2xl overflow-hidden flex items-start justify-center z-20 mt-[-40px] md:mt-0 ring-1 ring-white/10 mx-auto md:mx-0">
                                    {/* iOS Dynamic Island / Notch */}
                                    <div className="absolute top-2 w-1/3 h-[4%] bg-black rounded-full z-30 flex items-center justify-end px-2 gap-1.5">
                                        <div className="w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
                                    </div>
                                    {/* Screen content */}
                                    <div className="w-full h-full relative overflow-hidden group bg-slate-950">
                                        <img
                                            // @ts-ignore
                                            src={selectedCase.image_mobile || selectedCase.image}
                                            alt={`Vista en celular de ${selectedCase.name}`}
                                            className="w-full h-full object-cover object-center transition-transform duration-[3s] ease-in-out group-hover:scale-[1.03]"
                                        />
                                    </div>
                                </div>

                            </div>


                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Cases;
