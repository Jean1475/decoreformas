import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem, getCatalogoImagen } from "@/lib/catalogo";

const item = getCatalogoItem("muebles-de-cocina-para-montar")!;

export const metadata: Metadata = {
  title: "Muebles de Cocina para Montar en Madrid Sur | Decoreformas",
  description:
    "Suministro y montaje de muebles de cocina en kit en Leganés, Getafe, Alcorcón y Móstoles.",
  alternates: { canonical: "/cocina/muebles-de-cocina-para-montar" },
  openGraph: {
    title: "Muebles de Cocina para Montar en Madrid Sur | Decoreformas",
    description: "Suministro y montaje de muebles de cocina en kit en Leganés, Getafe, Alcorcón y Móstoles.",
    url: "/cocina/muebles-de-cocina-para-montar",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
};

export default function MueblesParaMontarPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Cocina" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} imagen={getCatalogoImagen(item.slug)} url="/cocina/muebles-de-cocina-para-montar" />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
