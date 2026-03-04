import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';
import ShaderAnimation from './ShaderAnimation';

const Hero = () => {
    const whatsappUrl = `https://wa.me/${CLIENT.whatsappPhone}?text=${encodeURIComponent('Hola, me interesa crear un sitio web.')}`;

    return (
        <section className="relative w-full min-h-[100dvh] bg-secondary flex flex-col px-6 md:px-16 lg:px-24 pt-32 pb-16 overflow-hidden border-b border-primary/5">

            {/* Shader — fills entire section */}
            <div className="absolute inset-0">
                <ShaderAnimation />
            </div>

            {/* Gradient overlay — darker at edges, lets shader glow in center */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/85 via-secondary/55 to-secondary/85" />

            {/* All content sits above shader */}
            <div className="relative z-10 flex flex-col min-h-[calc(100dvh-12rem)]">

                {/* TOP: label + H1 */}
                <div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.1 }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-8 h-[1px] bg-accent" />
                        <span className="text-accent text-[10px] tracking-[0.4em] uppercase font-bold">
                            {CLIENT.heroTagline}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="mt-8 text-4xl sm:text-6xl md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-serif font-light text-primary leading-[0.9] tracking-tight"
                    >
                        {CLIENT.brandName}
                    </motion.h1>
                </div>

                {/* SPACER — pushes bottom block down naturally */}
                <div className="flex-1" />

                {/* BOTTOM: divider + tagline + CTAs + stats */}
                <div className="mt-auto">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{ originX: 0 }}
                        className="w-full h-[1px] bg-primary/10 mb-10"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10"
                    >
                        {/* Left: tagline + CTAs */}
                        <div className="space-y-6 max-w-lg">
                            <div>
                                <p className="text-primary/70 text-lg md:text-xl font-sans font-light leading-relaxed">
                                    {CLIENT.tagline}
                                </p>
                                <p className="text-primary/40 text-[10px] tracking-[0.3em] uppercase mt-5">
                                    Experiencia Digital · Alto Rendimiento
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-5 bg-primary text-secondary text-xs font-bold tracking-[0.2em] uppercase text-center rounded-3xl hover:bg-accent hover:text-primary transition-colors duration-400"
                                >
                                    Agendar Consulta
                                </a>
                                <a
                                    href="#cases"
                                    className="text-xs tracking-[0.2em] uppercase text-primary/50 hover:text-primary transition-colors underline underline-offset-[6px]"
                                >
                                    Ver Casos de Estudio
                                </a>
                            </div>
                        </div>

                        {/* Right: key stats — desktop only */}
                        <div className="hidden md:flex gap-16 text-right pb-1">
                            <div>
                                <div className="text-primary font-serif italic text-6xl tracking-tighter leading-none">5</div>
                                <div className="text-primary/40 text-[10px] tracking-[0.25em] uppercase mt-3">Días al Deploy</div>
                            </div>
                            <div>
                                <div className="text-primary font-serif italic text-6xl tracking-tighter leading-none">99<span className="text-3xl">%</span></div>
                                <div className="text-primary/40 text-[10px] tracking-[0.25em] uppercase mt-3">Performance</div>
                            </div>
                            <div>
                                <div className="text-accent font-serif italic text-6xl tracking-tighter leading-none">+ROI</div>
                                <div className="text-primary/40 text-[10px] tracking-[0.25em] uppercase mt-3">Medible</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
