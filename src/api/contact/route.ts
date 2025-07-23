import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    // Validamos las variables de entorno dentro del handler.
    // Esto previene que el módulo crashee al iniciar si faltan las variables.
    const resendApiKey = process.env.RESEND_API_KEY;
    const emailTo = process.env.EMAIL_TO;

    if (!resendApiKey || !emailTo) {
      // Es una buena práctica registrar errores críticos en el servidor.
      console.error(
        "Variables de entorno faltantes: RESEND_API_KEY o EMAIL_TO no están configuradas."
      );
      // Devolvemos un error genérico al cliente para no exponer detalles de la implementación.
      return NextResponse.json(
        { error: "Error de configuración interna del servidor." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos requeridos." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Para producción, usa un dominio verificado. ej: 'contacto@tudominio.com'
      to: emailTo,
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
