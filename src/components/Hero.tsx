import { motion } from 'framer-motion';
import { Code2, Layers, Cpu, Eye, Flame } from 'lucide-react';
import { StarAnim, BrickWallAnim, ConveyorAnim } from './HeroAnimations';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[100dvh] flex flex-col justify-start items-center overflow-hidden bg-slate-50 px-4 pt-32 pb-16"
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
                            TU NEGOCIO,<br />
                            <span className="text-accent">ONLINE.</span>
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
                            <BrickWallAnim />
                            <span className="text-slate-800 text-sm font-bold tracking-wide leading-tight text-center">Más Seguridad</span>
                            <span className="text-slate-400 text-xs font-medium text-center">Certificación SSL</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="flex flex-col items-center gap-2 w-28 md:w-32"
                        >
                            <StarAnim />
                            <span className="text-slate-800 text-sm font-bold tracking-wide leading-tight text-center">Más Calidad Visual</span>
                            <span className="text-slate-400 text-xs font-medium text-center">Animaciones y UX</span>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="flex flex-col items-center gap-2 w-28 md:w-32"
                        >
                            <ConveyorAnim />
                            <span className="text-slate-800 text-sm font-bold tracking-wide leading-tight text-center">Más Control</span>
                            <span className="text-slate-400 text-xs font-medium text-center">Sitios autogestionables</span>
                        </motion.div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center w-full px-6">
                        <div className="relative w-full sm:w-auto mt-4 sm:mt-0">
                            {/* Aggressive Launch Offer Badge */}
                            <motion.div
                                animate={{ y: [-3, 3, -3], rotate: [-2, 2, -2], scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 left-0 sm:-left-4 md:-left-6 bg-red-600 text-white text-[9px] sm:text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)] border-2 border-slate-50 z-20 origin-left"
                            >
                                🔥 SUPER OFERTA LANZAMIENTO
                            </motion.div>
                            <motion.a
                                href="#services"
                                animate={{
                                    boxShadow: [
                                        '0 4px 20px rgba(234,179,8,0.45)',
                                        '0 4px 38px rgba(251,146,60,0.65)',
                                        '0 4px 28px rgba(239,68,68,0.5)',
                                        '0 4px 38px rgba(251,146,60,0.65)',
                                        '0 4px 20px rgba(234,179,8,0.45)',
                                    ]
                                }}
                                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                                className="gold-cta relative z-10 flex items-center justify-center gap-2 text-secondary px-8 py-5 font-black tracking-wider uppercase text-xs sm:text-[13px] rounded-2xl hover:scale-105 active:scale-95 transition-transform duration-150 w-full sm:w-auto"
                            >
                                <Flame size={20} className="text-orange-500 drop-shadow-[0_0_4px_rgba(251,146,60,0.8)]" />
                                Conseguí tu web desde $150.000 ó 3 cuotas sin interés
                            </motion.a>
                        </div>
                        <a href="#cases" className="border border-slate-300 flex items-center justify-center gap-2 bg-white/50 text-slate-800 px-8 py-5 font-bold tracking-wider uppercase text-xs sm:text-sm rounded-2xl hover:bg-slate-100 hover:scale-[1.02] active:scale-95 transition-all duration-150 w-full sm:w-auto">
                            <Eye size={20} />
                            ¿Cómo podría verse mi página web?
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
