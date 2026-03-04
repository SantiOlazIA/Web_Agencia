import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CLIENT } from '../lib/client.config';

// Cases / Portfolio — numbered list with large images on hover reveal
// minimalist-light style: border-t, grayscale → color, no cards

const Cases = () => {
    return (
        <section id="cases" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-secondary text-primary">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6"
                >
                    <div>
                        <span className="text-accent text-[10px] tracking-[0.3em] uppercase font-bold mb-6 block">
                            Casos reales
                        </span>
                        <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight leading-none">
                            Trabajo Reciente
                        </h2>
                    </div>
                    <p className="text-primary/50 text-base max-w-sm leading-relaxed font-light md:text-right">
                        Cada sitio construido desde cero, optimizado para conversión.
                    </p>
                </motion.div>

                {/* Cases list */}
                <div className="border-b border-primary/10">
                    {CLIENT.cases.map((item, i) => (
                        <a
                            key={item.id}
                            href={item.url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group border-t border-primary/10 hover:border-primary/30 py-8 md:py-10 flex items-center gap-4 md:gap-8 cursor-pointer transition-colors duration-300 block"
                        >
                            {/* Number */}
                            <span className="text-primary/20 text-xs font-mono flex-shrink-0 w-7 group-hover:text-accent transition-colors duration-300">
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            {/* Thumbnail */}
                            <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden bg-primary/5 rounded-2xl">
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
