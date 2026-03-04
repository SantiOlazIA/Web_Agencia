import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';

// brutalist-dark Hero — full-bleed image, left-aligned text, sharp corners
// Profile B: industrial, construcción, tecnología, corporativo

const Hero = () => {
    return (
        <section className="relative w-full min-h-[100dvh] flex flex-col justify-center bg-secondary px-6 md:px-16 overflow-hidden">

            {/* Full-bleed background image — grayscale, dark */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    src="/images/hero/hero.jpg"
                    alt={CLIENT.brandName}
                    className="w-full h-full object-cover grayscale brightness-50 contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/60 to-transparent w-full md:w-3/4" />
            </div>

            <motion.div
                className="relative z-10 w-full max-w-7xl mx-auto mt-28 md:mt-32"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {/* Eyebrow line */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-[2px] bg-accent" />
                    <span className="text-accent font-black tracking-[0.3em] uppercase text-xs md:text-sm">
                        {CLIENT.heroTagline}
                    </span>
                </div>

                <div className="max-w-4xl">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[6rem] font-sans font-black text-primary mb-8 leading-[0.95] tracking-tighter uppercase">
                        {CLIENT.brandName}
                    </h1>

                    <p className="text-lg md:text-xl text-primary/70 mb-12 max-w-2xl font-light leading-relaxed">
                        {CLIENT.tagline}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        {/* Primary CTA — slide-in accent overlay */}
                        <a
                            href={CLIENT.heroCTA.href}
                            className="group relative inline-flex justify-center items-center bg-primary text-secondary px-10 py-5 font-black tracking-widest uppercase text-sm overflow-hidden"
                        >
                            <span className="relative z-10 transition-colors group-hover:text-primary">{CLIENT.heroCTA.label}</span>
                            <div className="absolute inset-0 bg-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                        </a>
                        {/* Secondary CTA */}
                        <a
                            href="#catalog"
                            className="inline-flex justify-center items-center border border-primary/20 text-primary px-10 py-5 font-bold tracking-widest uppercase text-sm hover:bg-primary/5 transition-colors"
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
