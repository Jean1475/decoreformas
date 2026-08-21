import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ZonaContent from "@/components/zona-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getZona } from "@/lib/zonas";

const zona = getZona("galapagar")!;

export const metadata: Metadata = {
  title: "Reformas en Galapagar y sierra noroeste | Decoreformas",
  description:
    "Reformas integrales en Galapagar, Torrelodones, Colmenarejo y Valdemorillo. Especialistas en aislamiento, ventanas y climatización para la sierra.",
  alternates: { canonical: "/zonas/galapagar" },
  openGraph: {
    title: "Reformas en Galapagar y sierra noroeste | Decoreformas",
    description: "Reformas integrales en Galapagar, Torrelodones, Colmenarejo y Valdemorillo. Especialistas en aislamiento, ventanas y climatización para la sierra.",
    url: "/zonas/galapagar",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
};

export default function GalapagarPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Zona de trabajo"
          titulo={`Reformas en ${zona.nombre}`}
          descripcion={zona.intro}
        />
        <ZonaContent zona={zona} />
        <Faq items={zona.faq} titulo={`Preguntas frecuentes sobre reformas en ${zona.nombre}`} />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
