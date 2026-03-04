import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';

// luxury-dark Catalog — editorial cards, gold accent line, glassmorphism border
// Profile B Premium: clínicas estéticas, legales, alto valor

const Catalog = () => {
    return (
        <section id="catalog" className="py-32 px-6 md:px-20 lg:px-32 bg-secondary text-primary">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10 border-b border-primary/10 pb-12">
                    <div className="max-w-3xl">
                        <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Catálogo</span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary tracking-tight">
                            Nuestros Productos
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16">
                    {CLIENT.products.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="group cursor-pointer"
                        >
                            {/* Product image — editorial aspect ratio */}
                            <div className="aspect-[4/5] rounded-sm overflow-hidden mb-6 relative bg-primary/5 border border-primary/10 group-hover:border-accent/40 transition-colors duration-500">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                />
                            </div>

                            <h3 className="text-2xl font-serif text-primary mb-3 leading-snug">{item.name}</h3>
                            <p className="text-muted text-sm leading-relaxed font-light mb-5">{item.desc}</p>

                            <div className="flex items-center justify-between">
                                <span className="text-accent font-medium">{CLIENT.currency}{item.price.toLocaleString()}</span>
                                {/* Gold underline expands on hover */}
                                <div className="w-12 h-[1px] bg-accent/30 group-hover:w-24 transition-all duration-700" />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Catalog;
