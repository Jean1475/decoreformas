import type { Metadata } from "next";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Política de privacidad | Decoreformas",
  description:
    "Cómo trata Decoreformas los datos personales que nos facilitas al pedir presupuesto o contactar con nosotros.",
  alternates: { canonical: "/privacidad" },
  // Página de servicio: debe existir y ser accesible, pero no compite en búsqueda.
  robots: { index: false, follow: true },
};

export default function PrivacidadPage() {
  return (
    <>
      <Nav />
      <main>
        <LegalPage
          titulo="Política de privacidad"
          actualizado="21 de agosto de 2026"
          secciones={[
            {
              titulo: "Responsable del tratamiento",
              cuerpo: (
                <>
                  <p>
                    Decoreformas es la responsable del tratamiento de los datos personales que nos
                    facilitas a través de esta web, por teléfono o por WhatsApp.
                  </p>
                  <p>
                    Puedes contactar con nosotros en{" "}
                    <a href="mailto:decorpinto@hotmail.com" style={{ color: "#1D3557", fontWeight: 600 }}>
                      decorpinto@hotmail.com
                    </a>{" "}
                    o en el teléfono 660 56 53 24.
                  </p>
                </>
              ),
            },
            {
              titulo: "Qué datos recogemos y para qué",
              cuerpo: (
                <>
                  <p>
                    Solo recogemos los datos que nos das voluntariamente cuando pides un presupuesto o
                    nos escribes: nombre, teléfono, correo electrónico, la zona donde está la vivienda o
                    el local y la descripción de la reforma que necesitas. Si adjuntas fotos del espacio,
                    también las tratamos como parte de tu solicitud.
                  </p>
                  <p>
                    Usamos esos datos con una única finalidad: ponernos en contacto contigo, preparar el
                    presupuesto que has pedido y dar seguimiento a la obra si finalmente trabajamos
                    juntos. No elaboramos perfiles ni tomamos decisiones automatizadas sobre ti.
                  </p>
                </>
              ),
            },
            {
              titulo: "Base legal",
              cuerpo: (
                <p>
                  La base legal es tu consentimiento al enviarnos la solicitud y, cuando ya existe un
                  presupuesto aceptado, la ejecución del contrato de obra. Conservamos los datos
                  mientras dure la relación comercial y, después, durante los plazos que exige la
                  normativa fiscal y de garantías de obra.
                </p>
              ),
            },
            {
              titulo: "Con quién compartimos tus datos",
              cuerpo: (
                <>
                  <p>
                    No vendemos ni cedemos tus datos a terceros con fines comerciales. Solo los tratan
                    los proveedores que necesitamos para que la web funcione y para poder responderte:
                  </p>
                  <ul style={{ paddingLeft: "1.25rem", listStyle: "disc" }}>
                    <li>El proveedor de alojamiento de la web.</li>
                    <li>El servicio de envío de correo que nos hace llegar tu solicitud.</li>
                    <li>WhatsApp, si eliges ese canal para escribirnos.</li>
                  </ul>
                  <p>
                    Si en algún momento colaboramos con industriales externos para una obra concreta,
                    compartimos únicamente lo imprescindible para ejecutarla.
                  </p>
                </>
              ),
            },
            {
              titulo: "Tus derechos",
              cuerpo: (
                <>
                  <p>
                    Puedes pedirnos en cualquier momento acceder a tus datos, rectificarlos, suprimirlos,
                    limitar u oponerte a su tratamiento y solicitar su portabilidad. Basta con
                    escribirnos a{" "}
                    <a href="mailto:decorpinto@hotmail.com" style={{ color: "#1D3557", fontWeight: 600 }}>
                      decorpinto@hotmail.com
                    </a>{" "}
                    indicando qué quieres ejercer.
                  </p>
                  <p>
                    Si consideras que no hemos atendido tu solicitud correctamente, puedes reclamar ante
                    la Agencia Española de Protección de Datos (aepd.es).
                  </p>
                </>
              ),
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
