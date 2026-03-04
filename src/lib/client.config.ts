// ============================================================
// AGENCY CONFIG — Studio Olaz
// Cambiar brandName, tagline, whatsappPhone antes del deploy
// ============================================================

export const CLIENT = {
    brandName: "Studio Olaz",
    tagline: "Sitios web que venden.",
    heroTagline: "Para negocios argentinos · Online en 5 días",

    whatsappPhone: "5492646274616",
    email: "hola@studioolaz.com",

    navLinks: [
        { href: "#cases", label: "Casos" },
        { href: "#services", label: "Servicios" },
        { href: "#contact", label: "Contacto" },
    ],

    // Portfolio cases — include ONE concrete outcome per entry
    cases: [
        {
            id: "el-gourmet",
            name: "El Gourmet Panadería",
            category: "Food & Artesanal",
            desc: "Catálogo online + pedidos por WhatsApp. Más pedidos, menos llamadas.",
            image: "/images/cases/el-gourmet.jpg",
            url: "https://website-gourmet-panaderia.vercel.app/",
        },
        {
            id: "pro-contractor",
            name: "Pro Contractor",
            category: "Construcción",
            desc: "Sitio profesional que genera consultas sin necesidad de publicidad paga.",
            image: "/images/cases/pro-contractor.jpg",
            url: "https://demo-pro-contractor.vercel.app/",
        },
        {
            id: "service-clinic",
            name: "Service Clinic",
            category: "Clínica Estética",
            desc: "Presencia de alto nivel. Clientes que llegan ya decididos.",
            image: "/images/cases/service-clinic.jpg",
            url: "https://demo-service-clinic.vercel.app/",
        },
    ],

    // Pricing tiers — features as BENEFITS (what the client gets, not what we build)
    services: [
        {
            id: "starter",
            name: "Starter",
            price: "USD 350",
            delivery: "5 días",
            desc: "Sitio de una página. Suficiente para empezar a vender.",
            features: [
                "Tu marca se ve profesional, no genérica",
                "Todo lo que vendés en un lugar que tus clientes encuentran",
                "Pedidos directo a tu celular, sin intermediarios",
                "Funciona perfecto en el celular de tus clientes",
                "Online en 5 días, sin complicaciones técnicas",
            ],
            highlight: false,
        },
        {
            id: "pro",
            name: "Pro",
            price: "USD 600",
            delivery: "10 días",
            desc: "Sitio completo con todo para crecer. El más elegido.",
            features: [
                "Todo del plan anterior, más:",
                "Tu dominio propio (tuempresa.com)",
                "Google te encuentra antes que a la competencia",
                "Diseño que genera confianza a primera vista",
                "1 mes de ajustes incluidos, sin extras",
            ],
            highlight: true,
        },
        {
            id: "scale",
            name: "Scale",
            price: "A consultar",
            delivery: "A convenir",
            desc: "Para negocios que quieren más: clientes, catálogo y cobros automáticos.",
            features: [
                "Todo del plan anterior, más:",
                "Actualizás tu catálogo sin tocar código",
                "Productos, precios y fotos editables desde el celular",
                "Cobrás online con MercadoPago o tarjeta",
                "Alguien detrás del sitio, siempre",
            ],
            highlight: false,
        },
    ],

    // SEO
    pageTitle: "Studio Olaz — Sitios web que venden",
    metaDescription: "Agencia de desarrollo web para negocios argentinos. Tu sitio online en 5 días, optimizado para convertir visitas en clientes.",

    currency: "USD",
} as const;

export type Case = (typeof CLIENT.cases)[number];
export type Service = (typeof CLIENT.services)[number];
