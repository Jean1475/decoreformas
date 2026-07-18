import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import Proyectos from "@/components/proyectos";
import ObrasSlider from "@/components/obras-slider";
import Contacto from "@/components/contacto";

export const metadata: Metadata = {
  title: "Trabajos Realizados | Decoreformas",
  description:
    "Obras reales entregadas por Decoreformas en Madrid Sur: reformas integrales, cocinas, baños y locales comerciales.",
  alternates: { canonical: "/conocenos/trabajos-realizados" },
};

export default function TrabajosRealizadosPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Conócenos"
          titulo="Trabajos realizados"
          descripcion="Una selección de obras entregadas, fotografiadas tal cual quedaron el día de la entrega."
        />
        <ObrasSlider />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
