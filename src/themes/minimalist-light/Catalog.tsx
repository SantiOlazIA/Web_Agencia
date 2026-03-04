import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';

// minimalist-light Catalog — pure typography list, no cards, numbered items
// Profile B Boutique: estudios creativos, diseño, consultoras

const Catalog = () => {
    return (
        <section id="catalog" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-secondary text-primary">
            <div className="max-w-7xl mx-auto">

                {/* Header — minimal, left-aligned */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6"
                >
                    <div>
                        <span className="text-primary/30 text-xs tracking-[0.3em] uppercase font-medium mb-4 block">
                            Catálogo
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-primary leading-none">
                            Nuestros Productos
                        </h2>
                    </div>
                    <p className="text-muted text-sm max-w-xs leading-relaxed font-light md:text-right">
                        Cada producto con dedicación y materiales de primera.
                    </p>
                </motion.div>

                {/* Product list — typography first */}
                <div className="border-b border-primary/10">
                    {CLIENT.products.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="group border-t border-primary/10 hover:border-primary/30 py-7 md:py-8 flex items-center gap-4 md:gap-8 cursor-pointer transition-colors duration-300"
                        >
                            {/* Number */}
                            <span className="text-primary/20 text-xs font-mono flex-shrink-0 w-6 group-hover:text-accent transition-colors duration-300">
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tighter text-primary group-hover:translate-x-2 transition-transform duration-300 leading-none">
                                        {item.name}
                                    </h3>
                                    <span className="text-accent font-bold text-base md:text-lg flex-shrink-0">
                                        {CLIENT.currency}{item.price.toLocaleString()}
                                    </span>
                                </div>
                                <p className="text-muted text-sm mt-2 font-light leading-relaxed max-w-lg">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Small grayscale thumbnail — reveals color on hover */}
                            <div className="w-14 h-14 md:w-20 md:h-20 flex-shrink-0 overflow-hidden bg-primary/5">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-14 flex justify-end"
                >
                    <a
                        href="#order"
                        className="group inline-flex items-center gap-3 text-sm font-bold tracking-widest uppercase text-primary hover:text-accent transition-colors duration-300"
                    >
                        Hacer un pedido
                        <span className="w-8 h-[1px] bg-primary group-hover:w-16 group-hover:bg-accent transition-all duration-500" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Catalog;
