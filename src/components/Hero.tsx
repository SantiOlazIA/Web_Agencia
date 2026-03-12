import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Settings, Code2, Layers, Cpu, Eye, DollarSign } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-slate-50 px-4 pt-10"
        >
            {/* Background Radial Glow - Adjusted for light theme */}
            <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
                <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-accent/10 rounded-full blur-[100px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl mx-auto text-center mt-6">

                {/* Clarity Subtitle: Explicitly what we do */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="mb-0 inline-block"
                >
                    <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm md:text-base">
                        Agencia de Diseño y Desarrollo Web
                    </span>
                </motion.div>

                {/* Massive Typography Headline: AI Revolution hook restored */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 80, damping: 20 }}
                    className="w-full flex-col items-center flex"
                >
                    <h1 className="text-[12vw] sm:text-[10vw] md:text-[90px] lg:text-[110px] font-black tracking-tighter leading-[0.9] uppercase text-slate-900 mb-2 md:mb-4 max-w-5xl mt-0">
                        LA REVOLUCIÓN<br />
                        DE LA <span className="text-accent">IA.</span>
                    </h1>
                </motion.div>

                {/* High Value Market Propositions - Detail Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col items-center w-full mt-2"
                >
                    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6 sm:gap-6 mb-8 max-w-6xl mx-auto px-4">
                        {/* Card 1: Security */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="flex flex-col items-center text-center gap-1 bg-white/90 border border-slate-200 backdrop-blur-md px-6 py-4 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto"
                        >
                            <div className="flex justify-center items-center gap-2 mb-1">
                                <ShieldCheck className="text-emerald-600" size={24} />
                                <span className="text-slate-900 text-lg font-bold tracking-wide">Más Seguridad</span>
                            </div>
                            <p className="text-slate-600 text-sm font-medium">
                                Certificación SSL
                            </p>
                        </motion.div>

                        {/* Card 2: Visual Quality */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="flex flex-col items-center text-center gap-1 bg-white/90 border border-slate-200 backdrop-blur-md px-8 py-4 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto"
                        >
                            <div className="flex justify-center items-center gap-2 mb-1">
                                <TrendingUp className="text-emerald-600" size={24} />
                                <span className="text-slate-900 text-lg font-bold tracking-wide">Más Calidad Visual</span>
                            </div>
                            <p className="text-slate-600 text-sm font-medium">
                                Animaciones y optimización de UX
                            </p>
                        </motion.div>

                        {/* Card 3: Control */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="flex flex-col items-center text-center gap-1 bg-white/90 border border-slate-200 backdrop-blur-md px-6 py-4 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 w-full sm:w-auto"
                        >
                            <div className="flex justify-center items-center gap-2 mb-1">
                                <Settings className="text-emerald-600" size={24} />
                                <span className="text-slate-900 text-lg font-bold tracking-wide">Más Control</span>
                            </div>
                            <p className="text-slate-600 text-sm font-medium">
                                Sitios autogestionables
                            </p>
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
                        <a
                            href={`https://wa.me/5492646274616?text=${encodeURIComponent('Hola! Quiero consultar sobre una página web.')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-8 py-5 font-bold tracking-wider uppercase text-xs sm:text-sm rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-150 w-full sm:w-auto text-white"
                            style={{ backgroundColor: '#25D366' }}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            Consultar por WhatsApp
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
        </section >
    );
};

export default Hero;
