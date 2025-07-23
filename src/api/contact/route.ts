import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Validamos la API Key y creamos una única instancia de Resend a nivel de módulo.
// Esto es más eficiente que crearlo en cada petición.
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  throw new Error("La variable de entorno RESEND_API_KEY no está definida.");
}
const resend = new Resend(resendApiKey);

export async function POST(request: NextRequest) {
  try {
    // Validamos la variable del email de destino dentro de la función.
    // Esto asegura a TypeScript que `emailTo` no es `undefined` en este contexto.
    const emailTo = process.env.EMAIL_TO;
    if (!emailTo) {
      // Es una buena práctica registrar errores críticos en el servidor.
      console.error(
        "La variable de entorno EMAIL_TO no está configurada en el servidor."
      );
      // Devolvemos un error genérico al cliente para no exponer detalles de la implementación.
      return NextResponse.json(
        { error: "Error de configuración interna del servidor." },
        { status: 500 }
      );
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Para producción, usa un dominio verificado. ej: 'contacto@tudominio.com'
      to: emailTo, // Resend acepta un string o un array. Pasarlo como string es más limpio.
      subject: `Nuevo mensaje de ${name} desde tu portafolio`,
      html: `<p><strong>Nombre:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Mensaje:</strong> ${message}</p>`,
    });

    return NextResponse.json(
      { message: "Email enviado exitosamente!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Hubo un error al enviar el mensaje." },
      { status: 500 }
    );
  }
}
