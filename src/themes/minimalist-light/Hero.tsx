import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';

// minimalist-light Hero — giant H1, editorial layout, warm cream background
// Profile B Boutique: estudios creativos, diseño, consultoras

const Hero = () => {
    return (
        <section className="relative w-full min-h-[100dvh] bg-secondary flex flex-col px-6 md:px-16 lg:px-24 pt-32 pb-12 overflow-hidden">

            {/* Top: small label */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center gap-4"
            >
                <div className="w-6 h-[1px] bg-primary/30" />
                <span className="text-primary/40 text-xs tracking-[0.3em] uppercase font-medium">
                    {CLIENT.heroTagline}
                </span>
            </motion.div>

            {/* Center: giant brandname — flex-1 keeps it vertically centered */}
            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.15 }}
                className="flex-1 flex items-center text-[3.2rem] sm:text-7xl md:text-[7rem] lg:text-[9rem] xl:text-[11rem] font-black text-primary leading-none tracking-tighter py-8"
            >
                {CLIENT.brandName}
            </motion.h1>

            {/* Divider — grows from left */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
                className="w-full h-[1px] bg-primary/15 mb-10"
            />

            {/* Bottom: tagline left, image + CTA right */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.65 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10"
            >
                {/* Tagline */}
                <p className="text-muted text-base md:text-lg leading-relaxed max-w-sm font-light">
                    {CLIENT.tagline}
                </p>

                {/* Image + CTA */}
                <div className="flex items-end gap-8 flex-shrink-0">
                    {/* Small portrait image — grayscale, editorial */}
                    <div className="w-28 md:w-36 aspect-[3/4] overflow-hidden bg-primary/5 flex-shrink-0">
                        <img
                            src="/images/hero/hero.jpg"
                            alt={CLIENT.brandName}
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>

                    {/* CTA block */}
                    <div className="flex flex-col gap-4 pb-2">
                        <a
                            href={CLIENT.heroCTA.href}
                            className="px-8 py-4 bg-primary text-secondary text-sm font-bold tracking-widest uppercase text-center hover:bg-accent transition-colors duration-300"
                        >
                            {CLIENT.heroCTA.label}
                        </a>
                        <a
                            href="#catalog"
                            className="text-xs font-medium tracking-wider uppercase text-primary/40 hover:text-primary transition-colors duration-200 underline underline-offset-4 text-center"
                        >
                            Ver Catálogo
                        </a>
                    </div>
                </div>
            </motion.div>

        </section>
    );
};

export default Hero;
