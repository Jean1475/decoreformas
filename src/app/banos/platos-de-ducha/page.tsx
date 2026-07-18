import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem, getCatalogoImagen } from "@/lib/catalogo";

const item = getCatalogoItem("platos-de-ducha")!;

export const metadata: Metadata = {
  title: "Platos de Ducha en Madrid Sur | Decoreformas",
  description:
    "Instalación de platos de ducha extraplanos o a ras de suelo en Leganés, Getafe, Alcorcón y Móstoles.",
  alternates: { canonical: "/banos/platos-de-ducha" },
};

export default function PlatosDeDuchaPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Baños" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} imagen={getCatalogoImagen(item.slug)} url="/banos/platos-de-ducha" />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
