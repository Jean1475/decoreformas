import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ZonaContent from "@/components/zona-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getZona } from "@/lib/zonas";

const zona = getZona("mostoles")!;

export const metadata: Metadata = {
  title: "Reformas en Móstoles | Decoreformas",
  description:
    "Empresa de reformas integrales, cocinas y baños en Móstoles. Presupuesto cerrado, un único interlocutor y seguimiento semanal de obra.",
  alternates: { canonical: "/zonas/mostoles" },
  openGraph: {
    title: "Reformas en Móstoles | Decoreformas",
    description: "Empresa de reformas integrales, cocinas y baños en Móstoles. Presupuesto cerrado, un único interlocutor y seguimiento semanal de obra.",
    url: "/zonas/mostoles",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
};

export default function MostolesPage() {
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
