import { type ReactElement } from 'react';
import { motion } from 'framer-motion';
import { Check, Layers, Zap, Sparkles, ShoppingBag, RefreshCw, Tag, Globe, Wrench } from 'lucide-react';
import { CLIENT } from '../lib/client.config';

// Services / Pricing — gold hover glows, gradient CTA buttons
// Highlighted plan gets gold accent border

const waBase = `https://wa.me/${CLIENT.whatsappPhone}?text=`;

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" style={{ color: '#25D366' }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
);

const GoogleMapsIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" style={{ color: '#EA4335' }}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
);

const InstagramIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" style={{ color: '#E1306C' }}>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
);

const proFeatureIcons: Record<string, ReactElement> = {
    "Catálogo de productos": <ShoppingBag size={15} strokeWidth={2} className="flex-shrink-0 mt-0.5 text-accent" />,
    "Cambiá productos e imágenes": <RefreshCw size={15} strokeWidth={2} className="flex-shrink-0 mt-0.5 text-accent" />,
    "Actualizá los precios cuando quieras": <Tag size={15} strokeWidth={2} className="flex-shrink-0 mt-0.5 text-accent" />,
};

const baseFeatureIcons: Record<string, ReactElement> = {
    "Secciones Institucionales (Presentación + Contacto)": <Layers size={15} strokeWidth={2} className="flex-shrink-0 mt-0.5 text-accent" />,
    "Alta velocidad de carga": <Zap size={15} strokeWidth={2} className="flex-shrink-0 mt-0.5 text-accent" />,
    "Gráficos de calidad y animaciones sencillas": <Sparkles size={15} strokeWidth={2} className="flex-shrink-0 mt-0.5 text-accent" />,
    "Integración con WhatsApp, Google Maps e Instagram": (
        <span className="flex gap-1 flex-shrink-0 mt-0.5">
            <WhatsAppIcon />
            <GoogleMapsIcon />
            <InstagramIcon />
        </span>
    ),
};

const Services = () => {
    return (
        <section id="services" className="py-12 md:py-16 px-6 md:px-16 lg:px-24 bg-secondary text-primary">
            <div className="max-w-7xl mx-auto">

                {/* Gold divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ originX: 0.5 }}
                    className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-12 md:mb-16"
                />

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-6 md:mb-8 relative"
                >
                    <motion.div
                        animate={{ y: [-15, 15, -15], scale: [1, 1.05, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 right-10 w-40 h-40 bg-accent/10 rounded-full blur-[60px] pointer-events-none"
                    />
                    {/* Secondary left orb */}
                    <motion.div
                        animate={{ y: [15, -15, 15], scale: [1, 1.1, 1] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-20 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-[60px] pointer-events-none"
                    />

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-wide uppercase leading-[0.9] text-slate-900 relative z-10 mt-2" style={{ wordSpacing: '0.25em' }}>
                        PLANES Y <span className="text-accent">PRECIOS.</span>
                    </h2>
                    <div className="mt-4 relative z-10">
                        <span className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase bg-red-500 text-white px-4 py-2 rounded-full shadow-sm">
                            <Tag size={12} strokeWidth={2.5} />
                            Oferta de lanzamiento
                        </span>
                    </div>
                </motion.div>

                {/* Subsección 1: Diseño y Desarrollo Web */}
                <div className="mb-10 md:mb-14">
                    <div className="flex items-center gap-2 mb-6">
                        <Globe size={18} className="text-accent" />
                        <h3 className="text-xs font-black tracking-widest uppercase text-primary/50">Diseño y Desarrollo Web</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {CLIENT.services.filter(p => p.id === 'base' || p.id === 'pro').map((plan, i) => (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className={`group flex flex-col p-8 md:p-10 rounded-3xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden ${plan.highlight
                                    ? 'bg-white shadow-xl border-2 border-accent/50 hover:border-accent hover:shadow-[0_0_40px_rgba(234,179,8,0.2)]'
                                    : 'bg-white/60 border border-slate-200 hover:bg-white hover:border-accent/30 hover:shadow-lg'
                                    }`}
                        >
                            {/* Plan name */}
                            <div className="mb-6 relative z-10">
                                {plan.highlight && (
                                    <span className="text-xs font-black tracking-widest uppercase mb-3 block text-white bg-accent px-3 py-1 rounded-full w-max shadow-md">
                                        El más elegido
                                    </span>
                                )}
                                <div className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                                    {plan.name}
                                </div>
                                <div className="text-xl md:text-2xl font-black tracking-tight uppercase text-accent mt-2">
                                    {plan.price}
                                </div>
                            </div>

                            {/* Description */}
                            {plan.desc && (
                                <p className="text-sm mb-8 leading-relaxed font-light text-muted">
                                    {plan.desc}
                                </p>
                            )}

                            {/* Features */}
                            <ul className="space-y-3 mb-6">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-start gap-3">
                                        {plan.id === 'base'
                                            ? (baseFeatureIcons[f] ?? <Check size={14} strokeWidth={2} className="flex-shrink-0 mt-0.5 text-accent" />)
                                            : plan.id === 'pro'
                                                ? (proFeatureIcons[f] ?? <Check size={14} strokeWidth={2} className="flex-shrink-0 mt-0.5 text-accent" />)
                                                : <Check size={14} strokeWidth={2} className="flex-shrink-0 mt-0.5 text-accent" />
                                        }
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
                                className={`block text-center py-4 text-sm font-black tracking-widest uppercase rounded-2xl transition-all duration-300 active:scale-[0.98] mt-auto ${plan.highlight
                                    ? 'gold-cta text-secondary hover:scale-[1.02]'
                                    : 'border border-border text-primary hover:bg-accent hover:text-secondary hover:border-accent'
                                    }`}
                            >
                                Empezar
                            </a>
                        </motion.div>
                    ))}
                    </div>
                </div>

                {/* Subsección 2: Post-venta */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <Wrench size={18} className="text-accent" />
                        <h3 className="text-xs font-black tracking-widest uppercase text-primary/50">Post-venta</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {CLIENT.services.filter(p => p.id === 'retainer' || p.id === 'analytics').map((plan, i) => (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="group flex flex-col p-8 md:p-10 rounded-3xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden bg-white/60 border border-slate-200 hover:bg-white hover:border-accent/30 hover:shadow-lg"
                            >
                                {/* Plan name */}
                                <div className="mb-6 relative z-10">
                                    <span className="text-xs font-black tracking-widest uppercase mb-4 block text-accent">
                                        {plan.name}
                                    </span>
                                    <div className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-slate-900 mt-2">
                                        {plan.price}
                                    </div>
                                    {plan.delivery && (
                                        <div className="text-xs mt-3 font-light tracking-widest uppercase text-primary/40">
                                            Entrega en {plan.delivery}
                                        </div>
                                    )}
                                </div>

                                {plan.desc && (
                                    <p className="text-sm mb-8 leading-relaxed font-light text-muted">
                                        {plan.desc}
                                    </p>
                                )}

                                <ul className="space-y-3 mb-6">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-3">
                                            <Check size={14} strokeWidth={2} className="flex-shrink-0 mt-0.5 text-accent" />
                                            <span className="text-sm font-light text-primary/70">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={`${waBase}${encodeURIComponent(`Hola! Me interesa el plan ${plan.name} (${plan.price}). Podemos hablar?`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center py-4 text-sm font-black tracking-widest uppercase rounded-2xl transition-all duration-300 active:scale-[0.98] mt-auto border border-border text-primary hover:bg-accent hover:text-secondary hover:border-accent"
                                >
                                    Empezar
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
