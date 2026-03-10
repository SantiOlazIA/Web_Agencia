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

    // Portfolio cases — include ONE concrete outcome per entry
    cases: [
        {
            id: "el-gourmet",
            name: "El Gourmet Panaderia",
            category: "Food & Artesanal",
            desc: "Catalogo online + pedidos por WhatsApp. Mas pedidos, menos llamadas.",
            image: "/images/cases/el-gourmet.jpg",
            url: "https://website-gourmet-panaderia.vercel.app/",
        },
        {
            id: "pro-contractor",
            name: "Pro Contractor",
            category: "Construccion",
            desc: "Sitio profesional que genera consultas sin necesidad de publicidad paga.",
            image: "/images/cases/pro-contractor.jpg",
            url: "https://demo-pro-contractor.vercel.app/",
        },
        {
            id: "service-clinic",
            name: "Service Clinic",
            category: "Clinica Estetica",
            desc: "Presencia de alto nivel. Clientes que llegan ya decididos.",
            image: "/images/cases/service-clinic.jpg",
            url: "https://demo-service-clinic.vercel.app/",
        },
    ],

    // Pricing tiers — features as BENEFITS
    services: [
        {
            id: "starter",
            name: "Starter",
            price: "USD 350",
            delivery: "5 dias",
            desc: "Sitio de una pagina. Suficiente para empezar a vender.",
            features: [
                "Tu marca se ve profesional, no generica",
                "Todo lo que vendes en un lugar que tus clientes encuentran",
                "Pedidos directo a tu celular, sin intermediarios",
                "Funciona perfecto en el celular de tus clientes",
                "Online en 5 dias, sin complicaciones tecnicas",
            ],
            highlight: false,
        },
        {
            id: "pro",
            name: "Pro",
            price: "USD 600",
            delivery: "10 dias",
            desc: "Sitio completo con todo para crecer. El mas elegido.",
            features: [
                "Todo del plan anterior, mas:",
                "Tu dominio propio (tuempresa.com)",
                "Google te encuentra antes que a la competencia",
                "Diseno que genera confianza a primera vista",
                "1 mes de ajustes incluidos, sin extras",
            ],
            highlight: true,
        },
        {
            id: "scale",
            name: "Scale",
            price: "A consultar",
            delivery: "A convenir",
            desc: "Para negocios que quieren mas: clientes, catalogo y cobros automaticos.",
            features: [
                "Todo del plan anterior, mas:",
                "Actualizas tu catalogo sin tocar codigo",
                "Productos, precios y fotos editables desde el celular",
                "Cobras online con MercadoPago o tarjeta",
                "Alguien detras del sitio, siempre",
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
