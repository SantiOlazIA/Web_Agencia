import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CLIENT } from '../lib/client.config';

// Cases / Portfolio — gold hover effects, animated gold dividers

const Cases = () => {
    return (
        <section id="cases" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-secondary text-primary">
            <div className="max-w-7xl mx-auto">

                {/* Gold divider at top */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ originX: 0.5 }}
                    className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-24 md:mb-32"
                />

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6"
                >
                    <div>
                        <span className="gold-shimmer text-[10px] tracking-[0.3em] uppercase font-bold mb-6 block">
                            Casos reales
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight leading-none">
                            Trabajo Reciente
                        </h2>
                    </div>
                    <p className="text-primary/50 text-base max-w-sm leading-relaxed font-light md:text-right">
                        Cada sitio construido desde cero, optimizado para conversion.
                    </p>
                </motion.div>

                {/* Cases list */}
                <div className="border-b border-border">
                    {CLIENT.cases.map((item, i) => (
                        <a
                            key={item.id}
                            href={item.url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border-t border-border hover:border-accent/30 py-8 md:py-10 flex items-center gap-4 md:gap-8 cursor-pointer transition-colors duration-300 block"
                        >
                            {/* Number */}
                            <span className="text-primary/20 text-xs font-mono flex-shrink-0 w-7 group-hover:text-accent transition-colors duration-300">
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            {/* Thumbnail */}
                            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden bg-primary/5 rounded-2xl group-hover:shadow-[0_0_20px_rgba(201,168,76,0.12)] transition-shadow duration-500">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0 ml-4 md:ml-8">
                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-primary group-hover:translate-x-3 transition-transform duration-500 leading-none">
                                        {item.name}
                                    </h3>
                                    <span className="text-primary/40 text-[10px] uppercase tracking-[0.2em] flex-shrink-0">
                                        {item.category}
                                    </span>
                                </div>
                                <p className="text-primary/50 text-sm mt-4 font-light leading-relaxed max-w-lg">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Arrow */}
                            <ArrowUpRight
                                size={20}
                                strokeWidth={1.5}
                                className="flex-shrink-0 text-primary/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                            />
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Cases;
