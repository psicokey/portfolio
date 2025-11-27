import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Keyberth Márquez | Desarrollador Web Full-Stack | React · Next.js · Node.js",
  description:
    "Desarrollador Web Full-Stack profesional especializado en React, Next.js, Node.js, Python, PostgreSQL e integración de APIs (Meta Threads, Shopify). Creando soluciones digitales y sistemas de automatización para empresas en Maracay, Venezuela.",
  keywords: [
    "Desarrollador Web",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "API Integration",
    "Meta Threads API",
    "Venezuela",
    "Maracay",
    "Web Development Services",
  ],
  authors: [{ name: "Keyberth Márquez" }],
  creator: "Keyberth Márquez",
  publisher: "Keyberth Márquez",
  metadataBase: new URL("https://keyberth.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Keyberth Márquez | Desarrollador Web Full-Stack",
    description:
      "Desarrollador Web profesional especializado en React, Next.js, Node.js, Python e integración de APIs. Creando soluciones digitales para empresas.",
    url: "https://keyberth.dev",
    siteName: "Keyberth Márquez - Desarrollador Web",
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyberth Márquez | Desarrollador Web Full-Stack",
    description:
      "Desarrollador Web profesional especializado en React, Next.js, Node.js e integración de APIs.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Keyberth Márquez - Desarrollo Web",
    alternateName: "keyberth.dev",
    url: "https://keyberth.dev",
    description:
      "Desarrollador Web Full-Stack profesional especializado en React, Next.js, Node.js, Python, PostgreSQL e integración de APIs (Meta Threads, Shopify). Creando soluciones digitales y sistemas de automatización para empresas.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Maracay",
      addressCountry: "VE",
    },
    email: "contacto@keyberth.dev",
    priceRange: "$$",
    provider: {
      "@type": "Person",
      name: "Keyberth Márquez",
      jobTitle: "Desarrollador Web Full-Stack",
      url: "https://keyberth.dev",
      sameAs: [
        "https://github.com/psicokey",
        "https://linkedin.com/in/keyberth-marquez-51031811a",
      ],
    },
    areaServed: {
      "@type": "Country",
      name: "Venezuela",
    },
    serviceType: [
      "Web Development",
      "API Integration",
      "Software Automation",
      "Full-Stack Development",
    ],
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
      >
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
