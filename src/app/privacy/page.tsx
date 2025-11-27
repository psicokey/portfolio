"use client";

import Section from "@/components/shared/Section";
import { FaShieldAlt, FaEnvelope } from "react-icons/fa";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Section
        title="Política de Privacidad"
        icon={<FaShieldAlt className="text-blue-600 dark:text-blue-400" />}
      >
        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg border-l-4 border-blue-500 mb-8">
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Última actualización:</strong>{" "}
            {new Date().toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <PrivacySection title="1. Introducción">
            <p>
              Keyberth Márquez (&quot;yo&quot;, &quot;mi&quot;, &quot;el
              desarrollador&quot;) se compromete a proteger la privacidad de los
              visitantes de este sitio web y de los clientes que utilizan mis
              servicios de desarrollo web. Esta Política de Privacidad explica
              cómo recopilo, uso y protejo tu información personal.
            </p>
          </PrivacySection>

          <PrivacySection title="2. Información que Recopilo">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              2.1 Información Proporcionada Voluntariamente
            </h4>
            <p>
              Puedo recopilar la siguiente información cuando te comunicas
              conmigo:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Nombre completo</li>
              <li>Dirección de correo electrónico</li>
              <li>Información proporcionada en formularios de contacto</li>
              <li>Información de proyectos o consultas específicas</li>
            </ul>

            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              2.2 Información Recopilada Automáticamente
            </h4>
            <p>Este sitio puede recopilar automáticamente:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Dirección IP</li>
              <li>Tipo de navegador y sistema operativo</li>
              <li>Páginas visitadas y tiempo de permanencia</li>
              <li>Información de referencia (de dónde llegaste al sitio)</li>
            </ul>
          </PrivacySection>

          <PrivacySection title="3. Cómo Uso tu Información">
            <p>Utilizo la información recopilada para:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Responder a tus consultas y solicitudes de servicios</li>
              <li>Proporcionar cotizaciones y propuestas de proyectos</li>
              <li>Comunicarme contigo sobre proyectos en curso</li>
              <li>Mejorar la experiencia del usuario en mi sitio web</li>
              <li>Analizar el uso del sitio web para mejorarlo</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </PrivacySection>

          <PrivacySection title="4. Cookies y Tecnologías Similares">
            <p>
              Este sitio utiliza cookies y tecnologías similares para mejorar tu
              experiencia de navegación. Las cookies son pequeños archivos de
              texto almacenados en tu dispositivo.
            </p>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              Tipos de Cookies Utilizadas:
            </h4>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Cookies Esenciales:</strong> Necesarias para el
                funcionamiento básico del sitio (preferencia de tema)
              </li>
              <li>
                <strong>Cookies de Analytics:</strong> Para entender cómo los
                visitantes usan el sitio (Vercel Analytics)
              </li>
            </ul>
            <p>
              Puedes configurar tu navegador para rechazar cookies, aunque esto
              puede afectar la funcionalidad del sitio.
            </p>
          </PrivacySection>

          <PrivacySection title="5. Compartir Información con Terceros">
            <p>
              No vendo, intercambio ni transfiero tu información personal a
              terceros, excepto:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Proveedores de Servicios:</strong> Como servicios de
                hosting (Vercel) y analytics
              </li>
              <li>
                <strong>Requisitos Legales:</strong> Si es requerido por ley o
                para proteger mis derechos
              </li>
              <li>
                <strong>Con tu Consentimiento:</strong> En casos específicos con
                tu autorización explícita
              </li>
            </ul>
          </PrivacySection>

          <PrivacySection title="6. Integraciones con APIs de Terceros">
            <p>
              En el desarrollo de proyectos para clientes, puedo integrar APIs
              de terceros como:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Meta Threads API:</strong> Para gestión de contenido en
                redes sociales
              </li>
              <li>
                <strong>Shopify API:</strong> Para integraciones de comercio
                electrónico
              </li>
            </ul>
            <p>
              El uso de estas APIs en proyectos de clientes está sujeto a las
              políticas de privacidad de cada plataforma respectiva y se
              implementa con el consentimiento del cliente.
            </p>
          </PrivacySection>

          <PrivacySection title="7. Seguridad de los Datos">
            <p>
              Implemento medidas de seguridad razonables para proteger tu
              información personal, incluyendo:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Uso de HTTPS para conexiones seguras</li>
              <li>Almacenamiento seguro de datos</li>
              <li>Acceso limitado a información personal</li>
              <li>
                Cumplimiento de mejores prácticas de seguridad en desarrollo
              </li>
            </ul>
            <p>
              Sin embargo, ningún método de transmisión por Internet es 100%
              seguro, y no puedo garantizar seguridad absoluta.
            </p>
          </PrivacySection>

          <PrivacySection title="8. Tus Derechos">
            <p>Tienes derecho a:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>
                <strong>Acceso:</strong> Solicitar una copia de la información
                personal que tengo sobre ti
              </li>
              <li>
                <strong>Rectificación:</strong> Solicitar corrección de
                información inexacta
              </li>
              <li>
                <strong>Eliminación:</strong> Solicitar la eliminación de tu
                información personal
              </li>
              <li>
                <strong>Portabilidad:</strong> Recibir tus datos en un formato
                estructurado y de uso común
              </li>
              <li>
                <strong>Oposición:</strong> Oponerte al procesamiento de tus
                datos personales
              </li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, contáctame en{" "}
              <a
                href="mailto:contacto@keyberth.dev"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                contacto@keyberth.dev
              </a>
            </p>
          </PrivacySection>

          <PrivacySection title="9. Retención de Datos">
            <p>
              Conservo tu información personal solo durante el tiempo necesario
              para cumplir con los propósitos descritos en esta política, a
              menos que se requiera o permita un período de retención más largo
              por ley.
            </p>
          </PrivacySection>

          <PrivacySection title="10. Enlaces a Sitios de Terceros">
            <p>
              Este sitio puede contener enlaces a sitios web de terceros. No soy
              responsable de las prácticas de privacidad de esos sitios. Te
              recomiendo leer las políticas de privacidad de cualquier sitio que
              visites.
            </p>
          </PrivacySection>

          <PrivacySection title="11. Privacidad de Menores">
            <p>
              Este sitio no está dirigido a menores de 18 años. No recopilo
              conscientemente información personal de menores. Si descubro que
              he recopilado información de un menor, la eliminaré de inmediato.
            </p>
          </PrivacySection>

          <PrivacySection title="12. Cambios a esta Política">
            <p>
              Me reservo el derecho de actualizar esta Política de Privacidad en
              cualquier momento. Los cambios entrarán en vigor inmediatamente
              después de su publicación en este sitio. La fecha de &quot;Última
              actualización&quot; al inicio de esta política indica cuándo fue
              modificada por última vez.
            </p>
          </PrivacySection>

          <PrivacySection title="13. Información de Contacto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <p className="mb-4">
                Si tienes preguntas sobre esta Política de Privacidad o sobre
                cómo manejo tu información personal, por favor contáctame:
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Nombre:</strong> Keyberth Márquez
                </p>
                <p>
                  <strong>Ubicación:</strong> Maracay, Venezuela
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="mr-2 text-blue-600 dark:text-blue-400" />
                  <strong className="mr-2">Email:</strong>
                  <a
                    href="mailto:contacto@keyberth.dev"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    contacto@keyberth.dev
                  </a>
                </p>
                <p>
                  <strong>Sitio Web:</strong> keyberth.dev
                </p>
              </div>
            </div>
          </PrivacySection>
        </div>
      </Section>
    </div>
  );
}

// Componente PrivacySection
interface PrivacySectionProps {
  title: string;
  children: React.ReactNode;
}

const PrivacySection: React.FC<PrivacySectionProps> = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <div className="text-gray-700 dark:text-gray-300 space-y-4">
        {children}
      </div>
    </div>
  );
};
