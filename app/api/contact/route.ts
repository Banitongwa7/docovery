import { NextRequest, NextResponse } from "next/server";
import { sendEmail, emailTemplates } from "@/utils/emailConfig";
import { contactSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Same schema as the client form — never trust the browser's validation.
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error:
            parsed.error.issues[0]?.message ??
            "Tous les champs obligatoires doivent être remplis",
        },
        { status: 400 },
      );
    }

    const { name, email, phone, company, message } = parsed.data;

    // Send email to admin
    const template = emailTemplates.contact({
      name,
      email,
      phone,
      company,
      message,
    });
    await sendEmail(process.env.EMAIL_USER || "", template);

    // Optional: Send auto-reply to user
    const autoReplyTemplate = {
      subject: "Nous avons bien reçu votre message - Docovery",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0b0d12 0%, #1d4ed8 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #ffffff; padding: 40px; }
              .footer { text-align: center; margin-top: 30px; padding: 20px; background: #f7fafc; border-radius: 0 0 10px 10px; color: #718096; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Merci de nous avoir contacté! 🙏</h1>
              </div>
              <div class="content">
                <p>Bonjour ${name},</p>
                <p>Nous avons bien reçu votre message et nous vous en remercions.</p>
                <p>Notre équipe examine votre demande et vous répondra dans les plus brefs délais, généralement sous 24-48 heures.</p>
                <p style="margin-top: 30px; padding: 20px; background: #f0f4ff; border-radius: 8px; border-left: 4px solid #2563eb;">
                  <strong>Votre message:</strong><br><br>
                  ${message}
                </p>
                <p style="margin-top: 30px;">En attendant, n'hésitez pas à explorer nos services et nos dernières réalisations sur notre site web.</p>
              </div>
              <div class="footer">
                <p><strong>Docovery</strong></p>
                <p>Construire des solutions, façonner l'avenir</p>
                <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color: #2563eb;">${process.env.NEXT_PUBLIC_SITE_URL}</a></p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `Bonjour ${name},\n\nNous avons bien reçu votre message et nous vous en remercions.\n\nNotre équipe vous répondra dans les plus brefs délais.\n\nVotre message:\n${message}\n\n---\nDocovery\nConstruire des solutions, façonner l\'avenir`,
    };

    await sendEmail(email, autoReplyTemplate);

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Une erreur est survenue lors de l'envoi du message",
      },
      { status: 500 },
    );
  }
}
