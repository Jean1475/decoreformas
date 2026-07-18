import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem, getCatalogoImagen } from "@/lib/catalogo";

const item = getCatalogoItem("ventanas-de-pvc")!;

export const metadata: Metadata = {
  title: "Ventanas de PVC en Madrid Sur | Decoreformas",
  description:
    "Suministro e instalación de ventanas de PVC en Leganés, Getafe, Alcorcón y Móstoles, con buen aislamiento térmico y acústico.",
  alternates: { canonical: "/servicios/ventanas-de-pvc" },
};

export default function VentanasDePvcPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Servicios del hogar" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} imagen={getCatalogoImagen(item.slug)} url="/servicios/ventanas-de-pvc" />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
