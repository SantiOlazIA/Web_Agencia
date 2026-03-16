import { useRef } from 'react';
import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';

// Cases / Portfolio — Drag-to-scroll horizontal row
const Cases = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    return (
        <section id="cases" className="py-16 md:py-20 px-6 md:px-16 lg:px-24 bg-secondary text-primary">
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
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6 relative"
                >
                    {/* Abstract Glow behind header */}
                    <motion.div
                        animate={{ y: [-15, 15, -15], scale: [1, 1.05, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-[60px] pointer-events-none"
                    />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase leading-[0.9] max-w-2xl text-slate-900 mt-2">
                            UNA <span className="text-accent">PÁGINA WEB</span> A LA ALTURA DE TU <span className="text-accent">PROYECTO</span>
                        </h2>
                    </div>
                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-sm leading-relaxed md:text-right relative z-10">
                        Elegí el estilo que va con tu empresa.
                    </p>
                </motion.div>

                {/* Drag-to-scroll Cases Row */}
                <div ref={containerRef} className="relative w-full overflow-hidden py-10 mt-8 mb-10 cursor-grab active:cursor-grabbing">

                    {/* Gradient masks */}
                    <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
                    <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

                    <motion.div
                        drag="x"
                        dragConstraints={containerRef}
                        dragElastic={0.05}
                        dragTransition={{ bounceStiffness: 200, bounceDamping: 30 }}
                        className="flex gap-6 md:gap-10 w-max"
                    >
                        {CLIENT.cases.map((item) => (
                            <div
                                key={item.id}
                                className="relative flex flex-col justify-end w-[280px] h-[340px] sm:w-[320px] sm:h-[400px] md:w-[400px] md:h-[460px] rounded-3xl overflow-hidden group/card shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/5"
                            >
                                {/* Background Image */}
                                <div className="absolute inset-0 w-full h-full bg-slate-900">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover opacity-60 group-hover/card:opacity-100 group-hover/card:scale-110 transition-all duration-[800ms] ease-out grayscale group-hover/card:grayscale-0"
                                    />
                                    {/* Gradient Overlay for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90 group-hover/card:opacity-80 transition-opacity duration-500" />
                                </div>

                                {/* Content overlaid on image */}
                                <div className="relative z-10 p-6 sm:p-8 flex flex-col gap-3 transform translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500">
                                    <span className="text-accent text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase bg-slate-900/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-accent/20 w-max">
                                        {item.category}
                                    </span>
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl font-black tracking-tighter uppercase text-white mb-2 leading-none">
                                            {item.name}
                                        </h3>
                                        {item.desc && (
                                            <p className="text-slate-300 text-sm font-light leading-relaxed line-clamp-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 delay-100">
                                                {item.desc}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Cases;
