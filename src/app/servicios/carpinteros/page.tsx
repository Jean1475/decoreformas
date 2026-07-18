import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem, getCatalogoImagen } from "@/lib/catalogo";

const item = getCatalogoItem("carpinteros")!;

export const metadata: Metadata = {
  title: "Carpinteros en Madrid Sur | Decoreformas",
  description:
    "Carpintería de madera a medida en Leganés, Getafe, Alcorcón y Móstoles: puertas, armarios y carpintería interior.",
  alternates: { canonical: "/servicios/carpinteros" },
  openGraph: {
    title: "Carpinteros en Madrid Sur | Decoreformas",
    description: "Carpintería de madera a medida en Leganés, Getafe, Alcorcón y Móstoles: puertas, armarios y carpintería interior.",
    url: "/servicios/carpinteros",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
};

export default function CarpinterosPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Servicios del hogar" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} imagen={getCatalogoImagen(item.slug)} url="/servicios/carpinteros" />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
