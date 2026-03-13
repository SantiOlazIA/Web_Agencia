import { motion } from 'framer-motion';

// Contact — full-width CTA section with gold decorative elements

const Contact = () => {
    return (
        <section id="contact" className="py-12 md:py-20 px-6 md:px-16 lg:px-24 bg-surface text-primary overflow-hidden border-t border-border">
            <div className="max-w-7xl mx-auto relative">

                {/* Abstract Glow instead of serif ? */}
                <motion.div
                    animate={{ y: [-20, 20, -20], scale: [1, 1.1, 1] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none hidden md:block"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl relative z-10"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter uppercase text-slate-900 leading-[0.95] mb-6 relative z-10 w-full mt-2">
                        <span style={{ color: '#25D366' }}>+</span>PRESENCIA<br />
                        <span style={{ color: '#25D366' }}>+</span>PROFESIONALISMO<br />
                        <span className="text-accent">↑</span> EXPERIENCIA DE USUARIO<br />
                        <span className="text-accent">¿VALE LA PENA EL INTENTO?</span>
                    </h2>

                    <p className="text-slate-500 font-medium leading-relaxed text-lg max-w-md relative z-10">
                        Sin complicaciones. Hacé tu consulta y te respondemos en menos de 24hs.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
