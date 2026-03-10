import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0A0A08] px-4"
        >
            {/* Background Radial Glow */}
            <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
                <div className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-accent/5 rounded-full blur-[120px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl mx-auto">

                {/* Logo Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        opacity: { delay: 0.2, duration: 2, ease: [0.25, 1, 0.5, 1] },
                        y: { delay: 0.2, duration: 2, ease: [0.25, 1, 0.5, 1] },
                        scale: { delay: 0.2, duration: 3, ease: 'easeOut' }
                    }}
                    className="w-full max-w-[20rem] sm:max-w-[26rem] md:max-w-[30rem] lg:max-w-[34rem]"
                >
                    <img
                        src="/images/logo-aurea-clean.png"
                        alt="AUREA Logo"
                        className="w-full h-auto max-h-[75vh] object-contain drop-shadow-[0_0_25px_rgba(201,168,76,0.15)]"
                    />
                </motion.div>

            </div>

            {/* Scroll Indicator (Optional but nice for luxury feel) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 2 }}
                className="absolute bottom-24 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-muted text-xs tracking-widest pointer-events-none"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-transparent via-accent/50 to-transparent mt-4"
                />
            </motion.div>
        </section>
    );
};

export default Hero;
