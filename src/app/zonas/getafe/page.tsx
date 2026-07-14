import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ZonaContent from "@/components/zona-page";
import Contacto from "@/components/contacto";
import { getZona } from "@/lib/zonas";

const zona = getZona("getafe")!;

export const metadata: Metadata = {
  title: "Reformas en Getafe | Decoreformas",
  description:
    "Empresa de reformas integrales, cocinas y baños en Getafe. Presupuesto cerrado, un único interlocutor y seguimiento semanal de obra.",
  alternates: { canonical: "/zonas/getafe" },
};

export default function GetafePage() {
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
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
