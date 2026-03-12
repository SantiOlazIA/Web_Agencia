import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CLIENT } from '../lib/client.config';

// Contact — full-width CTA section with gold decorative elements

const waUrl = `https://wa.me/${CLIENT.whatsappPhone}?text=${encodeURIComponent('Hola! Quiero consultar sobre un sitio web para mi negocio.')}`;

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
                    <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tighter uppercase text-slate-900 leading-[0.9] mb-8 relative z-10 w-full mt-2">
                        HAY UN CLIENTE<br />
                        QUE TE BUSCA.<br />
                        <span className="text-accent">QUE TE ENCUENTRE.</span>
                    </h2>

                    <p className="text-slate-500 font-medium leading-relaxed text-lg mb-10 max-w-md relative z-10">
                        Hacé tu consulta. Te respondemos en menos de 24hs con una propuesta a medida. Sin compromiso.
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
