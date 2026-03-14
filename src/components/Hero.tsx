import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Settings, Code2, Layers, Cpu, Eye, DollarSign } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative h-[100dvh] flex flex-col justify-start items-center overflow-hidden bg-slate-50 px-4 pt-28 pb-16"
        >
            {/* Background Radial Glow - Adjusted for light theme */}
            <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
                <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-accent/10 rounded-full blur-[100px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-between flex-1 w-full max-w-6xl mx-auto text-center">

                {/* TOP GROUP: subtitle + H1 tight together */}
                <div className="flex flex-col items-center gap-3">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <span className="text-accent font-bold tracking-[0.2em] uppercase text-base md:text-xl">
                            Agencia de Diseño y Desarrollo Web
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80, damping: 20 }}
                        className="w-full"
                    >
                        <h1 className="text-[12vw] sm:text-[10vw] md:text-[90px] lg:text-[110px] font-black tracking-tighter leading-[0.9] uppercase text-slate-900 max-w-5xl mx-auto">
                            LA REVOLUCIÓN<br />
                            DE LA <span className="text-accent">IA.</span>
                        </h1>
                    </motion.div>
                </div>

                {/* BOTTOM GROUP: 3 cards + CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col items-center w-full gap-6"
                >
                    <div className="flex flex-row justify-center items-start gap-10 md:gap-16 w-full">
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="flex flex-col items-center gap-2 w-28 md:w-32"
                        >
                            <div className="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center">
                                <ShieldCheck className="text-emerald-600" size={20} strokeWidth={2} />
                            </div>
                            <span className="text-slate-800 text-sm font-bold tracking-wide leading-tight text-center">Más Seguridad</span>
                            <span className="text-slate-400 text-xs font-medium text-center">Certificación SSL</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="flex flex-col items-center gap-2 w-28 md:w-32"
                        >
                            <div className="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center">
                                <TrendingUp className="text-emerald-600" size={20} strokeWidth={2} />
                            </div>
                            <span className="text-slate-800 text-sm font-bold tracking-wide leading-tight text-center">Más Calidad Visual</span>
                            <span className="text-slate-400 text-xs font-medium text-center">Animaciones y UX</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="flex flex-col items-center gap-2 w-28 md:w-32"
                        >
                            <div className="w-11 h-11 rounded-2xl bg-emerald-50 flex items-center justify-center">
                                <Settings className="text-emerald-600" size={20} strokeWidth={2} />
                            </div>
                            <span className="text-slate-800 text-sm font-bold tracking-wide leading-tight text-center">Más Control</span>
                            <span className="text-slate-400 text-xs font-medium text-center">Sitios autogestionables</span>
                        </motion.div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center w-full px-6">
                        <a href="#cases" className="gold-cta flex items-center justify-center gap-2 text-secondary px-8 py-5 font-bold tracking-wider uppercase text-xs sm:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-150 w-full sm:w-auto">
                            <Eye size={20} />
                            ¿Cómo podría verse mi página web?
                        </a>
                        <a href="#services" className="border border-slate-300 flex items-center justify-center gap-2 bg-white/50 text-slate-800 px-8 py-5 font-bold tracking-wider uppercase text-xs sm:text-sm rounded-2xl hover:bg-slate-100 hover:scale-[1.02] active:scale-95 transition-all duration-150 w-full sm:w-auto">
                            <DollarSign size={20} />
                            ¿Cuánto sale una página web?
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Floating Elements (Startup Vibe) */}
            <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-12 -left-12 md:-left-24 w-24 h-24 bg-accent/10 rounded-full blur-2xl pointer-events-none"
            />
            <motion.div
                animate={{ y: [15, -15, 15], rotate: [0, -5, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-12 -right-12 md:-right-24 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none"
            />

            {/* Abstract Tech Decorative Elements */}
            <motion.div
                animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[12%] right-[5%] md:right-[15%] text-slate-300 opacity-80 pointer-events-none select-none hidden sm:block"
            >
                <Code2 size={160} strokeWidth={0.5} />
            </motion.div>

            <motion.div
                animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[10%] left-[2%] md:left-[8%] text-slate-300 opacity-80 pointer-events-none select-none hidden md:block"
            >
                <Layers size={140} strokeWidth={0.5} />
            </motion.div>

            <motion.div
                animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-[25%] left-[5%] md:left-[10%] text-slate-300 opacity-80 pointer-events-none select-none hidden lg:block"
            >
                <Cpu size={110} strokeWidth={0.5} />
            </motion.div>
        </section>
    );
};

export default Hero;
