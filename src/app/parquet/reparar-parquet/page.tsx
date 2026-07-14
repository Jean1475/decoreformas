import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem } from "@/lib/catalogo";

const item = getCatalogoItem("reparar-parquet")!;

export const metadata: Metadata = {
  title: "Reparación de Parquet en Madrid Sur | Decoreformas",
  description:
    "Reparación de tablas de parquet dañadas o sueltas en Leganés, Getafe, Alcorcón y Móstoles, sin necesidad de acuchillar todo el suelo.",
  alternates: { canonical: "/parquet/reparar-parquet" },
};

export default function RepararParquetPage() {
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
