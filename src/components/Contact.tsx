import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CLIENT } from '../lib/client.config';

// Contact — full-width CTA section, WhatsApp primary
// Dark bg (primary) for contrast with surrounding sections

const waUrl = `https://wa.me/${CLIENT.whatsappPhone}?text=${encodeURIComponent('Hola! Quiero consultar sobre un sitio web para mi negocio.')}`;

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-40 px-6 md:px-16 lg:px-24 bg-surface text-primary overflow-hidden border-t border-primary/5">
            <div className="max-w-7xl mx-auto relative">

                {/* Background number */}
                <div className="absolute -top-16 -right-8 text-[20rem] font-serif italic text-primary/[0.02] leading-none select-none pointer-events-none hidden md:block">
                    ?
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl relative z-10"
                >
                    <span className="text-accent text-[10px] tracking-[0.3em] uppercase font-bold mb-8 block">
                        Contacto
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-light tracking-tight text-primary leading-[1.05] mb-10">
                        ¿Tenés un<br />
                        negocio?<br />
                        <span className="italic text-primary/40">Hablemos.</span>
                    </h2>

                    <p className="text-primary/60 font-light leading-relaxed text-lg mb-14 max-w-md">
                        Contanos de tu negocio y en menos de 24hs te enviamos una propuesta.
                        Sin compromiso.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <a
                            href={waUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center justify-center gap-3 bg-accent text-secondary px-10 py-5 font-bold tracking-[0.2em] uppercase text-xs rounded-2xl hover:bg-accent/80 hover:text-primary transition-colors duration-300"
                        >
                            <MessageCircle size={18} />
                            WhatsApp
                        </a>
                        <a
                            href={`mailto:${CLIENT.email}`}
                            className="inline-flex items-center justify-center gap-3 border border-primary/20 text-primary px-10 py-5 font-bold tracking-[0.2em] uppercase text-xs rounded-2xl hover:bg-primary hover:text-secondary transition-colors duration-300"
                        >
                            {CLIENT.email}
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Contact;
