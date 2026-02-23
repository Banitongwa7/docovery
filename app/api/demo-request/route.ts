import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, emailTemplates } from '@/utils/emailConfig';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, company, service, message } = body;

        // Validation
        if (!name || !email || !service) {
            return NextResponse.json(
                { success: false, error: 'Tous les champs obligatoires doivent être remplis' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, error: 'Format d\'email invalide' },
                { status: 400 }
            );
        }

        // Send demo request to admin
        const template = emailTemplates.demoRequest({ name, email, company, service, message });
        await sendEmail(process.env.EMAIL_TO || process.env.EMAIL_USER || '', template);

        // Send confirmation to user
        const confirmationTemplate = {
            subject: 'Votre demande de démo a été reçue - Docovery',
            html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
              .content { background: #ffffff; padding: 40px; }
              .highlight { background: #f0f4ff; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 20px 0; }
              .footer { text-align: center; margin-top: 30px; padding: 20px; background: #f7fafc; border-radius: 0 0 10px 10px; color: #718096; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🎉 Demande de Démo Confirmée!</h1>
              </div>
              <div class="content">
                <p>Bonjour ${name},</p>
                <p>Merci pour votre intérêt pour nos services! Nous avons bien reçu votre demande de démo pour:</p>
                <div class="highlight">
                  <strong>Service:</strong> ${service}
                </div>
                <p>Notre équipe commerciale va examiner votre demande et vous contactera dans les 24-48 heures pour:</p>
                <ul style="line-height: 2;">
                  <li>📅 Planifier une démo personnalisée</li>
                  <li>💬 Discuter de vos besoins spécifiques</li>
                  <li>🎯 Vous présenter nos solutions adaptées</li>
                  <li>💡 Répondre à toutes vos questions</li>
                </ul>
                <p style="margin-top: 30px;">En attendant, n'hésitez pas à explorer notre site pour en savoir plus sur nos services et nos réalisations.</p>
              </div>
              <div class="footer">
                <p><strong>Docovery</strong></p>
                <p>Building solutions, Shaping the future</p>
                <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color: #667eea;">www.docovery.com</a></p>
              </div>
            </div>
          </body>
        </html>
      `,
            text: `Bonjour ${name},\n\nMerci pour votre demande de démo pour ${service}.\n\nNotre équipe vous contactera dans les 24-48 heures.\n\n---\nDocovery\nBuilding solutions, Shaping the future`,
        };

        await sendEmail(email, confirmationTemplate);

        return NextResponse.json(
            { success: true, message: 'Demande envoyée avec succès! Nous vous contacterons bientôt.' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Demo request error:', error);
        return NextResponse.json(
            { success: false, error: 'Une erreur est survenue lors de l\'envoi de la demande' },
            { status: 500 }
        );
    }
}
