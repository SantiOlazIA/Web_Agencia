// ============================================================
// AGENCY CONFIG — Aurea
// Diseño y Desarrollo Web
// ============================================================

export const CLIENT = {
    brandName: "Aurea",
    tagline: "Diseño y Desarrollo Web.",
    heroTagline: "Diseño Premium · Presencia Digital",

    whatsappPhone: "5492645472091",
    email: "hola@aureadiseno.com",

    navLinks: [
        { href: "#cases", label: "Casos" },
        { href: "#services", label: "Servicios" },
        { href: "#contact", label: "Contacto" },
    ],

    // Portfolio cases — organized by style/industry
    cases: [
        {
            id: "el-gourmet",
            name: "Alimentos",
            category: "Cálido y Acogedor",
            desc: "",
            image: "/images/cases/el-gourmet.jpg",
            url: "#",
        },
        {
            id: "pro-contractor",
            name: "Industria y Minería",
            category: "Brutalista",
            desc: "",
            image: "/images/cases/pro-contractor.jpg",
            url: "#",
        },
        {
            id: "service-clinic",
            name: "Servicios Profesionales Y Tech",
            category: "Minimalista de Alto Impacto",
            desc: "",
            image: "/images/cases/service-clinic.jpg",
            url: "#",
        },
    ],

    // Pricing tiers — features as BUSINESS BENEFITS
    services: [
        {
            id: "base",
            name: "Página web básica",
            price: "2 cuotas de $125.000",
            delivery: "",
            desc: "",
            features: [
                "Secciones Institucionales (Presentación + Contacto)",
                "Alta velocidad de carga",
                "Gráficos de calidad y animaciones sencillas",
                "Integración con WhatsApp, Google Maps e Instagram"
            ],
            highlight: false,
        },
        {
            id: "pro",
            name: "Página web completa",
            price: "2 cuotas de $250.000",
            delivery: "",
            desc: "",
            features: [
                "Catálogo de productos",
                "Cambiá productos e imágenes",
                "Actualizá los precios cuando quieras",
            ],
            highlight: true,
        },
        {
            id: "retainer",
            name: "Mantenimiento",
            price: "Gratis 3 meses, luego $10.000/mes",
            delivery: "",
            desc: "",
            features: [
                "Dominio incluido",
                "Hosting incluido",
                "Seguridad básica incluida",
            ],
            highlight: false,
        },
        {
            id: "analytics",
            name: "Analíticas y Post-venta",
            price: "$10.000/mes (3 meses), luego $30.000/mes",
            delivery: "",
            desc: "",
            features: [
                "Todo lo incluido en Mantenimiento",
                "Reporte mensual de visitas",
                "Análisis de páginas y conversiones",
            ],
            highlight: false,
        },
    ],

    // SEO
    pageTitle: "Aurea — Diseño Web en San Juan, Argentina",
    metaDescription: "Agencia de diseño y desarrollo web en San Juan. Tu sitio online en 5 días, optimizado para convertir visitas en clientes. Pedí tu presupuesto.",

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

    currency: "USD",
} as const;

export type Case = (typeof CLIENT.cases)[number];
export type Service = (typeof CLIENT.services)[number];
