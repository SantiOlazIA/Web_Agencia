// ============================================================
// AGENCY CONFIG — Aurea
// Diseño y Desarrollo Web
// ============================================================

export const CLIENT = {
    brandName: "Aurea",
    tagline: "Diseño y Desarrollo Web.",
    heroTagline: "Diseño Web · Presencia Digital",

    whatsappPhone: "5492645472091",
    email: "hola@aureadiseno.com",

    navLinks: [
        { href: "#hero", label: "Inicio" },
        { href: "#cases", label: "Casos" },
        { href: "#services", label: "Resoluciones" },
        { href: "#seguridad", label: "Seguridad" }, // Changed to #seguridad to match component ID
        { href: "#contact", label: "Contacto" },
    ],

    // Portfolio cases — organized by style/industry
    cases: [
        {
            id: "el-gourmet",
            name: "Gastronomía",
            category: "Gastronomía",
            desc: "Página web con reservas y carta digital.",
            image: "/images/cases/desktop-el-gourmet.jpg",
            image_mobile: "/images/cases/mobile-el-gourmet.jpg",
            url: "https://website-gourmet-panaderia.vercel.app/",
        },
        {
            id: "pro-contractor",
            name: "Industrial/Minería",
            category: "Industrial/Minería",
            desc: "Presencia digital robusta para captar inversores y mostrar obras.",
            image: "/images/cases/desktop-pro-contractor.jpg",
            image_mobile: "/images/cases/mobile-pro-contractor.jpg",
            url: "https://demo-pro-contractor.vercel.app/",
        },
        {
            id: "professional-services",
            name: "Servicios Profesionales",
            category: "Servicios Profesionales",
            desc: "Sistema de turnos automatizado con dashboard para profesionales.",
            image: "/images/cases/desktop-service-clinic.jpg",
            image_mobile: "/images/cases/mobile-service-clinic.jpg",
            url: "https://demo-service-clinic.vercel.app/",
        }
    ],

    // Pricing tiers — features as BUSINESS BENEFITS
    services: [
        {
            id: "base",
            name: "Presencia Digital",
            price: "Desde $150.000",
            category: "Básica",
            desc: "Ideal para Estudios Contables, Jurídicos, Proveedores Mineros y Tech. Una carta de presentación impecable.",
            features: [
                "Diseño a Medida",
                "WhatsApp",
                "Instagram",
                "Google Maps",
                "Optimización IA"
            ],
            highlight: false,
        },
        {
            id: "gastronomia",
            name: "Restaurantes y Bares",
            price: "Desde $300.000",
            category: "Sectores",
            desc: "Tu propio sistema de reservas sin comisiones de terceros.",
            features: [
                "Diseño a Medida",
                "WhatsApp",
                "Instagram",
                "Google Maps",
                "Optimización IA",
                "Carta Digital, *Autogestionable*"
            ],
            highlight: true,
        },
        {
            id: "real-estate",
            name: "Inmobiliarias",
            price: "Desde $400.000",
            category: "Sectores",
            desc: "Catálogos avanzados que cierran ventas por sí solos.",
            features: [
                "Catálogos *autogestionables*",
                "Galerías HD",
                "Formularios",
                "Optimización IA"
            ],
            highlight: true,
        },
        {
            id: "medicina",
            name: "Clínicas y Salud",
            price: "Desde $600.000",
            category: "Sectores",
            desc: "Automatizá tu clínica. Menos llamadas, más pacientes atendidos.",
            features: [
                "Todo lo de presencia digital +",
                "Panel de turnos autogestionable",
                "Integración con Google Calendar"
            ],
            highlight: true,
        },
        {
            id: "retainer",
            name: "Mantenimiento",
            price: "Gratis 3 meses, luego $25.000/mes",
            category: "Post-venta",
            desc: "Seguridad y estabilidad para tu tranquilidad total.",
            features: [
                "Hosting y Dominio",
                "Seguridad y Backups",
                "Soporte Técnico"
            ],
            highlight: false,
        },
        {
            id: "analytics",
            name: "Analíticas y Crecimiento",
            price: "$40.000/mes",
            category: "Post-venta",
            desc: "Datos que impulsan decisiones inteligentes.",
            features: [
                "Plan Mantenimiento",
                "Reportes de Visitas",
                "Análisis de Conversión",
            ],
            highlight: false,
        },
    ],

    // SEO
    pageTitle: "Aurea — Diseño Web Profesional y Soluciones Digitales",
    metaDescription: "Agencia de diseño web en San Juan. Creamos sitios para Restaurantes, Inmobiliarias y Clínicas con Optimización IA y sistemas autogestionables. Impulsá tu negocio hoy.",

    // SEO extendido — actualizar siteUrl cuando se registre dominio propio
    seo: {
        siteUrl: "https://aureadigital.online",
        city: "San Juan",
        region: "San Juan, Argentina",
        serviceArea: ["San Juan", "Mendoza", "Córdoba", "Argentina"],
        keywords: [
            "diseño web san juan",
            "páginas web para restaurantes san juan",
            "sitios web para inmobiliarias argentina",
            "sistema de turnos para clínicas web",
            "optimización ia para sitios web",
            "desarrollo web profesional san juan",
            "agencia web san juan",
            "presupuesto página web san juan",
            "diseño web con whatsapp san juan",
            "sitios web autogestionables argentina",
        ],
        ogImage: "/images/og-cover.jpg",
        twitterHandle: "",
        latitude: -31.5375,
        longitude: -68.5364,
    },

    currency: "ARS",
} as const;

export type Case = (typeof CLIENT.cases)[number];
export type Service = (typeof CLIENT.services)[number];
