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
        { href: "#cases", label: "Casos" },
        { href: "#services", label: "Resoluciones" },
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
            url: "https://elgourmetpanaderia.vercel.app/",
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
            id: "service-clinic",
            name: "Servicios Médicos",
            category: "Servicios Médicos",
            desc: "Sistema de turnos automatizado con dashboard para los doctores.",
            image: "/images/cases/desktop-service-clinic.jpg", // Reusing for demo
            image_mobile: "/images/cases/mobile-service-clinic.jpg",
            url: "https://demo-service-clinic.vercel.app/",
        },
        {
            id: "real-estate",
            name: "Construcción",
            category: "Construcción",
            desc: "Catálogo de proyectos con filtros avanzados y galería inmersiva.",
            image: "/images/cases/desktop-pro-contractor.jpg", // Placeholder
            image_mobile: "/images/cases/mobile-pro-contractor.jpg", // Placeholder
            url: "https://aureadigital.online",
        },
        {
            id: "law-firm",
            name: "Servicios Profesionales",
            category: "Servicios Profesionales",
            desc: "Presencia online y captación de clientes para servicios profesionales.",
            image: "/images/cases/desktop-service-clinic.jpg", // Placeholder
            image_mobile: "/images/cases/mobile-service-clinic.jpg", // Placeholder
            url: "https://aureadigital.online",
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
                "SEO y Velocidad"
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
                "Reservas Integradas",
                "Carta Digital",
                "Gestión de Mesas",
                "Diseño Gastronómico"
            ],
            highlight: true,
        },
        {
            id: "real-estate",
            name: "Inmobiliarias y Motores",
            price: "Desde $400.000",
            category: "Sectores",
            desc: "Catálogos avanzados que cierran ventas por sí solos.",
            features: [
                "Catálogo Propiedades",
                "Galerías HD",
                "Formularios",
                "Integración CRM"
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
                "Sistema de Turnos",
                "Panel Médico",
                "Alertas Automáticas",
                "Fichas Médicas"
            ],
            highlight: true,
        },
        {
            id: "retainer",
            name: "Mantenimiento",
            price: "Gratis 3 meses, luego $15.000/mes",
            category: "Post-venta",
            desc: "",
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
            price: "$30.000/mes",
            category: "Post-venta",
            desc: "",
            features: [
                "Plan Mantenimiento",
                "Reportes de Visitas",
                "Análisis de Conversión",
            ],
            highlight: false,
        },
    ],

    // SEO
    pageTitle: "Aurea — Diseño Web en San Juan, Argentina",
    metaDescription: "Agencia de diseño y desarrollo web en San Juan. Mayor calidad por menor costo, sitios optimizados para convertir visitas en clientes. Pedí tu presupuesto.",

    // SEO extendido — actualizar siteUrl cuando se registre dominio propio
    seo: {
        siteUrl: "https://aureadigital.online",
        city: "San Juan",
        region: "San Juan, Argentina",
        serviceArea: ["San Juan", "Mendoza", "Córdoba", "Argentina"],
        keywords: [
            "diseño web san juan",
            "páginas web san juan argentina",
            "desarrollo web profesional san juan",
            "agencia web san juan",
            "presupuesto página web san juan",
            "crear página web para negocio san juan",
            "diseño web para pymes argentina",
            "página web barata san juan",
            "sitio web rápido argentina",
            "diseño web con whatsapp san juan",
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
