import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';

// minimalist-light About — full typography, numbered list, no images
// Profile B Boutique: estudios creativos, diseño, consultoras, boutique
// CUSTOMIZE: Replace placeholder text with real client story

const PILARES = [
    // CUSTOMIZE: 3 core values or differentiators
    { num: '01', title: 'Enfoque', desc: 'Nos dedicamos exclusivamente a lo que hacemos mejor. Especialización sin compromisos.' },
    { num: '02', title: 'Proceso', desc: 'Cada proyecto sigue una metodología clara: investigación, propuesta, ejecución, entrega.' },
    { num: '03', title: 'Resultado', desc: 'El éxito de nuestros clientes es nuestra única métrica que importa.' },
];

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-primary text-secondary">
            <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

                {/* Top: large statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 md:mb-28"
                >
                    <span className="text-secondary/30 text-xs tracking-[0.3em] uppercase font-medium mb-6 block">
                        Quiénes somos
                    </span>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-secondary leading-none max-w-4xl">
                        {/* CUSTOMIZE: Bold statement about the brand */}
                        No somos para todos.<br />
                        <span className="text-secondary/30">Somos para los que exigen lo mejor.</span>
                    </h2>
                </motion.div>

                {/* Middle: bio + image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-28 items-start">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <p className="text-secondary/60 font-light leading-relaxed text-lg">
                            {/* CUSTOMIZE: Bio — quiénes son, qué hacen, desde cuándo */}
                            {CLIENT.brandName} nació con una idea simple: hacer bien
                            una sola cosa. Con los años desarrollamos una metodología
                            propia que nos permite entregar resultados consistentes
                            sin importar la escala del proyecto.
                        </p>
                        <p className="text-secondary/60 font-light leading-relaxed text-lg">
                            {/* CUSTOMIZE: Filosofía o diferenciador */}
                            Trabajamos con pocos clientes a la vez, intencionalmente.
                            Esto nos permite dar la atención que cada proyecto merece.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 1.05 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="aspect-[4/3] overflow-hidden bg-secondary/5"
                    >
                        {/* CUSTOMIZE: /images/about/about-01.jpg — team, workspace, or product */}
                        <img
                            src="/images/about/about-01.jpg"
                            alt={CLIENT.brandName}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </div>

                {/* Bottom: numbered pillars */}
                <div className="border-b border-secondary/10">
                    {PILARES.map((p, i) => (
                        <motion.div
                            key={p.num}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group border-t border-secondary/10 py-8 grid grid-cols-1 md:grid-cols-[60px_1fr_2fr] gap-4 items-baseline hover:border-secondary/30 transition-colors"
                        >
                            <span className="text-secondary/20 text-xs font-mono group-hover:text-accent transition-colors">{p.num}</span>
                            <h3 className="text-xl font-black tracking-tighter text-secondary group-hover:translate-x-1 transition-transform duration-300">
                                {p.title}
                            </h3>
                            <p className="text-secondary/40 font-light text-sm leading-relaxed">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
