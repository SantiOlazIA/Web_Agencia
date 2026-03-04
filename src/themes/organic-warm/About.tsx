import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';

// organic-warm About — split content + image grid, warm serif
// Profile A: food, artesanal, panadería, emprendimiento
// CUSTOMIZE: Replace placeholder text with real client story

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-primary text-secondary">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

                {/* Left: Story */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold">
                        Nuestra Historia
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                        {/* CUSTOMIZE: La historia del cliente en 4-6 palabras */}
                        Hecho con <br /><span className="italic">pasión artesanal</span>
                    </h2>
                    <p className="text-secondary/70 font-light leading-relaxed max-w-md">
                        {/* CUSTOMIZE: Párrafo 1 — quiénes son, cuándo empezaron */}
                        {CLIENT.brandName} nació de la pasión por los sabores auténticos.
                        Cada producto es elaborado con ingredientes seleccionados y el
                        cuidado de una receta familiar transmitida por generaciones.
                    </p>
                    <p className="text-secondary/70 font-light leading-relaxed max-w-md">
                        {/* CUSTOMIZE: Párrafo 2 — valores, proceso, diferenciador */}
                        Creemos que la calidad se siente desde el primer bocado.
                        Por eso nunca comprometemos los tiempos de preparación
                        ni los ingredientes que usamos.
                    </p>

                    {/* Stats — CUSTOMIZE with real numbers */}
                    <div className="grid grid-cols-3 gap-6 pt-4 border-t border-secondary/10">
                        {[
                            { num: '+500', label: 'Clientes felices' },
                            { num: '5', label: 'Años de experiencia' },
                            { num: '100%', label: 'Artesanal' },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-2xl font-serif font-bold text-accent">{stat.num}</div>
                                <div className="text-xs text-secondary/50 mt-1 leading-tight">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right: Image grid */}
                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/10"
                    >
                        {/* CUSTOMIZE: /images/about/about-01.jpg */}
                        <img
                            src="/images/about/about-01.jpg"
                            alt="Proceso artesanal"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/5 mt-6 md:mt-10"
                    >
                        {/* CUSTOMIZE: /images/about/about-02.jpg */}
                        <img
                            src="/images/about/about-02.jpg"
                            alt={CLIENT.brandName}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
