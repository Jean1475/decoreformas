import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Whatsapp from "@/components/whatsapp";
import PageHero from "@/components/page-hero";
import Nosotros from "@/components/nosotros";
import Contacto from "@/components/contacto";

export const metadata: Metadata = {
  title: "Quiénes Somos | Decoreformas",
  description:
    "Equipo pequeño de reformas con base en Madrid Sur, con más de 20 años de oficio. Presupuesto cerrado y un único interlocutor de principio a fin.",
  alternates: { canonical: "/conocenos/quienes-somos" },
};

export default function QuienesSomosPage() {
  return (
    <>
      <Nav />
      <main>
        <PageHero
          eyebrow="Conócenos"
          titulo="Quiénes somos"
          descripcion="Un equipo pequeño con base en Madrid Sur, con más de 20 años de oficio a nuestras espaldas."
        />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
      <Whatsapp />
    </>
  );
}
