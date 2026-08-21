import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ZonaContent from "@/components/zona-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getZona } from "@/lib/zonas";

const zona = getZona("valdemoro")!;

export const metadata: Metadata = {
  title: "Reformas en Valdemoro | Decoreformas",
  description:
    "Empresa de reformas integrales, locales comerciales, cocinas y baños en Valdemoro. Presupuesto cerrado, un único interlocutor y seguimiento semanal de obra.",
  alternates: { canonical: "/zonas/valdemoro" },
  openGraph: {
    title: "Reformas en Valdemoro | Decoreformas",
    description: "Empresa de reformas integrales, locales comerciales, cocinas y baños en Valdemoro. Presupuesto cerrado, un único interlocutor y seguimiento semanal de obra.",
    url: "/zonas/valdemoro",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
};

export default function ValdemoroPage() {
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
