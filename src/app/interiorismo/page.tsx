import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem, getCatalogoImagen } from "@/lib/catalogo";

const item = getCatalogoItem("interiorismo")!;

export const metadata: Metadata = {
  title: "Interiorismo en Madrid Sur | Decoreformas",
  description:
    "Diseño de interiores en Leganés, Getafe, Alcorcón y Móstoles: distribución, materiales, mobiliario y textiles.",
  alternates: { canonical: "/interiorismo" },
};

export default function InteriorismoPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Interiorismo" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} imagen={getCatalogoImagen(item.slug)} url="/interiorismo" />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
