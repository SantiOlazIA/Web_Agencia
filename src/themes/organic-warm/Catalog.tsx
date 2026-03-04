import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';

// organic-warm Catalog — warm rounded cards
// Profile A: food, artesanal, panadería, emprendimiento

const Catalog = () => {
    return (
        <section id="catalog" className="py-24 bg-secondary text-primary">
            <div className="max-w-7xl mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Catálogo</span>
                    <h2 className="text-4xl md:text-5xl font-serif">Nuestras <span className="italic">Especialidades</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {CLIENT.products.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                            className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 border border-primary/10"
                        >
                            <div className="aspect-[4/3] overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif font-bold text-primary leading-tight mb-3">{item.name}</h3>
                                <p className="text-muted text-sm mb-5 leading-relaxed">{item.desc}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-bold text-accent">{CLIENT.currency}{item.price.toLocaleString()}</span>
                                    <a
                                        href="#order"
                                        className="text-sm font-semibold uppercase tracking-wider text-primary/60 hover:text-accent transition-colors duration-200"
                                    >
                                        Encargar →
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Catalog;
