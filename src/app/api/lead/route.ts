import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, empresa, whatsapp, cuelloDeBotella } = body;

    // Validación básica de campos obligatorios
    if (!nombre || !empresa || !whatsapp) {
      return NextResponse.json(
        { error: "Los campos nombre, empresa y whatsapp son obligatorios." },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Limpieza de caracteres para link de WhatsApp
    const cleanPhone = whatsapp.replace(/\D/g, "");
    const waLink = `https://wa.me/${cleanPhone}`;

    // Diseño del correo electrónico en HTML con estética Punto Litoral
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Nuevo Lead - Punto Litoral</title>
        </head>
        <body style="margin: 0; padding: 24px; background-color: #050b14; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #f8fafc;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #0c1f3d; border-radius: 16px; border: 1px solid rgba(28, 92, 138, 0.4); overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
            <!-- Header -->
            <tr>
              <td style="padding: 32px 32px 24px 32px; background: linear-gradient(180deg, rgba(28, 92, 138, 0.3) 0%, rgba(12, 31, 61, 0.8) 100%); border-bottom: 1px solid rgba(28, 92, 138, 0.3);">
                <div style="font-size: 11px; font-family: monospace; letter-spacing: 2px; text-transform: uppercase; color: #3a8ec4; margin-bottom: 8px;">
                  Punto Litoral • Notificación de Diagnóstico
                </div>
                <h1 style="margin: 0; font-size: 24px; font-weight: 700; color: #ffffff;">
                  🚨 Nueva Solicitud de Diagnóstico
                </h1>
                <p style="margin: 6px 0 0 0; font-size: 13px; color: rgba(248, 250, 252, 0.7);">
                  Recibido el ${timestamp}
                </p>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding: 32px;">
                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                  <!-- Contact Name -->
                  <tr>
                    <td style="padding-bottom: 20px;">
                      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; color: #3a8ec4; margin-bottom: 4px;">
                        Contacto
                      </div>
                      <div style="font-size: 18px; font-weight: 600; color: #ffffff;">
                        ${nombre}
                      </div>
                    </td>
                  </tr>

                  <!-- Company -->
                  <tr>
                    <td style="padding-bottom: 20px;">
                      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; color: #3a8ec4; margin-bottom: 4px;">
                        Empresa / Rubro
                      </div>
                      <div style="font-size: 16px; color: #f8fafc;">
                        ${empresa}
                      </div>
                    </td>
                  </tr>

                  <!-- WhatsApp -->
                  <tr>
                    <td style="padding-bottom: 20px;">
                      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; color: #3a8ec4; margin-bottom: 4px;">
                        WhatsApp / Teléfono
                      </div>
                      <div style="font-size: 16px; font-weight: 600; color: #3a8ec4;">
                        ${whatsapp}
                      </div>
                    </td>
                  </tr>

                  <!-- Bottleneck -->
                  <tr>
                    <td style="padding-bottom: 28px;">
                      <div style="font-size: 11px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; color: #3a8ec4; margin-bottom: 4px;">
                        Cuello de Botella Declarado
                      </div>
                      <div style="font-size: 14px; line-height: 1.6; color: rgba(248, 250, 252, 0.85); background-color: rgba(5, 11, 20, 0.6); padding: 14px 18px; border-radius: 10px; border: 1px solid rgba(28, 92, 138, 0.2);">
                        ${cuelloDeBotella || "No especificado por el usuario"}
                      </div>
                    </td>
                  </tr>

                  <!-- Action Button -->
                  <tr>
                    <td align="center" style="padding-top: 10px;">
                      <a href="${waLink}" target="_blank" style="display: inline-block; background-color: #1c5c8a; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; padding: 14px 28px; border-radius: 9999px; box-shadow: 0 4px 15px rgba(28, 92, 138, 0.4);">
                        💬 Responder por WhatsApp a ${nombre}
                      </a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding: 20px 32px; background-color: #050b14; border-top: 1px solid rgba(28, 92, 138, 0.2); text-align: center;">
                <p style="margin: 0; font-size: 11px; font-family: monospace; color: rgba(248, 250, 252, 0.4);">
                  Punto Litoral • Consultoría de Productividad y Automatización • Sunchales y Santa Fe
                </p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `;

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.NOTIFICATION_EMAIL || "emanuelboscacci@gmail.com";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Punto Litoral <onboarding@resend.dev>";

    // Si la API key está presente, enviamos el email mediante Resend
    if (apiKey) {
      const resend = new Resend(apiKey);
      const emailResult = await resend.emails.send({
        from: fromEmail,
        to: [recipientEmail],
        subject: `🚨 Diagnóstico Solicitado: ${empresa} (${nombre})`,
        html: emailHtml,
      });

      if (emailResult.error) {
        console.error("Error al enviar email con Resend:", emailResult.error);
        return NextResponse.json(
          { error: "Error enviando el correo", details: emailResult.error },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Notificación de lead enviada por email exitosamente.",
        id: emailResult.data?.id,
      });
    }

    // Modo desarrollo / Simulación si todavía no se configuró RESEND_API_KEY
    console.log("=================================================");
    console.log("📩 [LEAD RECIBIDO - MODO DESARROLLO]");
    console.log(`Nombre: ${nombre}`);
    console.log(`Empresa: ${empresa}`);
    console.log(`WhatsApp: ${whatsapp}`);
    console.log(`Cuello de botella: ${cuelloDeBotella || "No especificado"}`);
    console.log(`Fecha: ${timestamp}`);
    console.log(`Destino configurado: ${recipientEmail}`);
    console.log("Tip: Configura RESEND_API_KEY en tu .env.local para envío de correo real.");
    console.log("=================================================");

    return NextResponse.json({
      success: true,
      simulated: true,
      message: "Lead registrado en servidor. Agrega RESEND_API_KEY para entrega a casilla de correo.",
    });
  } catch (error) {
    console.error("Error en /api/lead:", error);
    return NextResponse.json(
      { error: "Error interno del servidor procesando el lead." },
      { status: 500 }
    );
  }
}
