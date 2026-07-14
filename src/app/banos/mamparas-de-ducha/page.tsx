import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem } from "@/lib/catalogo";

const item = getCatalogoItem("mamparas-de-ducha")!;

export const metadata: Metadata = {
  title: "Mamparas de Ducha en Madrid Sur | Decoreformas",
  description:
    "Instalación de mamparas de ducha a medida en Leganés, Getafe, Alcorcón y Móstoles. Cristal templado y distintos sistemas de apertura.",
  alternates: { canonical: "/banos/mamparas-de-ducha" },
};

export default function MamparasDeDuchaPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Baños" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
