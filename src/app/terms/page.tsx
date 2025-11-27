"use client";

import Section from "@/components/shared/Section";
import { FaFileContract, FaEnvelope } from "react-icons/fa";

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Section
        title="Términos de Servicio"
        icon={<FaFileContract className="text-blue-600 dark:text-blue-400" />}
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
          <TermsSection title="1. Aceptación de los Términos">
            <p>
              Bienvenido a los servicios profesionales de desarrollo web de
              Keyberth Márquez. Al acceder a este sitio web (keyberth.dev) o
              contratar mis servicios, aceptas estar legalmente vinculado por
              estos Términos de Servicio. Si no estás de acuerdo con estos
              términos, por favor no utilices mis servicios.
            </p>
          </TermsSection>

          <TermsSection title="2. Descripción de Servicios">
            <p>
              Ofrezco los siguientes servicios profesionales de desarrollo web:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>
                Desarrollo web full-stack (aplicaciones web, APIs, bases de
                datos)
              </li>
              <li>
                Integración de APIs de terceros (Meta Threads, Shopify, etc.)
              </li>
              <li>
                Creación de sistemas de automatización y herramientas
                personalizadas
              </li>
              <li>
                Consultoría técnica y asesoramiento en arquitectura de software
              </li>
              <li>Diseño responsive y desarrollo de interfaces de usuario</li>
              <li>Mantenimiento y soporte de aplicaciones web</li>
            </ul>
            <p>
              Los detalles específicos de cada proyecto se acordarán mediante
              propuestas individuales o contratos de trabajo específicos del
              proyecto.
            </p>
          </TermsSection>

          <TermsSection title="3. Proceso de Contratación">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              3.1 Consulta y Propuesta
            </h4>
            <p>
              El proceso comienza con una consulta inicial gratuita donde
              discutimos tus necesidades. Posteriormente, proporcionaré una
              propuesta detallada que incluye:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Alcance del proyecto</li>
              <li>Cronograma estimado</li>
              <li>Costos y condiciones de pago</li>
              <li>Entregables específicos</li>
            </ul>

            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              3.2 Acuerdo de Proyecto
            </h4>
            <p>
              Una vez aceptada la propuesta, se formalizará un acuerdo de
              proyecto específico que detalla todos los términos y condiciones
              aplicables a ese trabajo en particular.
            </p>
          </TermsSection>

          <TermsSection title="4. Precios y Pagos">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              4.1 Cotizaciones
            </h4>
            <p>
              Los precios se determinan caso por caso según la complejidad,
              alcance y cronograma del proyecto. Todas las cotizaciones son
              válidas por 30 días desde la fecha de emisión, salvo que se
              indique lo contrario.
            </p>

            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              4.2 Condiciones de Pago
            </h4>
            <p>Típicamente, los proyectos requieren:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>
                Un depósito inicial (generalmente 30-50% del costo total) para
                comenzar el trabajo
              </li>
              <li>
                Pagos intermedios basados en hitos del proyecto (para proyectos
                grandes)
              </li>
              <li>Pago final al completar y entregar el proyecto</li>
            </ul>

            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              4.3 Pagos Atrasados
            </h4>
            <p>
              Los pagos vencen según lo especificado en la propuesta o factura.
              Los pagos atrasados pueden resultar en la suspensión del trabajo
              hasta que se reciba el pago.
            </p>
          </TermsSection>

          <TermsSection title="5. Responsabilidades del Cliente">
            <p>Como cliente, eres responsable de:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>
                Proporcionar información precisa y completa necesaria para el
                proyecto
              </li>
              <li>
                Proporcionar acceso a sistemas, cuentas o recursos necesarios
                para el desarrollo
              </li>
              <li>Revisar y aprobar entregables en tiempo oportuno</li>
              <li>Proporcionar retroalimentación constructiva y específica</li>
              <li>Comunicarte de manera oportuna sobre cambios o problemas</li>
              <li>Respetar los plazos de pago acordados</li>
            </ul>
          </TermsSection>

          <TermsSection title="6. Mis Responsabilidades">
            <p>Me comprometo a:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>
                Realizar el trabajo con estándares profesionales y las mejores
                prácticas de la industria
              </li>
              <li>
                Mantener comunicación regular sobre el progreso del proyecto
              </li>
              <li>
                Cumplir con los plazos acordados o comunicar cualquier retraso
                con anticipación
              </li>
              <li>Proteger la confidencialidad de tu información</li>
              <li>Entregar código funcional y documentado según lo acordado</li>
              <li>
                Proporcionar soporte técnico durante el período acordado
                post-lanzamiento
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="7. Propiedad Intelectual">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              7.1 Trabajo Personalizado
            </h4>
            <p>
              Para trabajo desarrollado específicamente para tu proyecto y
              pagado en su totalidad, te transfiero los derechos de propiedad
              del código personalizado al completar el pago final.
            </p>

            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              7.2 Componentes de Terceros
            </h4>
            <p>
              Los componentes de código abierto, librerías, frameworks y
              herramientas de terceros utilizados en el proyecto están sujetos a
              sus propias licencias respectivas.
            </p>

            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              7.3 Código Reutilizable
            </h4>
            <p>
              Me reservo el derecho de reutilizar técnicas, conceptos,
              metodologías y código genérico desarrollado durante el proyecto en
              trabajos futuros para otros clientes.
            </p>

            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              7.4 Portfolio
            </h4>
            <p>
              Me reservo el derecho de mostrar el trabajo completado en mi
              portfolio profesional, salvo acuerdo de confidencialidad
              específico que indique lo contrario.
            </p>
          </TermsSection>

          <TermsSection title="8. Cambios en el Alcance">
            <p>
              Cualquier cambio en el alcance original del proyecto
              (funcionalidades adicionales, modificaciones significativas, etc.)
              puede resultar en ajustes al cronograma y costo. Estos cambios se
              documentarán y acordarán por escrito antes de su implementación.
            </p>
          </TermsSection>

          <TermsSection title="9. Garantías y Limitaciones">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              9.1 Garantía
            </h4>
            <p>
              Garantizo que el trabajo entregado funcionará de acuerdo con las
              especificaciones acordadas al momento de la entrega. Proporcionaré
              corrección de errores sin costo adicional durante el período de
              garantía acordado (típicamente 30 días post-lanzamiento).
            </p>

            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              9.2 Limitaciones
            </h4>
            <p>
              NO garantizo que el software estará libre de errores en todas las
              circunstancias. Tampoco soy responsable de:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>
                Problemas causados por modificaciones hechas por terceros
                después de la entrega
              </li>
              <li>
                Incompatibilidades con software o hardware de terceros no
                especificado en los requisitos
              </li>
              <li>
                Problemas de rendimiento causados por volumen de datos o tráfico
                no anticipado
              </li>
              <li>Cambios en APIs de terceros fuera de mi control</li>
            </ul>

            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              9.3 Exclusión de Garantías
            </h4>
            <p>
              Salvo lo expresamente establecido, el trabajo se proporciona
              &quot;tal cual&quot;. No otorgo ninguna otra garantía, expresa o
              implícita, incluyendo garantías de comerciabilidad o idoneidad
              para un propósito particular.
            </p>
          </TermsSection>

          <TermsSection title="10. Limitación de Responsabilidad">
            <p>
              En ningún caso seré responsable de daños indirectos, incidentales,
              especiales, consecuentes o punitivos, incluyendo pérdida de
              beneficios, datos o uso, ya sea en una acción contractual, agravio
              u otra teoría legal, incluso si he sido advertido de la
              posibilidad de tales daños.
            </p>
            <p className="mt-4">
              Mi responsabilidad total por cualquier reclamo relacionado con los
              servicios no excederá el monto total pagado por el servicio
              específico que dio lugar al reclamo.
            </p>
          </TermsSection>

          <TermsSection title="11. Confidencialidad">
            <p>
              Me comprometo a mantener confidencial toda información propietaria
              o sensible compartida durante el curso del proyecto. Esta
              obligación continúa incluso después de completar el trabajo.
            </p>
            <p className="mt-4">
              Sin embargo, esta obligación no aplica a información que:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>Sea de dominio público</li>
              <li>Sea legalmente requerida para divulgación</li>
              <li>
                Sea desarrollada independientemente sin uso de tu información
                confidencial
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="12. Terminación">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              12.1 Terminación por el Cliente
            </h4>
            <p>
              Puedes terminar el proyecto en cualquier momento mediante
              notificación por escrito. En ese caso, serás responsable del pago
              por todo el trabajo completado hasta la fecha de terminación más
              cualquier costo no reembolsable incurrido.
            </p>

            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mt-4 mb-2">
              12.2 Terminación por Mí
            </h4>
            <p>Me reservo el derecho de terminar el proyecto si:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300">
              <li>No se reciben los pagos según lo acordado</li>
              <li>
                El cliente no proporciona información o acceso necesario para
                completar el trabajo
              </li>
              <li>
                El cliente solicita trabajo que viola leyes o mis principios
                éticos
              </li>
            </ul>
          </TermsSection>

          <TermsSection title="13. Cumplimiento con APIs de Terceros">
            <p>
              Cuando se integran APIs de terceros (Meta, Shopify, etc.), tanto
              el cliente como yo debemos cumplir con los términos de servicio y
              políticas de uso de esas plataformas. El cliente es responsable de
              obtener y mantener las autorizaciones necesarias para usar esas
              APIs.
            </p>
          </TermsSection>

          <TermsSection title="14. Ley Aplicable y Jurisdicción">
            <p>
              Estos términos se rigen por las leyes de Venezuela. Cualquier
              disputa relacionada con estos términos se resolverá
              preferentemente mediante negociación de buena fe. Si no se puede
              resolver amigablemente, las disputas estarán sujetas a la
              jurisdicción exclusiva de los tribunales de Maracay, Venezuela.
            </p>
          </TermsSection>

          <TermsSection title="15. Modificaciones">
            <p>
              Me reservo el derecho de modificar estos Términos de Servicio en
              cualquier momento. Los cambios se publicarán en este sitio web con
              una fecha de &quot;Última actualización&quot; revisada. Los
              términos específicos acordados en contratos de proyecto
              individuales prevalecen sobre estos términos generales.
            </p>
          </TermsSection>

          <TermsSection title="16. Divisibilidad">
            <p>
              Si alguna disposición de estos términos se considera inválida o
              inaplicable, las disposiciones restantes continuarán en pleno
              vigor y efecto.
            </p>
          </TermsSection>

          <TermsSection title="17. Acuerdo Completo">
            <p>
              Estos Términos de Servicio, junto con cualquier propuesta de
              proyecto o contrato específico, constituyen el acuerdo completo
              entre tú y yo con respecto a los servicios prestados.
            </p>
          </TermsSection>

          <TermsSection title="18. Información de Contacto">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
              <p className="mb-4">
                Si tienes preguntas sobre estos Términos de Servicio, por favor
                contáctame:
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
          </TermsSection>
        </div>
      </Section>
    </div>
  );
}

// Componente TermsSection
interface TermsSectionProps {
  title: string;
  children: React.ReactNode;
}

const TermsSection: React.FC<TermsSectionProps> = ({ title, children }) => {
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
