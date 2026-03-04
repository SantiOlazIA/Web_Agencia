import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';

// luxury-dark About — editorial serif, glassmorphism card, portrait image
// Profile B Premium: clínicas estéticas, legales, alto valor
// CUSTOMIZE: Replace placeholder text with real client story

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-secondary text-primary overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* Left: Image with glassmorphism overlay */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[3/4] overflow-hidden rounded-none relative">
                            {/* CUSTOMIZE: /images/about/about-01.jpg — portrait, team, or space */}
                            <img
                                src="/images/about/about-01.jpg"
                                alt={CLIENT.brandName}
                                className="w-full h-full object-cover grayscale brightness-75"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
                        </div>

                        {/* Gold accent line */}
                        <div className="absolute -right-4 top-12 w-[1px] h-32 bg-accent/40" />

                        {/* Glassmorphism stat card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute bottom-8 left-4 right-4 md:-right-8 bg-primary/5 backdrop-blur-md border border-primary/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] p-6"
                        >
                            {/* CUSTOMIZE: Key credential or stat */}
                            <div className="text-accent text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                                Excelencia comprobada
                            </div>
                            <div className="text-3xl font-serif text-primary">
                                +10 años
                            </div>
                            <div className="text-primary/50 text-sm mt-1 font-light">
                                de trayectoria profesional
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Text content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-12 h-[1px] bg-accent" />
                            <span className="text-accent tracking-[0.2em] uppercase text-xs font-semibold">
                                Sobre nosotros
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                            {/* CUSTOMIZE: Propuesta de valor en 4-6 palabras */}
                            La excelencia <br />
                            <span className="italic text-primary/60">como estándar</span>
                        </h2>

                        <p className="text-primary/60 font-light leading-relaxed">
                            {/* CUSTOMIZE: Historia y filosofía — máx 3 líneas */}
                            En {CLIENT.brandName} combinamos la experiencia de años con
                            los estándares más exigentes del sector. Cada cliente recibe
                            una atención personalizada desde el primer contacto.
                        </p>

                        <p className="text-primary/60 font-light leading-relaxed">
                            {/* CUSTOMIZE: Diferenciador clave */}
                            Nuestro compromiso es tu bienestar y satisfacción.
                            Trabajamos con los mejores profesionales y las técnicas
                            más avanzadas disponibles.
                        </p>

                        {/* Credentials / Awards — CUSTOMIZE */}
                        <div className="space-y-4 pt-4">
                            {[
                                'Certificación profesional vigente',
                                'Miembro de asociación del rubro',
                                'Más de 500 clientes atendidos',
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-4 h-[1px] bg-accent flex-shrink-0" />
                                    <span className="text-primary/50 text-sm font-light">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
