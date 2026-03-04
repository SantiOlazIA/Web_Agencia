import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';

// brutalist-dark About — full-width, border-t list of values, no rounded corners
// Profile B: industrial, construcción, tecnología, corporativo
// CUSTOMIZE: Replace placeholder text with real client story

const VALORES = [
    // CUSTOMIZE: Replace with real company values / differentiators
    { num: '01', title: 'Experiencia', desc: 'Años de trabajo en el rubro nos dan la solidez para ejecutar proyectos de cualquier escala.' },
    { num: '02', title: 'Precisión', desc: 'Cada detalle cuenta. Entregamos exactamente lo que prometemos, en tiempo y forma.' },
    { num: '03', title: 'Resultados', desc: 'No vendemos servicios. Entregamos soluciones que generan impacto real en tu negocio.' },
];

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-secondary text-primary">
            <div className="max-w-7xl mx-auto px-6 md:px-16">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 md:mb-24"
                >
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-8 h-[2px] bg-accent" />
                            <span className="text-accent text-xs tracking-[0.3em] uppercase font-black">
                                Quiénes somos
                            </span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-primary leading-none uppercase">
                            {/* CUSTOMIZE: 2-3 palabras impactantes */}
                            Construimos<br />el futuro
                        </h2>
                    </div>
                    <div className="flex items-end">
                        <p className="text-primary/60 leading-relaxed font-light max-w-md">
                            {/* CUSTOMIZE: Descripción de la empresa — quiénes son, qué hacen */}
                            {CLIENT.brandName} es una empresa con trayectoria en el rubro.
                            Trabajamos con un equipo especializado para garantizar resultados
                            que superan las expectativas de cada cliente.
                        </p>
                    </div>
                </motion.div>

                {/* Values list — border-t style */}
                <div className="border-b border-primary/10">
                    {VALORES.map((v, i) => (
                        <motion.div
                            key={v.num}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="group border-t border-primary/10 py-8 grid grid-cols-1 md:grid-cols-[80px_1fr_1fr] gap-4 md:gap-8 items-start hover:border-accent/40 transition-colors duration-300"
                        >
                            <span className="text-accent font-black text-sm tracking-widest">{v.num}</span>
                            <h3 className="text-2xl md:text-3xl font-black tracking-tighter uppercase group-hover:translate-x-2 transition-transform duration-300">
                                {v.title}
                            </h3>
                            <p className="text-primary/50 font-light leading-relaxed text-sm md:text-base">
                                {v.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary/10"
                >
                    {/* CUSTOMIZE: Real numbers */}
                    {[
                        { num: '+100', label: 'Proyectos completados' },
                        { num: '10+', label: 'Años en el mercado' },
                        { num: '98%', label: 'Clientes satisfechos' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center md:text-left">
                            <div className="text-3xl md:text-4xl font-black text-accent tracking-tighter">{stat.num}</div>
                            <div className="text-xs text-primary/40 uppercase tracking-widest mt-1">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default About;
