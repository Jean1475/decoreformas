import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getServicio } from "@/lib/servicios-data";

const servicio = getServicio("reforma-integral")!;

export const metadata: Metadata = {
  title: "Reforma Integral de Vivienda en Madrid Sur | Decoreformas",
  description:
    "Reforma integral de pisos y viviendas en Leganés, Getafe, Alcorcón y Móstoles. Presupuesto cerrado, un único interlocutor y seguimiento semanal de obra.",
  alternates: { canonical: "/reformas/reforma-integral" },
};

export default function ReformaIntegralPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Reforma integral"
          titulo="Reforma integral de vivienda en Madrid Sur"
          descripcion={servicio.resumen}
        />
        <ServicioIntro servicio={servicio} />
        <Faq
          items={servicio.faq}
          titulo="Preguntas frecuentes sobre reforma integral"
        />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
