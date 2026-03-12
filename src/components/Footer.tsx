import { CLIENT } from '../lib/client.config';

const Footer = () => {
    return (
        <footer className="bg-secondary text-primary py-12 border-t border-border">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                <div className="col-span-1 md:col-span-2 space-y-6">
                    <div className="flex items-center gap-3">
                        {/* Scaled & Cropped Icon (Masked) */}
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
                                    transform: 'scale(1.4)',
                                    transformOrigin: 'top center'
                                }}
                            />
                        </div>
                        <span className="font-serif text-[#EAB308] text-2xl font-bold tracking-[0.25em] uppercase pt-1">
                            Aurea
                        </span>
                    </div>
                    <p className="text-sm text-primary/50 max-w-sm leading-relaxed font-light">
                        {CLIENT.tagline}
                    </p>
                </div>

                <div>
                    <h4 className="uppercase tracking-widest text-xs font-semibold mb-4 text-primary/40">Links</h4>
                    <ul className="space-y-2 text-sm text-muted">
                        {CLIENT.navLinks.map(link => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:text-accent transition-colors">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="uppercase tracking-widest text-xs font-semibold mb-4 text-primary/40">Contacto</h4>
                    <ul className="space-y-2 text-sm text-muted">
                        <li>
                            <a href={`mailto:${CLIENT.email}`} className="hover:text-accent transition-colors">{CLIENT.email}</a>
                        </li>
                        <li>
                            <a href={`https://wa.me/${CLIENT.whatsappPhone}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-border text-xs text-muted flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} {CLIENT.brandName}. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
