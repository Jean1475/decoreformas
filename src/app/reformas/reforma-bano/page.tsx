import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getServicio } from "@/lib/servicios-data";

const servicio = getServicio("reforma-bano")!;

export const metadata: Metadata = {
  title: "Reforma de Baños en Madrid Sur | Decoreformas",
  description:
    "Reforma de baños y cambio de bañera por ducha en Leganés, Getafe, Alcorcón y Móstoles. Presupuesto cerrado y obra sin sorpresas.",
  alternates: { canonical: "/reformas/reforma-bano" },
};

export default function ReformaBanoPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Reforma de baño"
          titulo="Reforma de baños en Madrid Sur"
          descripcion={servicio.resumen}
        />
        <ServicioIntro servicio={servicio} />
        <Faq
          items={servicio.faq}
          titulo="Preguntas frecuentes sobre reforma de baño"
        />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
