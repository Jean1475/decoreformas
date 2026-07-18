import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem, getCatalogoImagen } from "@/lib/catalogo";

const item = getCatalogoItem("techos-desmontables")!;

export const metadata: Metadata = {
  title: "Techos Desmontables en Madrid Sur | Decoreformas",
  description:
    "Instalación de techos técnicos desmontables en Leganés, Getafe, Alcorcón y Móstoles, con acceso de mantenimiento a instalaciones.",
  alternates: { canonical: "/servicios/techos-desmontables" },
  openGraph: {
    title: "Techos Desmontables en Madrid Sur | Decoreformas",
    description: "Instalación de techos técnicos desmontables en Leganés, Getafe, Alcorcón y Móstoles, con acceso de mantenimiento a instalaciones.",
    url: "/servicios/techos-desmontables",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
};

export default function TechosDesmontablesPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Servicios del hogar" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} imagen={getCatalogoImagen(item.slug)} url="/servicios/techos-desmontables" />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
