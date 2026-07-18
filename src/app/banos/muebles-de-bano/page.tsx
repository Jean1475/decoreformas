import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem, getCatalogoImagen } from "@/lib/catalogo";

const item = getCatalogoItem("muebles-de-bano")!;

export const metadata: Metadata = {
  title: "Muebles de Baño en Madrid Sur | Decoreformas",
  description:
    "Suministro e instalación de muebles de baño a medida en Leganés, Getafe, Alcorcón y Móstoles.",
  alternates: { canonical: "/banos/muebles-de-bano" },
};

export default function MueblesDeBanoPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Baños" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} imagen={getCatalogoImagen(item.slug)} url="/banos/muebles-de-bano" />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
