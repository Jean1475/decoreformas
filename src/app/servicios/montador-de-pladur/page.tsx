import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem } from "@/lib/catalogo";

const item = getCatalogoItem("montador-de-pladur")!;

export const metadata: Metadata = {
  title: "Montador de Pladur en Madrid Sur | Decoreformas",
  description:
    "Tabiquería, trasdosados y techos de pladur en Leganés, Getafe, Alcorcón y Móstoles.",
  alternates: { canonical: "/servicios/montador-de-pladur" },
};

export default function MontadorDePladurPage() {
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
