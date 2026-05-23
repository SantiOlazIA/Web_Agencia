import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
    {
        q: "¿Por qué elegir Aurea para mi diseño web?",
        a: "En Aurea combinamos diseño de alta gama con Optimización IA para que tu sitio no solo se vea increíble, sino que también indexe mejor en buscadores y asistentes de IA. Ofrecemos calidad de agencia boutique a costos competitivos."
    },
    {
        q: "¿Qué es la Optimización IA y cómo me beneficia?",
        a: "Implementamos estructura de datos avanzada y optimización de contenido para que los motores de búsqueda y las IAs (como ChatGPT y Gemini) entiendan perfectamente qué ofrece tu negocio, aumentando tus posibilidades de ser citado y recomendado."
    },
    {
        q: "¿Tendré control total sobre el contenido de mi página?",
        a: "¡Sí! Nuestros sitios son *Autogestionables*. Esto significa que podrás actualizar tu carta digital, catálogo de propiedades o panel de turnos de forma sencilla y sin depender de nosotros para cambios menores."
    },
    {
        q: "¿Cuáles son los métodos de pago?",
        a: "Aceptamos transferencias bancarias, Mercado Pago y USD. Además, ofrecemos la posibilidad de financiar tu sitio en 3 cuotas sin interés para facilitar tu inversión."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-white px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 text-accent mb-4">
                        <HelpCircle size={24} />
                        <span className="font-bold tracking-widest uppercase text-sm">Preguntas Frecuentes</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                        Resolvé tus <span className="text-accent underline decoration-slate-200 underline-offset-8">Dudas</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden hover:border-accent/30 transition-colors duration-300">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left bg-slate-50/50 hover:bg-slate-50 transition-colors"
                            >
                                <span className="font-bold text-slate-800 text-lg pr-8">{faq.q}</span>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-accent shrink-0"
                                >
                                    <ChevronDown size={24} />
                                </motion.div>
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="p-6 pt-2 text-slate-600 bg-white leading-relaxed border-t border-slate-50">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
