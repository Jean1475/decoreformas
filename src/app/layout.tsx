import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

// Actualizar si el dominio definitivo es otro (p. ej. www.decoreformas.es)
const SITE_URL = "https://decoreformas.es";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Decoreformas — Reformas integrales en Madrid | Presupuesto cerrado",
  description:
    "Reformas integrales de viviendas, cocinas, baños y locales comerciales en Madrid Sur: Leganés, Getafe, Alcorcón y Móstoles. Presupuesto cerrado desde el primer día, seguimiento semanal y entrega en plazo. Pide tu presupuesto gratis.",
  keywords: [
    "reformas integrales Madrid",
    "reformas Leganés",
    "reformas Getafe",
    "reformas Alcorcón",
    "reformas Móstoles",
    "reforma de baño",
    "reforma de cocina",
    "cambio de bañera por ducha",
    "reforma local comercial",
    "empresa de reformas Madrid Sur",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Decoreformas — Reformas integrales en Madrid",
    description:
      "Reforma integral de viviendas y espacios comerciales en Madrid Sur. Presupuesto cerrado, seguimiento semanal, entrega en plazo.",
    url: "/",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decoreformas — Reformas integrales en Madrid",
    description:
      "Reforma integral en Madrid Sur. Presupuesto cerrado desde el primer día.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "home improvement",
};

export const viewport: Viewport = {
  themeColor: "#1D3557",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#negocio`,
  name: "Decoreformas",
  description:
    "Empresa de reformas integrales de viviendas, cocinas, baños y locales comerciales en Madrid Sur. Presupuesto cerrado, un único interlocutor y seguimiento semanal de obra.",
  url: SITE_URL,
  telephone: "+34660565324",
  email: "decorpinto@hotmail.com",
  image: `${SITE_URL}/opengraph-image.jpg`,
  logo: `${SITE_URL}/decoreformas-house-hammer-navy.png`,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madrid",
    addressRegion: "Comunidad de Madrid",
    addressCountry: "ES",
  },
  areaServed: [
    { "@type": "City", name: "Leganés" },
    { "@type": "City", name: "Getafe" },
    { "@type": "City", name: "Alcorcón" },
    { "@type": "City", name: "Móstoles" },
    { "@type": "City", name: "Madrid" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reforma integral de vivienda" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reforma de cocina" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reforma de baño y cambio de bañera por ducha" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reforma de local comercial" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Decoración de interiores" } },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={hankenGrotesk.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <a
          href="#inicio"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium"
          style={{ background: "#1D3557", color: "#ffffff" }}
        >
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
