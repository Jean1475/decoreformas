import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem, getCatalogoImagen } from "@/lib/catalogo";

const item = getCatalogoItem("tarima-flotante")!;

export const metadata: Metadata = {
  title: "Tarima Flotante en Madrid Sur | Decoreformas",
  description:
    "Instalación de tarima flotante laminada o de madera en Leganés, Getafe, Alcorcón y Móstoles.",
  alternates: { canonical: "/parquet/tarima-flotante" },
  openGraph: {
    title: "Tarima Flotante en Madrid Sur | Decoreformas",
    description: "Instalación de tarima flotante laminada o de madera en Leganés, Getafe, Alcorcón y Móstoles.",
    url: "/parquet/tarima-flotante",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
};

export default function TarimaFlotantePage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Parquet" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} imagen={getCatalogoImagen(item.slug)} url="/parquet/tarima-flotante" />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
