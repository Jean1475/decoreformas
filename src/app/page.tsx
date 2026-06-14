import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Servicios from "@/components/servicios";
import Proyectos from "@/components/proyectos";
import Proceso from "@/components/proceso";
import Testimonios from "@/components/testimonios";
import Nosotros from "@/components/nosotros";
import Contacto from "@/components/contacto";
import Whatsapp from "@/components/whatsapp";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Servicios />
        <Proyectos />
        <Proceso />
        <Testimonios />
        <Nosotros />
        <Contacto />
      </main>
      <Whatsapp />
    </>
  );
}
