import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';

// brutalist-dark Catalog — grayscale image grid, no cards, border-t list style
// Profile B: industrial, construcción, tecnología, corporativo

const Catalog = () => {
    return (
        <section id="catalog" className="py-16 md:py-32 px-6 md:px-16 bg-secondary text-primary border-t border-primary/10">
            <div className="max-w-7xl mx-auto">

                {/* Header — brutalist style */}
                <div className="flex flex-col mb-12 md:mb-20 gap-4 border-b border-primary/10 pb-8 md:pb-12">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-8 h-[2px] bg-accent" />
                        <span className="text-accent font-black tracking-[0.2em] uppercase text-xs">01 // CATÁLOGO</span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl lg:text-7xl font-sans font-black tracking-tighter uppercase leading-none">
                        Nuestros Productos
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-10 md:gap-y-20">
                    {CLIENT.products.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group cursor-pointer"
                        >
                            {/* Grayscale image — reveals color on hover */}
                            <div className="aspect-[3/4] overflow-hidden bg-primary/5 mb-6 relative">
                                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay" />
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                                />
                            </div>

                            {/* Item info */}
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl md:text-2xl font-black font-sans tracking-tight uppercase leading-none">{item.name}</h3>
                                <span className="font-bold text-accent text-sm tracking-widest flex-shrink-0 ml-4">
                                    {CLIENT.currency}{item.price.toLocaleString()}
                                </span>
                            </div>
                            <div className="w-full h-[1px] bg-primary/10 mb-3 group-hover:bg-accent/50 transition-colors duration-500" />
                            <p className="text-muted text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Catalog;
