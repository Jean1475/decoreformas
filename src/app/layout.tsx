import type { Metadata } from "next";
import { Space_Grotesk, Hanken_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Decoreformas — Reformas integrales en Madrid",
  description:
    "Reforma integral de viviendas y espacios comerciales en Madrid y la Comunidad. Presupuesto cerrado desde el primer día, seguimiento semanal y entrega en plazo.",
  openGraph: {
    title: "Decoreformas — Reformas integrales en Madrid",
    description:
      "Reforma integral de viviendas y espacios comerciales en Madrid. Presupuesto cerrado, seguimiento semanal.",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
  twitter: {
    card: "summary_large_image",
    title: "Decoreformas — Reformas integrales en Madrid",
    description:
      "Reforma integral en Madrid. Presupuesto cerrado desde el primer día.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${hankenGrotesk.variable} ${spaceMono.variable}`}
    >
      <body>
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
