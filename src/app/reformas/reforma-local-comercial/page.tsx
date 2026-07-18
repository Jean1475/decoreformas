import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getServicio } from "@/lib/servicios-data";

const servicio = getServicio("reforma-local-comercial")!;

export const metadata: Metadata = {
  title: "Reforma de Locales Comerciales en Madrid Sur | Decoreformas",
  description:
    "Reforma de locales, oficinas y hostelería en Leganés, Getafe, Alcorcón y Móstoles. Fases de obra pensadas para minimizar el cierre del negocio.",
  alternates: { canonical: "/reformas/reforma-local-comercial" },
};

export default function ReformaLocalPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Reforma comercial"
          titulo="Reforma de locales comerciales en Madrid Sur"
          descripcion={servicio.resumen}
        />
        <ServicioIntro servicio={servicio} url="/reformas/reforma-local-comercial" />
        <Faq
          items={servicio.faq}
          titulo="Preguntas frecuentes sobre reforma de locales"
        />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
