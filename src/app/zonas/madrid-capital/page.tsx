import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ZonaContent from "@/components/zona-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getZona } from "@/lib/zonas";

const zona = getZona("madrid-capital")!;

export const metadata: Metadata = {
  title: "Reformas en Madrid Capital | Decoreformas",
  description:
    "Empresa de reformas integrales, cocinas, baños y locales comerciales en Madrid capital: Villaverde, Carabanchel, Hortaleza, Valdebebas y centro.",
  alternates: { canonical: "/zonas/madrid-capital" },
  openGraph: {
    title: "Reformas en Madrid Capital | Decoreformas",
    description: "Empresa de reformas integrales, cocinas, baños y locales comerciales en Madrid capital: Villaverde, Carabanchel, Hortaleza, Valdebebas y centro.",
    url: "/zonas/madrid-capital",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
};

export default function MadridCapitalPage() {
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
