import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem, getCatalogoImagen } from "@/lib/catalogo";

const item = getCatalogoItem("calefaccion")!;

export const metadata: Metadata = {
  title: "Calefacción en Madrid Sur | Decoreformas",
  description:
    "Instalación y renovación de sistemas de calefacción en Leganés, Getafe, Alcorcón y Móstoles: radiadores, suelo radiante y calderas.",
  alternates: { canonical: "/climatizacion/calefaccion" },
};

export default function CalefaccionPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Climatización" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} imagen={getCatalogoImagen(item.slug)} url="/climatizacion/calefaccion" />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
