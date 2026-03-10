import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Layers, MessageCircle, Menu, X } from 'lucide-react';

/*
 * GoldNavbar — Fixed-top floating glassmorphism toolbar
 *
 * Features:
 * - Spinning 4-layer gold conic-gradient active indicator ring
 * - Bouncy overshoot easing on indicator slide
 * - Thin stroke icons with dividers
 * - Film grain + radial ambient glow
 * - Mobile drawer fallback
 */

const NAV_ITEMS = [
    { id: 'hero', label: 'Inicio', icon: Home, href: '#hero' },
    { id: 'cases', label: 'Casos', icon: Briefcase, href: '#cases' },
    { id: 'services', label: 'Servicios', icon: Layers, href: '#services' },
    { id: 'contact', label: 'Contacto', icon: MessageCircle, href: '#contact' },
];

const GoldNavbar = () => {
    const [activeId, setActiveId] = useState('hero');
    const [mobileOpen, setMobileOpen] = useState(false);

    // Track active section via IntersectionObserver
    useEffect(() => {
        const sections = NAV_ITEMS.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter(e => e.isIntersecting);
                if (visible.length > 0) {
                    // Pick the one with highest intersection ratio
                    const best = visible.reduce((a, b) => a.intersectionRatio > b.intersectionRatio ? a : b);
                    setActiveId(best.target.id);
                }
            },
            { threshold: 0.3, rootMargin: '-10% 0px -10% 0px' }
        );

        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    const handleClick = useCallback((href: string, id: string) => {
        setActiveId(id);
        setMobileOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    const activeIndex = NAV_ITEMS.findIndex(item => item.id === activeId);

    return (
        <>
            {/* Ambient glow behind navbar */}
            <div
                className="fixed top-0 right-0 w-[400px] h-[200px] pointer-events-none z-40 hidden md:block"
                style={{
                    background: 'radial-gradient(ellipse at 70% 0%, rgba(201,168,76,0.06) 0%, transparent 70%)',
                }}
            />

            {/* Desktop navbar */}
            <motion.header
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 7.5 }}
                className="fixed top-6 right-6 z-50 hidden md:flex"
            >
                <nav
                    className="relative flex items-center gap-1 px-2 py-2 rounded-[22px]"
                    style={{
                        background: 'rgba(10, 10, 8, 0.75)',
                        backdropFilter: 'blur(24px) saturate(1.2)',
                        WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
                        border: '1px solid rgba(201, 168, 76, 0.08)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)',
                    }}
                >
                    {/* Spinning gold ring indicator */}
                    <motion.div
                        className="absolute top-2 h-[calc(100%-16px)]"
                        style={{ width: 52 }}
                        animate={{ left: 8 + activeIndex * 56 }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 22,
                            mass: 0.8,
                        }}
                    >
                        {/* Layer 1: Glow */}
                        <div
                            className="absolute inset-0 rounded-[18px]"
                            style={{
                                boxShadow: '0 0 20px rgba(232, 175, 72, 0.15), 0 0 40px rgba(232, 175, 72, 0.05)',
                            }}
                        />

                        {/* Layer 2: Clip container + spinning gradient */}
                        <div className="absolute inset-0 rounded-[18px] overflow-hidden">
                            <div
                                className="absolute"
                                style={{
                                    width: '200%',
                                    height: '200%',
                                    top: '50%',
                                    left: '50%',
                                    background: `conic-gradient(
                                        from 0deg,
                                        #533517 0%,
                                        #c49746 8%,
                                        #feeaa5 16%,
                                        #ffffff 17.5%,
                                        #feeaa5 19%,
                                        #c49746 25%,
                                        #ffc0cb 26%,
                                        #533517 27.5%,
                                        #8B6914 35%,
                                        #c49746 42%,
                                        #feeaa5 48%,
                                        #94b8ff 49.5%,
                                        #c49746 51%,
                                        #533517 55%,
                                        #c49746 62%,
                                        #feeaa5 68%,
                                        #ffffff 69.5%,
                                        #feeaa5 71%,
                                        #c49746 78%,
                                        #ffc0cb 79%,
                                        #533517 80.5%,
                                        #8B6914 88%,
                                        #c49746 94%,
                                        #94b8ff 99%,
                                        #533517 100%
                                    )`,
                                    animation: 'spin-ring 4.5s linear infinite',
                                }}
                            />
                        </div>

                        {/* Layer 3: Inner plate */}
                        <div
                            className="absolute rounded-[16px]"
                            style={{
                                inset: '2px',
                                background: 'rgba(10, 10, 8, 0.92)',
                            }}
                        />
                    </motion.div>

                    {/* Nav buttons */}
                    {NAV_ITEMS.map((item, i) => {
                        const Icon = item.icon;
                        const isActive = item.id === activeId;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleClick(item.href, item.id)}
                                className="relative z-10 flex items-center justify-center w-[52px] h-[44px] cursor-pointer bg-transparent border-none"
                                aria-label={item.label}
                            >
                                <Icon
                                    size={20}
                                    strokeWidth={1.5}
                                    className={`transition-colors duration-300 ${isActive ? 'text-accent' : 'text-primary/40 hover:text-primary/70'
                                        }`}
                                />
                                {/* Divider between items */}
                                {i < NAV_ITEMS.length - 1 && (
                                    <div
                                        className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4"
                                        style={{ background: 'rgba(245, 240, 232, 0.06)' }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </nav>
            </motion.header>

            {/* Mobile header */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 7.5 }}
                className="fixed top-0 w-full z-50 px-6 py-5 flex justify-between items-center md:hidden"
                style={{
                    background: 'rgba(10, 10, 8, 0.8)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                }}
            >
                <img src="/images/logo-aurea-clean.png" alt="Aurea" className="h-8 w-auto" style={{ mixBlendMode: 'multiply' }} />
                <button
                    onClick={() => setMobileOpen(true)}
                    className="text-primary hover:text-accent transition-colors p-2 bg-transparent border-none cursor-pointer"
                    aria-label="Open menu"
                >
                    <Menu size={24} strokeWidth={1.5} />
                </button>
            </motion.header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[60] md:hidden"
                            style={{
                                background: 'rgba(10, 10, 8, 0.85)',
                                backdropFilter: 'blur(8px)',
                            }}
                            onClick={() => setMobileOpen(false)}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                            className="fixed top-0 right-0 z-[70] h-full w-3/4 max-w-xs flex flex-col px-8 py-10 md:hidden"
                            style={{ background: 'var(--color-surface)' }}
                        >
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="self-end text-primary hover:text-accent transition-colors mb-12 p-2 bg-transparent border-none cursor-pointer"
                                aria-label="Close menu"
                            >
                                <X size={24} strokeWidth={1.5} />
                            </button>

                            <nav className="flex flex-col gap-8">
                                {NAV_ITEMS.map((item, i) => {
                                    const Icon = item.icon;
                                    return (
                                        <motion.button
                                            key={item.id}
                                            onClick={() => handleClick(item.href, item.id)}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.08 }}
                                            className="flex items-center gap-4 text-2xl font-serif text-primary hover:text-accent transition-colors bg-transparent border-none cursor-pointer text-left"
                                        >
                                            <Icon size={20} strokeWidth={1.5} />
                                            {item.label}
                                        </motion.button>
                                    );
                                })}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default GoldNavbar;
