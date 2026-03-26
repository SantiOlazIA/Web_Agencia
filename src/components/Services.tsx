import { useState, type ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Wrench, ChevronDown, Stethoscope, Utensils, Building2, Briefcase, Zap, Calendar, LayoutGrid, ShieldCheck, PieChart, Monitor, NotebookPen } from 'lucide-react';
import { CLIENT, type Service } from '../lib/client.config';

// Services / Pricing — gold hover glows, gradient CTA buttons
// Highlighted plan gets gold accent border

const waBase = `https://wa.me/${CLIENT.whatsappPhone}?text=`;

const planIcons: Record<string, ReactElement> = {
    "base": <Briefcase size={28} className="text-slate-700 group-hover:text-accent transition-colors" strokeWidth={1.5} />,
    "medicina": <Stethoscope size={28} className="text-slate-700 group-hover:text-accent transition-colors" strokeWidth={1.5} />,
    "gastronomia": <Utensils size={28} className="text-slate-700 group-hover:text-accent transition-colors" strokeWidth={1.5} />,
    "real-estate": <Building2 size={28} className="text-slate-700 group-hover:text-accent transition-colors" strokeWidth={1.5} />,
};

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" style={{ color: '#25D366' }}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const FeatureIcon = ({ feature, className }: { feature: string, className?: string }) => {
    const defaultColor = className || "text-accent";
    const str = feature.toLowerCase();

    if (str.includes('whatsapp') || str.includes('instagram') || str.includes('maps')) {
        return <WhatsAppIcon />;
    }

    if (str.includes('seo') || str.includes('velocidad')) return <Zap size={16} strokeWidth={2.5} className={`flex-shrink-0 mt-0.5 ${defaultColor}`} />;
    if (str.includes('calendario') || str.includes('turnos') || str.includes('reservas')) return <Calendar size={16} strokeWidth={2.5} className={`flex-shrink-0 mt-0.5 ${defaultColor}`} />;
    if (str.includes('catálogo') || str.includes('galería') || str.includes('diseño')) return <LayoutGrid size={16} strokeWidth={2.5} className={`flex-shrink-0 mt-0.5 ${defaultColor}`} />;
    if (str.includes('seguridad') || str.includes('hosting') || str.includes('dominio')) return <ShieldCheck size={16} strokeWidth={2.5} className={`flex-shrink-0 mt-0.5 ${defaultColor}`} />;
    if (str.includes('reporte') || str.includes('análisis') || str.includes('conversiones')) return <PieChart size={16} strokeWidth={2.5} className={`flex-shrink-0 mt-0.5 ${defaultColor}`} />;
    if (str.includes('dashboard') || str.includes('panel')) return <Monitor size={16} strokeWidth={2.5} className={`flex-shrink-0 mt-0.5 ${defaultColor}`} />;
    if (str.includes('formulario') || str.includes('contacto') || str.includes('soporte')) return <NotebookPen size={16} strokeWidth={2.5} className={`flex-shrink-0 mt-0.5 ${defaultColor}`} />;

    return <Check size={16} strokeWidth={2.5} className={`flex-shrink-0 mt-0.5 ${defaultColor}`} />;
};

const PlanCard = ({ plan, index }: { plan: Service, index: number }) => {
    const [expanded, setExpanded] = useState(false);

    // Some custom styles per category
    const isSectors = plan.category === 'Sectores';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group flex flex-col p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden ${isSectors
                ? 'bg-slate-900 shadow-2xl border-2 border-accent/20 hover:border-accent/80 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] text-white'
                : 'bg-white border border-slate-200 hover:border-accent/40 hover:shadow-xl text-slate-900'
                }`}
        >
            {/* Background Decor */}
            {isSectors && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full pointer-events-none group-hover:bg-accent/10 transition-colors duration-500" />
            )}

            {/* Plan Header */}
            <div className="mb-6 flex justify-between items-start h-12 relative z-10">
                <div className={`p-4 rounded-2xl inline-flex ${isSectors ? 'bg-white/5' : 'bg-slate-50'}`}>
                    {planIcons[plan.id] || <Check size={28} className={isSectors ? 'text-accent' : 'text-slate-700'} />}
                </div>
                {plan.highlight && (
                    <span className="text-[10px] font-black tracking-widest uppercase text-slate-950 bg-accent px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 h-max">
                        <span className="w-1.5 h-1.5 bg-slate-950 rounded-full animate-pulse"></span>
                        A MEDIDA
                    </span>
                )}
            </div>

            <div className="h-[96px] lg:h-[110px] flex flex-col justify-start relative z-10">
                <div className={`text-3xl md:text-3xl lg:text-4xl font-black tracking-tight leading-tight mb-2 ${isSectors ? 'text-white' : 'text-slate-900'}`}>
                    {plan.name}
                </div>
            </div>

            <div className="flex flex-col relative z-10 mt-2">
                <div className="text-xl md:text-2xl font-black tracking-tight uppercase text-accent">
                    {plan.price}
                </div>
                {/* Subtle green installments text specifically for main plans */}
                {['base', 'gastronomia', 'real-estate', 'medicina'].includes(plan.id) && (
                    <div className="text-emerald-500 text-sm md:text-base font-bold tracking-wide mt-1">
                        💳 (3 cuotas sin interés)
                    </div>
                )}
            </div>

            {/* Description */}
            {plan.desc && (
                <div className="h-[80px] md:h-[96px] flex flex-col justify-start relative z-10 mt-4">
                    <p className={`text-sm leading-relaxed font-light pr-2 ${isSectors ? 'text-slate-400' : 'text-slate-500'}`}>
                        {plan.desc}
                    </p>
                </div>
            )}

            {/* Interactive Features Accordion */}
            <div className="mb-8 relative z-10 flex-1 flex flex-col justify-start mt-4">
                <button
                    onClick={() => setExpanded(!expanded)}
                    className={`flex items-center justify-between w-full py-3 text-xs font-bold tracking-widest uppercase transition-colors border-b ${isSectors ? 'border-white/10 text-white hover:text-accent' : 'border-slate-200 text-slate-900 hover:text-accent'}`}
                >
                    Ver Especificaciones
                    <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown size={14} strokeWidth={3} />
                    </motion.div>
                </button>

                <AnimatePresence initial={false}>
                    {expanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <ul className="space-y-4 pt-6 pb-2">
                                {plan.features.map((f, i) => (
                                    <motion.li
                                        key={f}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <FeatureIcon feature={f} className={isSectors ? 'text-accent' : 'text-accent'} />
                                        <span className={`text-sm font-light ${isSectors ? 'text-slate-300' : 'text-slate-600'}`}>
                                            {f}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* CTA */}
            <a
                href={`${waBase}${encodeURIComponent(`Hola! Me interesa la solución para ${plan.name} (${plan.price}). Podemos hablar?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full relative z-10 block text-center py-4 text-sm font-black tracking-widest uppercase rounded-2xl transition-all duration-300 active:scale-[0.98] mt-auto ${isSectors
                    ? 'gold-cta text-slate-950 hover:scale-[1.02] shadow-[0_0_20px_rgba(234,179,8,0.2)]'
                    : 'bg-slate-900 text-white hover:bg-accent hover:text-slate-950'
                    }`}
            >
                Solicitar Cotización
            </a>
        </motion.div>
    );
};

const Services = () => {
    const mainPlans = CLIENT.services.filter(p => p.category === 'Básica' || p.category === 'Sectores');
    const postSalesPlans = CLIENT.services.filter(p => p.category === 'Post-venta');

    return (
        <section id="services" className="py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-slate-50 text-slate-900 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

            <div className="max-w-[1440px] mx-auto relative z-10">

                {/* Gold divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ originX: 0.5 }}
                    className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-16 md:mb-20"
                />

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 md:mb-16 relative flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div className="relative z-10 w-full md:w-auto">
                        <h2 className="text-[10vw] sm:text-[8vw] md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-slate-900 max-w-5xl">
                            SOLUCIONES <br />
                            <span className="text-accent underline decoration-8 underline-offset-[16px]">A&nbsp;&nbsp;&nbsp;MEDIDA</span>
                        </h2>
                    </div>
                    <div className="relative z-10 flex flex-col items-start md:items-end w-full md:w-auto mt-6 md:mt-0">
                        {/* Stacked Promos */}
                        <div className="flex flex-col gap-2.5 mb-5 md:mb-7 items-start md:items-end">
                            <div
                                className="bg-red-600 text-white text-[10px] sm:text-[12px] font-black tracking-widest uppercase px-4 py-2 rounded-full shadow-[0_0_20px_rgba(220,38,38,0.7)] border-2 border-red-400 z-20 w-max"
                            >
                                🔥 SUPER OFERTA DE LANZAMIENTO
                            </div>
                            <motion.div
                                animate={{ y: [-1, 1, -1] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="bg-emerald-500 text-white text-[10px] sm:text-[12px] font-black tracking-widest uppercase px-4 py-2 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)] border-2 border-emerald-400 z-20 w-max"
                            >
                                💳 (3 CUOTAS SIN INTERÉS)
                            </motion.div>
                        </div>
                        <p className="text-slate-500 text-lg md:text-xl font-medium max-w-md leading-relaxed text-left md:text-right">
                            Desarrollamos herramientas digitales específicas para escalar tu negocio en tu sector.
                        </p>
                    </div>
                </motion.div>

                {/* Subsección 1: Soluciones por Sector */}
                <div className="mb-16 md:mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 xl:gap-6">
                        {mainPlans.map((plan, i) => (
                            <PlanCard key={plan.id} plan={plan} index={i} />
                        ))}
                    </div>
                </div>

                {/* Subsección 2: Mantenimiento y Post-venta */}
                < div className="pt-16 border-t border-slate-200" >
                    <div className="flex items-center gap-3 mb-10 justify-center flex-col sm:flex-row">
                        <Wrench size={20} className="text-accent" />
                        <h3 className="text-sm font-black tracking-widest uppercase text-slate-900">Partnership / Post-venta</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                        {postSalesPlans.map((plan, i) => (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className={`group flex flex-col p-8 md:p-10 rounded-3xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden ${plan.id === 'analytics'
                                    ? 'bg-slate-900 shadow-2xl border-2 border-accent/20 hover:border-accent hover:shadow-[0_0_40px_rgba(234,179,8,0.2)] text-white'
                                    : 'bg-white border border-slate-200 hover:border-emerald-300 hover:shadow-lg text-slate-900'
                                    }`}
                            >
                                {/* Plan name */}
                                <div className="mb-6 relative z-10 text-center md:text-left">
                                    {plan.id === 'analytics' && (
                                        <span className="text-xs font-black tracking-widest uppercase mb-4 mx-auto md:mx-0 block text-slate-950 bg-accent px-4 py-1.5 rounded-full w-max shadow-md">
                                            Recomendado
                                        </span>
                                    )}
                                    {plan.id === 'retainer' && (
                                        <span className="text-xs font-black tracking-widest uppercase mb-4 mx-auto md:mx-0 block text-white bg-emerald-500 px-4 py-1.5 rounded-full w-max shadow-sm">
                                            🔥 3 meses gratis
                                        </span>
                                    )}
                                    <div className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                                        {plan.name}
                                    </div>
                                    <div className="text-lg md:text-xl font-bold tracking-tight mt-2 leading-snug">
                                        {plan.id === 'retainer' && (
                                            <><span className="text-emerald-500">Gratis 3 meses</span>, luego $15.000/mes</>
                                        )}
                                        {plan.id === 'analytics' && (
                                            <>$30.000/mes</>
                                        )}
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((f) => (
                                        <li key={f} className="flex items-start gap-3">
                                            <FeatureIcon feature={f} className={plan.id === 'retainer' ? 'text-emerald-500' : 'text-accent'} />
                                            <span className={`text-sm font-light ${plan.id === 'analytics' ? 'text-slate-300' : 'text-slate-600'}`}>{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto">
                                    <a
                                        href={`${waBase}${encodeURIComponent(`Hola! Me interesa el plan de Partnership: ${plan.name}. Podemos hablar?`)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`block w-full text-center py-4 text-sm font-black tracking-widest uppercase rounded-2xl transition-all duration-300 active:scale-[0.98] ${plan.id === 'analytics'
                                            ? 'gold-cta text-slate-950 hover:scale-[1.02]'
                                            : 'border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-colors'
                                            }`}
                                    >
                                        Agregar a mi plan
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div >

            </div >
        </section >
    );
};

export default Services;
