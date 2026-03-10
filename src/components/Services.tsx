import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { CLIENT } from '../lib/client.config';

// Services / Pricing — gold hover glows, gradient CTA buttons
// Highlighted plan gets gold accent border

const waBase = `https://wa.me/${CLIENT.whatsappPhone}?text=`;

const Services = () => {
    return (
        <section id="services" className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-secondary text-primary">
            <div className="max-w-7xl mx-auto">

                {/* Gold divider */}
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
                    className="mb-16 md:mb-20"
                >
                    <span className="gold-shimmer text-[10px] tracking-[0.3em] uppercase font-bold mb-6 block">
                        Servicios
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight leading-none">
                        Precios claros.<br />
                        <span className="italic text-primary/40">Sin sorpresas.</span>
                    </h2>
                </motion.div>

                {/* Pricing grid — 2-col zigzag for first two, full-width last */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {CLIENT.services.map((plan, i) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`group flex flex-col p-8 md:p-10 border rounded-3xl transition-all duration-500 ${plan.highlight
                                    ? 'bg-surface border-accent/30 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(201,168,76,0.08)]'
                                    : 'bg-transparent border-border hover:border-accent/20 hover:shadow-[0_0_20px_rgba(201,168,76,0.05)]'
                                } ${i === 2 ? 'md:col-span-2' : ''}`}
                        >
                            {/* Plan name */}
                            <div className="mb-8">
                                <span className={`text-[10px] tracking-[0.3em] uppercase font-bold mb-4 block ${plan.highlight ? 'gold-shimmer' : 'text-accent'
                                    }`}>
                                    {plan.highlight ? 'El mas elegido' : plan.name}
                                </span>
                                <div className="text-4xl md:text-5xl font-serif font-light tracking-tight text-primary">
                                    {plan.price}
                                </div>
                                <div className="text-xs mt-3 font-light tracking-widest uppercase text-primary/40">
                                    Entrega en {plan.delivery}
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm mb-8 leading-relaxed font-light text-muted">
                                {plan.desc}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-10 flex-1">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3">
                                        <Check
                                            size={14}
                                            strokeWidth={2}
                                            className="flex-shrink-0 mt-0.5 text-accent"
                                        />
                                        <span className="text-sm font-light text-primary/70">
                                            {f}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href={`${waBase}${encodeURIComponent(`Hola! Me interesa el plan ${plan.name} (${plan.price}). Podemos hablar?`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block text-center py-4 text-sm font-black tracking-widest uppercase rounded-2xl transition-all duration-300 active:scale-[0.98] ${plan.highlight
                                        ? 'gold-cta text-secondary hover:scale-[1.02]'
                                        : 'border border-border text-primary hover:bg-accent hover:text-secondary hover:border-accent'
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
