import { motion } from 'framer-motion';

// Process — 3-step horizontal timeline
// Minimal, numbered, editorial

const STEPS = [
    {
        num: '01',
        title: 'Entrevista',
        desc: 'Entendemos tu negocio, clientes y objetivos. En 30 minutos tenemos todo lo que necesitamos para empezar.',
    },
    {
        num: '02',
        title: 'Diseño y build',
        desc: 'Construimos tu sitio con el tema visual que mejor represente tu marca. Sin fricciones, sin reuniones infinitas.',
    },
    {
        num: '03',
        title: 'Deploy',
        desc: 'Tu sitio publicado en Vercel con dominio propio. Online en minutos, listo para recibir clientes.',
    },
];

const Process = () => {
    return (
        <section className="py-24 md:py-32 px-6 md:px-16 lg:px-24 bg-surface text-primary border-t border-primary/5">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mb-20 md:mb-24"
                >
                    <span className="text-accent text-[10px] tracking-[0.3em] uppercase font-bold mb-6 block">
                        Cómo trabajamos
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif font-light tracking-tight text-primary leading-[1.1]">
                        Simple. Rápido.<br />
                        <span className="italic text-primary/40">Sin vueltas.</span>
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
                            className={`border-t border-primary/10 md:border-t-0 md:border-l first:border-l-0 pt-10 md:pt-0 pb-10 md:pb-0 md:px-8 xl:px-12 first:pl-0 last:pr-0`}
                        >
                            <span className="text-accent font-serif italic text-2xl tracking-widest block mb-4 md:mb-6">
                                {step.num}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-sans font-light tracking-wide text-primary mb-4 leading-none">
                                {step.title}
                            </h3>
                            <p className="text-primary/50 font-light leading-relaxed text-sm md:text-base max-w-xs">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Process;
