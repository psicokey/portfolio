import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LKE Web | Diseño de Páginas Web y Tiendas Online Shopify",
  description:
    "Potencia tu negocio con LKE Web. Especialistas en creación de tiendas online (e-commerce), páginas para negocios y personalización de tiendas Shopify. Resultados profesionales en 7-10 días.",
  keywords: [
    "LKE Web",
    "Diseño Web Venezuela",
    "Tiendas Online Shopify",
    "E-commerce",
    "Desarrollo Web Profesional",
    "LKE Web",
    "Diseño Web Venezuela",
    "Tiendas Online Shopify",
    "E-commerce",
    "Desarrollo Web Profesional",
    "Páginas para Negocios",
    "Shopify Chile",
    "Diseño Web Maracay",
    "E-commerce Latinoamérica",
    "Agencia Web Chile",
    "Páginas Web para emprendedores en Venezuela",
  ],
  alternates: {
    canonical: "/lke-web",
  },
  openGraph: {
    title: "LKE Web | Diseño Profesionales de Páginas Web y Tiendas Shopify",
    description:
      "Expertos en creación de tiendas online (e-commerce) y sitios web profesionales que realmente venden en Latinoamérica. Resultados rápidos y de alta calidad.",
    url: "https://keyberth.dev/lke-web",
    siteName: "LKE Web",
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LKE Web | Diseño de Páginas Web Profesionales",
    description:
      "Lanzamos tu tienda online o página de negocio en 7-10 días con soporte continuo para Chile y Venezuela.",
  },
};

export default function LkeWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Diseño Web y Desarrollo E-commerce",
    provider: {
      "@type": "Person",
      name: "Keyberth Márquez",
      url: "https://keyberth.dev",
      jobTitle: "Full-Stack Developer",
    },
    brand: {
      "@type": "Brand",
      name: "LKE Web",
    },
    areaServed: [
      { "@type": "Country", name: "Chile" },
      { "@type": "Country", name: "Venezuela" },
      { "@type": "Country", name: "Latin America" },
    ],
    description:
      "Servicios profesionales de diseño web a medida, creación de tiendas virtuales Shopify y optimización de plataformas de comercio electrónico en Latinoamérica.",
    offers: {
      "@type": "Offer",
      description: "Diseño web profesional con entrega garantizada en 7-10 días.",
      priceCurrency: "USD",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuánto tiempo toma desarrollar mi página web?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo de entrega promedio para un proyecto en LKE Web es de 7 a 10 días hábiles, dependiendo de la complejidad y rapidez con la que se entreguen los contenidos.",
        },
      },
      {
        "@type": "Question",
        name: "¿Ustedes configuran tiendas Shopify?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, somos expertos en la personalización de tiendas Shopify para emprendedores. Configuramos desde el inventario hasta la pasarela de pago para que empieces a vender de inmediato.",
        },
      },
      {
        "@type": "Question",
        name: "¿El diseño es compatible con celulares?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutamente. Todos nuestros diseños son 100% responsivos (adaptables), lo que garantiza que tu sitio se vea perfecto en móviles, tablets y computadoras.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
