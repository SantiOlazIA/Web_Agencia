import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';

// luxury-dark Hero — editorial serif, background image with luminosity overlay
// Profile B Premium: clínicas estéticas, legales, alto valor

const Hero = () => {
    return (
        <section className="relative w-full min-h-[100dvh] flex flex-col justify-center bg-secondary px-6 md:px-12 lg:px-20 overflow-hidden border-b border-primary/5">

            {/* Background image — luminosity blend, gradient overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <img
                    src="/images/hero/hero.jpg"
                    alt={CLIENT.brandName}
                    className="w-full h-full object-cover object-top opacity-50 grayscale mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-secondary/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl mt-28 md:mt-48">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-primary mb-8 leading-[1.05] tracking-tight">
                        {CLIENT.brandName}
                    </h1>

                    <div className="flex items-center gap-6 mb-8 mt-10 md:mt-14">
                        <div className="w-16 h-[1px] bg-accent" />
                        <span className="text-accent tracking-[0.2em] uppercase text-xs md:text-sm font-semibold">
                            {CLIENT.heroTagline}
                        </span>
                    </div>

                    <p className="text-lg md:text-xl text-primary/60 mb-12 max-w-xl font-light leading-relaxed">
                        {CLIENT.tagline}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 pb-24 md:pb-12">
                        <a
                            href={CLIENT.heroCTA.href}
                            className="px-10 py-5 bg-accent text-secondary font-bold tracking-widest uppercase text-sm text-center rounded-full transition-all hover:brightness-110 shadow-lg"
                        >
                            {CLIENT.heroCTA.label}
                        </a>
                        <a
                            href="#catalog"
                            className="px-10 py-5 border border-primary/20 text-primary uppercase text-sm tracking-widest font-bold text-center rounded-full transition-colors hover:bg-primary/10"
                        >
                            Ver Catálogo
                        </a>
                    </div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
