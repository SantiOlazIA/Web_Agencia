import { useEffect } from 'react';
import { CLIENT } from '../lib/client.config';

export default function SeoHead() {
    useEffect(() => {
        const { seo, pageTitle, metaDescription, email, brandName } = CLIENT;
        const phone = `+${CLIENT.whatsappPhone}`;

        // Helper: crear o actualizar un meta tag
        const setMeta = (selector: string, attr: string, value: string) => {
            let el = document.querySelector<HTMLMetaElement>(selector);
            if (!el) {
                el = document.createElement('meta');
                const [attrName, attrValue] = attr.split('=');
                el.setAttribute(attrName, attrValue.replace(/"/g, ''));
                document.head.appendChild(el);
            }
            el.setAttribute('content', value);
            return el;
        };

        // Helper: crear o actualizar un link tag
        const setLink = (rel: string, href: string) => {
            let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
            if (!el) {
                el = document.createElement('link');
                el.setAttribute('rel', rel);
                document.head.appendChild(el);
            }
            el.setAttribute('href', href);
            return el;
        };

        // Helper: crear o actualizar script JSON-LD
        const setJsonLd = (id: string, data: object) => {
            let el = document.querySelector<HTMLScriptElement>(`script#${id}`);
            if (!el) {
                el = document.createElement('script');
                el.id = id;
                el.type = 'application/ld+json';
                document.head.appendChild(el);
            }
            el.textContent = JSON.stringify(data, null, 2);
            return el;
        };

        // Guardar valores originales para cleanup
        const originalTitle = document.title;

        // — Title —
        document.title = pageTitle;

        // — Description —
        setMeta('meta[name="description"]', 'name=description', metaDescription);

        // — Keywords —
        setMeta('meta[name="keywords"]', 'name=keywords', seo.keywords.join(', '));

        // — Canonical —
        setLink('canonical', seo.siteUrl);

        // — Open Graph —
        setMeta('meta[property="og:type"]', 'property=og:type', 'website');
        setMeta('meta[property="og:locale"]', 'property=og:locale', 'es_AR');
        setMeta('meta[property="og:site_name"]', 'property=og:site_name', brandName);
        setMeta('meta[property="og:title"]', 'property=og:title', pageTitle);
        setMeta('meta[property="og:description"]', 'property=og:description', metaDescription);
        setMeta('meta[property="og:url"]', 'property=og:url', seo.siteUrl);
        setMeta('meta[property="og:image"]', 'property=og:image', `${seo.siteUrl}${seo.ogImage}`);
        setMeta('meta[property="og:image:width"]', 'property=og:image:width', '1200');
        setMeta('meta[property="og:image:height"]', 'property=og:image:height', '630');

        // — Twitter Cards —
        setMeta('meta[name="twitter:card"]', 'name=twitter:card', 'summary_large_image');
        setMeta('meta[name="twitter:title"]', 'name=twitter:title', pageTitle);
        setMeta('meta[name="twitter:description"]', 'name=twitter:description', metaDescription);
        setMeta('meta[name="twitter:image"]', 'name=twitter:image', `${seo.siteUrl}${seo.ogImage}`);
        if (seo.twitterHandle) {
            setMeta('meta[name="twitter:site"]', 'name=twitter:site', seo.twitterHandle);
        }

        // — Schema.org JSON-LD —
        setJsonLd('schema-org', {
            '@context': 'https://schema.org',
            '@graph': [
                {
                    '@type': 'Organization',
                    '@id': `${seo.siteUrl}/#organization`,
                    name: brandName,
                    url: seo.siteUrl,
                    email,
                    logo: {
                        '@type': 'ImageObject',
                        url: `${seo.siteUrl}/images/logo-aurea.png`,
                    },
                    sameAs: [],
                },
                {
                    '@type': 'ProfessionalService',
                    '@id': `${seo.siteUrl}/#business`,
                    name: brandName,
                    description: metaDescription,
                    url: seo.siteUrl,
                    email,
                    telephone: phone,
                    priceRange: '$$',
                    currenciesAccepted: 'ARS, USD',
                    areaServed: seo.serviceArea.map((area) => ({
                        '@type': 'AdministrativeArea',
                        name: area,
                    })),
                    serviceArea: {
                        '@type': 'GeoCircle',
                        geoMidpoint: {
                            '@type': 'GeoCoordinates',
                            latitude: seo.latitude,
                            longitude: seo.longitude,
                        },
                        geoRadius: '600000',
                    },
                    hasOfferCatalog: {
                        '@type': 'OfferCatalog',
                        name: 'Servicios de Diseño Web',
                        itemListElement: [
                            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diseño Web' } },
                            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Desarrollo Web' } },
                            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mantenimiento Web' } },
                        ],
                    },
                    parentOrganization: { '@id': `${seo.siteUrl}/#organization` },
                },
            ],
        });

        // — Cleanup al desmontar —
        return () => {
            document.title = originalTitle;
        };
    }, []);

    return null;
}
