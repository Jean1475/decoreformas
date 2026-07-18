import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import ServicioIntro from "@/components/servicio-page";
import Faq from "@/components/faq";
import Contacto from "@/components/contacto";
import { getCatalogoItem, getCatalogoImagen } from "@/lib/catalogo";

const item = getCatalogoItem("acuchillar-parquet")!;

export const metadata: Metadata = {
  title: "Acuchillado de Parquet en Madrid Sur | Decoreformas",
  description:
    "Lijado y acuchillado de suelos de madera en Leganés, Getafe, Alcorcón y Móstoles, con barnizado final.",
  alternates: { canonical: "/parquet/acuchillar-parquet" },
  openGraph: {
    title: "Acuchillado de Parquet en Madrid Sur | Decoreformas",
    description: "Lijado y acuchillado de suelos de madera en Leganés, Getafe, Alcorcón y Móstoles, con barnizado final.",
    url: "/parquet/acuchillar-parquet",
    type: "website",
    locale: "es_ES",
    siteName: "Decoreformas",
  },
};

export default function AcuchillarParquetPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero eyebrow="Parquet" titulo={item.nombre} descripcion={item.resumen} />
        <ServicioIntro servicio={item} imagen={getCatalogoImagen(item.slug)} url="/parquet/acuchillar-parquet" />
        <Faq items={item.faq} titulo="Preguntas frecuentes" />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
