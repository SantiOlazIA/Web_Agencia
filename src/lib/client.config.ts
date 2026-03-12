// ============================================================
// AGENCY CONFIG — Aurea
// Diseño y Desarrollo Web
// ============================================================

export const CLIENT = {
    brandName: "Aurea",
    tagline: "Diseño y Desarrollo Web.",
    heroTagline: "Diseño Premium · Presencia Digital",

    whatsappPhone: "5492646274616",
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
                "Integración con WhatsApp y Google Maps"
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
                "Actualizá productos e imágenes",
                "Control total de precios",
            ],
            highlight: true,
        },
        {
            id: "retainer",
            name: "Mantenimiento",
            price: "$5.000/mes",
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
            name: "Post-venta integral",
            price: "$8.000/mes",
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
    pageTitle: "Aurea — Diseno y Desarrollo Web",
    metaDescription: "Agencia de diseno y desarrollo web para negocios argentinos. Tu sitio online en 5 dias, optimizado para convertir visitas en clientes.",

    currency: "USD",
} as const;

export type Case = (typeof CLIENT.cases)[number];
export type Service = (typeof CLIENT.services)[number];
