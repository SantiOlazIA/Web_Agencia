import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Eye, Banknote, MessageCircle, Menu, X, CircleHelp, ShieldCheck, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    { id: 'cases', label: 'Ejemplos', icon: Eye, href: '#cases' },
    { id: 'process', label: 'Nosotros', icon: CircleHelp, href: '#process' },
    { id: 'seguridad', label: 'Seguridad', icon: ShieldCheck, href: '#seguridad' },
    { id: 'services', label: 'Precios', icon: Banknote, href: '#services' },
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

    return (
        <>
            {/* Ambient glow behind navbar */}
            <div
                className="fixed top-0 right-0 w-[400px] h-[200px] pointer-events-none z-40 hidden md:block"
                style={{
                    background: 'radial-gradient(ellipse at 70% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)',
                }}
            />

            {/* Desktop logo (top-left) - Icon + Text Horizontal Layout */}
            <motion.a
                href="#hero"
                onClick={(e) => { e.preventDefault(); handleClick('#hero', 'hero') }}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="fixed top-6 left-8 lg:left-12 z-50 hidden md:flex items-center gap-1.5 cursor-pointer hover:opacity-80 transition-all pl-3 pr-5 py-2 rounded-full"
                style={{
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(24px) saturate(1.2)',
                    WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
                    border: '1px solid rgba(0, 0, 0, 0.06)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
                }}
            >
                {/* Scaled & Cropped Icon (Masked for perfect color match) */}
                <div className="relative w-12 h-12 overflow-hidden flex-shrink-0 drop-shadow-[0_2px_10px_rgba(234,179,8,0.2)]">
                    <div
                        className="absolute top-0 left-0 w-full h-full bg-[#EAB308]"
                        style={{
                            WebkitMaskImage: 'url(/images/logo-aurea-clean.png)',
                            WebkitMaskSize: '100% auto',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'top center',
                            maskImage: 'url(/images/logo-aurea-clean.png)',
                            maskSize: '100% auto',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'top center',
                            transform: 'scale(1.4) translateY(-3px)',
                            transformOrigin: 'top center'
                        }}
                    />
                </div>
                {/* Brand Text */}
                <span className="font-serif text-[#EAB308] text-2xl font-bold tracking-[0.2em] uppercase -translate-y-[2px]">
                    Aurea
                </span>
            </motion.a>

            {/* Desktop navbar (right) */}
            <motion.header
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="fixed top-6 right-8 lg:right-12 z-50 hidden md:flex"
            >
                <nav
                    className="relative flex items-center gap-1 px-2 py-2 rounded-[22px]"
                    style={{
                        background: 'rgba(255, 255, 255, 0.8)',
                        backdropFilter: 'blur(24px) saturate(1.2)',
                        WebkitBackdropFilter: 'blur(24px) saturate(1.2)',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
                    }}
                >
                    {/* Nav buttons */}
                    {NAV_ITEMS.map((item, i) => {
                        const Icon = item.icon;
                        const isActive = item.id === activeId;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleClick(item.href, item.id)}
                                className="relative z-10 flex items-center justify-center h-[44px] cursor-pointer bg-transparent border-none px-4"
                                aria-label={item.label}
                            >
                                <div className="flex items-center gap-2 group">
                                    <Icon
                                        size={20}
                                        strokeWidth={1.5}
                                        className={`transition-colors duration-300 ${isActive ? 'text-accent' : 'text-muted group-hover:text-primary'
                                            }`}
                                    />
                                    <span className={`text-sm font-bold tracking-wider hidden lg:block transition-all duration-300 ${isActive ? 'text-accent' : 'text-transparent w-0 opacity-0 group-hover:text-primary group-hover:w-auto group-hover:opacity-100 group-hover:pl-1'}`}>
                                        {item.label}
                                    </span>
                                </div>
                                {/* Divider between items */}
                                {i < NAV_ITEMS.length - 1 && (
                                    <div
                                        className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-4"
                                        style={{ background: 'rgba(0, 0, 0, 0.06)' }}
                                    />
                                )}
                            </button>
                        );
                    })}

                </nav>
            </motion.header>

            {/* Client login button — below desktop navbar */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                className="fixed top-[112px] right-8 lg:right-12 z-50 hidden md:block"
            >
                <Link
                    to="/admin"
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black tracking-widest uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                    style={{
                        background: 'var(--color-accent)',
                        color: '#1a1200',
                        boxShadow: '0 4px 20px rgba(234,179,8,0.35)',
                    }}
                >
                    <Lock size={13} strokeWidth={2.5} />
                    Login de clientes
                </Link>
            </motion.div>

            {/* Mobile header */}
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
                className="fixed top-0 w-full z-50 px-6 pt-3 pb-4 flex justify-between items-center md:hidden"
                style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    borderBottom: '1px solid rgba(0,0,0,0.05)'
                }}
            >
                <div className="flex items-center gap-2 -translate-y-1">
                    {/* Scaled & Cropped Icon Mobile (Masked) */}
                    <div className="relative w-10 h-10 overflow-hidden flex-shrink-0 drop-shadow-[0_2px_8px_rgba(234,179,8,0.2)]">
                        <div
                            className="absolute top-0 left-0 w-full h-full bg-[#EAB308]"
                            style={{
                                WebkitMaskImage: 'url(/images/logo-aurea-clean.png)',
                                WebkitMaskSize: '100% auto',
                                WebkitMaskRepeat: 'no-repeat',
                                WebkitMaskPosition: 'top center',
                                maskImage: 'url(/images/logo-aurea-clean.png)',
                                maskSize: '100% auto',
                                maskRepeat: 'no-repeat',
                                maskPosition: 'top center',
                                transform: 'scale(1.4)',
                                transformOrigin: 'top center'
                            }}
                        />
                    </div>
                    {/* Brand Text Mobile */}
                    <span className="font-serif text-[#EAB308] text-xl font-bold tracking-[0.2em] uppercase pb-1">
                        Aurea
                    </span>
                </div>
                <Link
                    to="/admin"
                    className="flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-accent border border-accent/30 rounded-full px-3 py-1.5 hover:bg-accent/10 transition-colors"
                >
                    <Lock size={13} strokeWidth={2} />
                    Login
                </Link>
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
                                background: 'rgba(255, 255, 255, 0.85)',
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

                                {/* Admin link */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: NAV_ITEMS.length * 0.08 }}
                                    className="pt-4 border-t border-border mt-2"
                                >
                                    <Link
                                        to="/admin"
                                        onClick={() => setMobileOpen(false)}
                                        className="flex items-center gap-4 text-sm font-semibold text-muted hover:text-accent transition-colors"
                                    >
                                        <Lock size={18} strokeWidth={1.5} />
                                        Panel de admin
                                    </Link>
                                </motion.div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default GoldNavbar;
