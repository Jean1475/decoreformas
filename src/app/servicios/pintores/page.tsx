import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem } from "@/lib/catalogo";

const item = getCatalogoItem("pintores")!;

export const metadata: Metadata = {
  title: "Pintores en Madrid Sur | Decoreformas",
  description:
    "Pintura de interiores y exteriores en Leganés, Getafe, Alcorcón y Móstoles, con preparación de superficie incluida.",
  alternates: { canonical: "/servicios/pintores" },
};

export default function PintoresPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Servicios del hogar" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
