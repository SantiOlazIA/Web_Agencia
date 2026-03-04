import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';

// organic-warm Hero — split-screen layout
// Profile A: food, artesanal, panadería, emprendimiento

const Hero = () => {
    return (
        <section className="relative w-full min-h-[100dvh] flex flex-col md:flex-row items-center bg-secondary overflow-hidden">

            {/* Left: text content */}
            <div className="relative z-10 flex flex-col justify-center w-full md:w-1/2 px-8 md:px-16 pt-32 pb-16 md:py-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="flex flex-col items-start"
                >
                    <span className="text-accent text-xs tracking-[0.3em] uppercase mb-6 font-medium">
                        {CLIENT.heroTagline}
                    </span>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-primary leading-tight mb-6">
                        {CLIENT.brandName}
                    </h1>

                    <p className="text-lg text-muted max-w-md mb-10 font-light leading-relaxed">
                        {CLIENT.tagline}
                    </p>

                    <a
                        href={CLIENT.heroCTA.href}
                        className="bg-primary text-secondary px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:brightness-110 transition-all duration-300"
                    >
                        {CLIENT.heroCTA.label}
                    </a>
                </motion.div>
            </div>

            {/* Right: hero image — transparent overlay on mobile, full on desktop */}
            <div className="absolute right-0 top-0 w-full md:relative md:w-1/2 h-full opacity-10 md:opacity-100">
                <motion.div
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2 }}
                    className="w-full h-full"
                >
                    <img
                        src="/images/hero/hero.jpg"
                        alt={CLIENT.brandName}
                        className="w-full h-full object-cover object-center md:rounded-l-3xl shadow-2xl"
                    />
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;
