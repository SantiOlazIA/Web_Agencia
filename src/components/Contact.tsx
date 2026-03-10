import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CLIENT } from '../lib/client.config';

// Contact — full-width CTA section with gold decorative elements

const waUrl = `https://wa.me/${CLIENT.whatsappPhone}?text=${encodeURIComponent('Hola! Quiero consultar sobre un sitio web para mi negocio.')}`;

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-40 px-6 md:px-16 lg:px-24 bg-surface text-primary overflow-hidden border-t border-border">
            <div className="max-w-7xl mx-auto relative">

                {/* Gold decorative "?" */}
                <div
                    className="absolute -top-16 -right-8 text-[20rem] font-serif italic leading-none select-none pointer-events-none hidden md:block"
                    style={{ color: 'rgba(201, 168, 76, 0.03)' }}
                >
                    ?
                </div>

                {/* Ambient glow behind content */}
                <div
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none hidden md:block"
                    style={{
                        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
                    }}
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl relative z-10"
                >
                    <span className="gold-shimmer text-[10px] tracking-[0.3em] uppercase font-bold mb-8 block">
                        Contacto
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif font-light tracking-tight text-primary leading-[1.05] mb-10">
                        Tenes un<br />
                        negocio?<br />
                        <span className="italic text-accent/60">Hablemos.</span>
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
                            className="group inline-flex items-center justify-center gap-3 gold-cta text-secondary px-10 py-5 font-bold tracking-[0.2em] uppercase text-xs rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300"
                        >
                            <MessageCircle size={18} strokeWidth={1.5} />
                            WhatsApp
                        </a>
                        <a
                            href={`mailto:${CLIENT.email}`}
                            className="inline-flex items-center justify-center gap-3 border border-border text-primary px-10 py-5 font-bold tracking-[0.2em] uppercase text-xs rounded-2xl hover:bg-accent hover:text-secondary hover:border-accent transition-all duration-300 active:scale-[0.98]"
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
