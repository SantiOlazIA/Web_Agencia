import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { CLIENT } from '../lib/client.config';

// Services / Pricing — 3-column grid
// Highlighted plan gets accent border + dark bg treatment

const waBase = `https://wa.me/${CLIENT.whatsappPhone}?text=`;

const Services = () => {
    return (
        <section id="services" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-secondary text-primary">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-16 md:mb-20"
                >
                    <span className="text-accent text-[10px] tracking-[0.3em] uppercase font-bold mb-6 block">
                        Servicios
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight leading-none">
                        Precios claros.<br />
                        <span className="italic text-primary/40">Sin sorpresas.</span>
                    </h2>
                </motion.div>

                {/* Pricing grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {CLIENT.services.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`flex flex-col p-8 md:p-10 border rounded-3xl transition-colors duration-300 ${plan.highlight
                                ? 'bg-primary text-secondary border-primary'
                                : 'bg-transparent text-primary border-primary/15 hover:border-primary/40'
                                }`}
                        >
                            {/* Plan name */}
                            <div className="mb-8">
                                <span className={`text-[10px] tracking-[0.3em] uppercase font-bold mb-4 block ${plan.highlight ? 'text-secondary/70' : 'text-accent'}`}>
                                    {plan.highlight ? 'El más elegido' : plan.name}
                                </span>
                                <div className={`text-4xl md:text-5xl font-serif font-light tracking-tight ${plan.highlight ? 'text-secondary' : 'text-primary'}`}>
                                    {plan.price}
                                </div>
                                <div className={`text-xs mt-3 font-light tracking-widest uppercase ${plan.highlight ? 'text-secondary/60' : 'text-primary/40'}`}>
                                    Entrega en {plan.delivery}
                                </div>
                            </div>

                            {/* Description */}
                            <p className={`text-sm mb-8 leading-relaxed font-light ${plan.highlight ? 'text-secondary/60' : 'text-muted'}`}>
                                {plan.desc}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-10 flex-1">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3">
                                        <Check
                                            size={14}
                                            className={`flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-accent' : 'text-accent'}`}
                                        />
                                        <span className={`text-sm font-light ${plan.highlight ? 'text-secondary/70' : 'text-primary/70'}`}>
                                            {f}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href={`${waBase}${encodeURIComponent(`Hola! Me interesa el plan ${plan.name} (${plan.price}). ¿Podemos hablar?`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block text-center py-4 text-sm font-black tracking-widest uppercase rounded-2xl transition-colors duration-300 ${plan.highlight
                                    ? 'bg-accent text-secondary hover:bg-accent/80 hover:text-primary'
                                    : 'border border-primary/20 text-primary hover:bg-primary hover:text-secondary'
                                    }`}
                            >
                                {plan.id === 'scale' ? 'Consultar' : 'Empezar'}
                            </a>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
