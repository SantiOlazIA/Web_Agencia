import { motion } from 'framer-motion';
import { KeyRound, Lock, Globe, EyeOff } from 'lucide-react';

const TRUST_CARDS = [
    {
        icon: KeyRound,
        tag: 'clerk.com',
        title: 'Auth con Clerk',
        body: 'Los logins van por Clerk. Ni vos ni nosotros tocamos contraseñas.',
    },
    {
        icon: Lock,
        tag: 'Vercel TLS',
        title: 'HTTPS en cada deploy',
        body: 'Certificado SSL automático desde el día 1. Sin configurar nada.',
    },
    {
        icon: Globe,
        tag: '99.99% uptime',
        title: 'Vercel Edge Network',
        body: 'CDN global. La misma infra que usan Notion y Linear.',
    },
    {
        icon: EyeOff,
        tag: 'zero data storage',
        title: 'Sin base de datos propia',
        body: 'El formulario va directo a tu WhatsApp. No hay nada que hackear.',
    },
];

const Security = () => {
    return (
        <section id="seguridad" className="py-12 md:py-16 px-6 md:px-16 lg:px-24 bg-surface text-primary border-t border-border">
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
                        className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-[60px] pointer-events-none hidden sm:block"
                    />
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase text-slate-900 leading-[0.9] relative z-10 mt-2">
                        TU NEGOCIO,<br />
                        <span className="text-accent">PROTEGIDO.</span>
                    </h2>
                    <p className="mt-4 text-slate-500 text-base md:text-lg max-w-lg">
                        Stack conocido, proveedores auditados. Cero datos nuestros en el medio.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    {TRUST_CARDS.map((card, i) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="relative bg-slate-900 rounded-2xl p-6 md:p-8 overflow-hidden group"
                            >
                                {/* Subtle gold glow on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                                    style={{ boxShadow: 'inset 0 0 60px rgba(234,179,8,0.06)' }} />

                                {/* Large icon watermark */}
                                <div className="absolute -bottom-4 -right-4 opacity-[0.04] pointer-events-none">
                                    <Icon size={120} strokeWidth={1} className="text-white" />
                                </div>

                                {/* Tag */}
                                <span className="inline-block text-[10px] font-bold tracking-[0.18em] uppercase text-accent/70 bg-accent/10 px-2.5 py-1 rounded-md mb-5">
                                    {card.tag}
                                </span>

                                {/* Icon */}
                                <div className="w-11 h-11 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                                    <Icon size={22} className="text-accent" strokeWidth={1.8} />
                                </div>

                                {/* Text */}
                                <h3 className="text-lg md:text-xl font-black text-white mb-2 leading-tight tracking-tight">
                                    {card.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {card.body}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Security;
