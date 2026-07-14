import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem } from "@/lib/catalogo";

const item = getCatalogoItem("instalacion-de-parquet")!;

export const metadata: Metadata = {
  title: "Instalación de Parquet en Madrid Sur | Decoreformas",
  description:
    "Instalación de parquet macizo o multicapa en Leganés, Getafe, Alcorcón y Móstoles, con preparación de base incluida.",
  alternates: { canonical: "/parquet/instalacion-de-parquet" },
};

export default function InstalacionDeParquetPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Parquet" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
