import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem, getCatalogoImagen } from "@/lib/catalogo";

const item = getCatalogoItem("cambiar-banera-por-ducha")!;

export const metadata: Metadata = {
  title: "Cambiar Bañera por Ducha en Madrid Sur | Decoreformas",
  description:
    "Cambio de bañera por plato de ducha en Leganés, Getafe, Alcorcón y Móstoles. Obra mínima, en pocos días y con presupuesto cerrado.",
  alternates: { canonical: "/reformas/cambiar-banera-por-ducha" },
  openGraph: {
    title: "Cambiar Bañera por Ducha en Madrid Sur | Decoreformas",
    description: "Cambio de bañera por plato de ducha en Leganés, Getafe, Alcorcón y Móstoles. Obra mínima, en pocos días y con presupuesto cerrado.",
    url: "/reformas/cambiar-banera-por-ducha",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
};

export default function CambiarBaneraPorDuchaPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Reformas"
          titulo={item.nombre}
          descripcion={item.resumen}
        />
        <ServicioIntro servicio={item} imagen={getCatalogoImagen(item.slug)} url="/reformas/cambiar-banera-por-ducha" />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
