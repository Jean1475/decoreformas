import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem, getCatalogoImagen } from "@/lib/catalogo";

const item = getCatalogoItem("aire-acondicionado")!;

export const metadata: Metadata = {
  title: "Aire Acondicionado en Madrid Sur | Decoreformas",
  description:
    "Instalación de aire acondicionado split y multisplit en Leganés, Getafe, Alcorcón y Móstoles, con canalización integrada si hace falta.",
  alternates: { canonical: "/climatizacion/aire-acondicionado" },
};

export default function AireAcondicionadoPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Climatización" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} imagen={getCatalogoImagen(item.slug)} url="/climatizacion/aire-acondicionado" />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
