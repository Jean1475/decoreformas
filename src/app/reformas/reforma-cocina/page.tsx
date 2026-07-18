import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getServicio } from "@/lib/servicios-data";

const servicio = getServicio("reforma-cocina")!;

export const metadata: Metadata = {
  title: "Reforma de Cocinas en Madrid Sur | Decoreformas",
  description:
    "Reforma de cocinas en Leganés, Getafe, Alcorcón y Móstoles. Distribución, mobiliario, encimera y electrodomésticos con presupuesto cerrado.",
  alternates: { canonical: "/reformas/reforma-cocina" },
};

export default function ReformaCocinaPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Reforma de cocina"
          titulo="Reforma de cocinas en Madrid Sur"
          descripcion={servicio.resumen}
          precioDesde={servicio.precioDesde}
        />
        <ServicioIntro servicio={servicio} url="/reformas/reforma-cocina" />
        <Faq
          items={servicio.faq}
          titulo="Preguntas frecuentes sobre reforma de cocina"
        />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
