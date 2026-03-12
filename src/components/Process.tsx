import { motion } from 'framer-motion';
import { BadgeCheck, Check, MonitorSmartphone, Sofa, Sparkles } from 'lucide-react';

// Process — 3-step editorial timeline with gold accents

const STEPS = [
    {
        num: '01',
        title: 'Comodidad',
        icon: Sofa,
        desc: [
            'Mantenimiento del sitio',
            'Hosting y dominio incluidos',
            <span key="resp" className="flex items-center gap-2">Adaptado a celulares y PC <MonitorSmartphone size={16} className="text-accent" /></span>
        ],
    },
    {
        num: '02',
        title: 'Calidad',
        icon: Sparkles,
        desc: ['Visual premium', 'Experiencia de usuario impecable', 'Tiempo de carga ultra rápido'],
    },
    {
        num: '03',
        title: 'Conveniencia',
        icon: BadgeCheck,
        desc: [
            <span key="fin">Financiación (<a href="#services" className="underline hover:text-accent transition-colors">ver precios</a>)</span>,
            'Garantía: Primero probás, después pagás.'
        ],
    },
];

const Process = () => {
    return (
        <section id="process" className="py-12 md:py-16 px-6 md:px-16 lg:px-24 bg-surface text-primary border-t border-border">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 md:mb-16 relative"
                >
                    <motion.div
                        animate={{ y: [-15, 15, -15], scale: [1, 1.05, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-[60px] pointer-events-none"
                    />

                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase text-slate-900 leading-[0.9] relative z-10 mt-2">
                        ¿POR QUÉ<br />
                        <span className="text-accent">NOSOTROS?</span>
                    </h2>
                </motion.div>

                {/* Steps */}
                <div className="flex flex-col md:grid md:grid-cols-3 gap-0">
                    {STEPS.map((step, i) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            className={`border-t border-border md:border-t-0 md:border-l first:border-l-0 pt-10 md:pt-0 pb-10 md:pb-0 md:px-8 xl:px-12 first:pl-0 last:pr-0`}
                        >
                            <span className="text-accent/20 font-black text-4xl md:text-5xl tracking-tighter block mb-4 md:mb-6">
                                {step.num}
                            </span>
                            <h3 className="flex items-center gap-3 text-xl md:text-2xl font-black uppercase tracking-tight text-slate-900 mb-6 leading-none">
                                <step.icon className="text-accent flex-shrink-0" size={28} strokeWidth={2.5} />
                                {step.title}
                            </h3>
                            <ul className="flex flex-col gap-3">
                                {step.desc.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="text-accent flex-shrink-0 mt-0.5" size={18} strokeWidth={3} />
                                        <span className="text-slate-500 font-medium leading-relaxed text-sm md:text-base">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Process;
