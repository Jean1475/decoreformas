import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem, getCatalogoImagen } from "@/lib/catalogo";

const item = getCatalogoItem("muebles-de-cocina")!;

export const metadata: Metadata = {
  title: "Muebles de Cocina en Madrid Sur | Decoreformas",
  description:
    "Diseño e instalación de muebles de cocina a medida en Leganés, Getafe, Alcorcón y Móstoles.",
  alternates: { canonical: "/cocina/muebles-de-cocina" },
};

export default function MueblesDeCocinaPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Cocina" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} imagen={getCatalogoImagen(item.slug)} url="/cocina/muebles-de-cocina" />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
