import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem } from "@/lib/catalogo";

const item = getCatalogoItem("ventanas-de-aluminio")!;

export const metadata: Metadata = {
  title: "Ventanas de Aluminio en Madrid Sur | Decoreformas",
  description:
    "Suministro e instalación de ventanas de aluminio con rotura de puente térmico en Leganés, Getafe, Alcorcón y Móstoles.",
  alternates: { canonical: "/servicios/ventanas-de-aluminio" },
};

export default function VentanasDeAluminioPage() {
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
