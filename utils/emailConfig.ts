import nodemailer from "nodemailer";

// Create reusable transporter object using SMTP transport
export const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

// Email templates
export const emailTemplates = {
  contact: (data: {
    name: string;
    email: string;
    phone?: string;
    message: string;
  }) => ({
    subject: `Nouveau message de contact de ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f7fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-row { margin: 15px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #667eea; }
            .label { font-weight: bold; color: #667eea; display: inline-block; min-width: 100px; }
            .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0; color: #718096; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📬 Nouveau Message de Contact</h1>
              <p>Docovery - Building solutions, Shaping the future</p>
            </div>
            <div class="content">
              <div class="info-row">
                <span class="label">Nom:</span>
                <span>${data.name}</span>
              </div>
              <div class="info-row">
                <span class="label">Email:</span>
                <span><a href="mailto:${data.email}" style="color: #667eea;">${data.email}</a></span>
              </div>
              ${
                data.phone
                  ? `
              <div class="info-row">
                <span class="label">Téléphone:</span>
                <span>${data.phone}</span>
              </div>
              `
                  : ""
              }
              <div class="info-row">
                <span class="label">Message:</span>
                <p style="margin-top: 10px; line-height: 1.8;">${data.message}</p>
              </div>
              <div class="footer">
                <p>Ce message a été envoyé depuis le formulaire de contact de Docovery</p>
                <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color: #667eea;">${process.env.NEXT_PUBLIC_SITE_URL}</a></p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      Nouveau message de contact
      
      Nom: ${data.name}
      Email: ${data.email}
      ${data.phone ? `Téléphone: ${data.phone}` : ""}
      
      Message:
      ${data.message}
    `,
  }),

  newsletter: (data: { email: string; name?: string }) => ({
    subject: "Nouvelle inscription à la newsletter",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f7fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-row { margin: 15px 0; padding: 15px; background: white; border-radius: 8px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📰 Nouvelle Inscription Newsletter</h1>
            </div>
            <div class="content">
              ${data.name ? `<div class="info-row"><strong>Nom:</strong> ${data.name}</div>` : ""}
              <div class="info-row"><strong>Email:</strong> ${data.email}</div>
              <p style="margin-top: 20px; color: #718096;">Date: ${new Date().toLocaleString("fr-FR")}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `Nouvelle inscription à la newsletter\n\n${data.name ? `Nom: ${data.name}\n` : ""}Email: ${data.email}`,
  }),

  welcomeNewsletter: (data: { email: string; name?: string }) => ({
    subject: "Bienvenue dans la communauté Docovery! 🎉",
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
            .button { display: inline-block; padding: 15px 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 30px; padding: 20px; background: #f7fafc; border-radius: 0 0 10px 10px; color: #718096; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✨ Bienvenue chez Docovery!</h1>
              <p>Merci de rejoindre notre communauté</p>
            </div>
            <div class="content">
              <h2>Bonjour ${data.name || "cher abonné"}! 👋</h2>
              <p>Nous sommes ravis de vous compter parmi nos abonnés. Vous recevrez désormais:</p>
              <ul style="line-height: 2;">
                <li>📰 Nos dernières actualités et innovations</li>
                <li>💡 Des conseils et astuces tech exclusifs</li>
                <li>🚀 Les tendances du développement digital</li>
                <li>🎯 Des offres spéciales réservées aux abonnés</li>
              </ul>
              <p style="margin-top: 30px;">Envie de découvrir nos services dès maintenant?</p>
              <a href="${process.env.NEXT_PUBLIC_SITE_URL}/#services" class="button">Explorer Nos Services</a>
            </div>
            <div class="footer">
              <p><strong>Docovery</strong></p>
              <p>Building solutions, Shaping the future</p>
               <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color: #667eea;">${process.env.NEXT_PUBLIC_SITE_URL}</a></p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
Bienvenue chez Docovery!

Bonjour ${data.name || "cher abonné"}!

Nous sommes ravis de vous compter parmi nos abonnés. Vous recevrez désormais:
- Nos dernières actualités et innovations
- Des conseils et astuces tech exclusifs
- Les tendances du développement digital
- Des offres spéciales réservées aux abonnés

Visitez notre site: ${process.env.NEXT_PUBLIC_SITE_URL}

Docovery - Building solutions, Shaping the future
    `,
  }),

  demoRequest: (data: {
    name: string;
    email: string;
    company?: string;
    service: string;
    message?: string;
  }) => ({
    subject: `Demande de démo - ${data.service}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f7fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-row { margin: 15px 0; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #667eea; }
            .label { font-weight: bold; color: #667eea; display: inline-block; min-width: 120px; }
            .highlight { background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 Nouvelle Demande de Démo</h1>
            </div>
            <div class="content">
              <div class="highlight">
                <strong>Service demandé:</strong> ${data.service}
              </div>
              <div class="info-row">
                <span class="label">Nom:</span>
                <span>${data.name}</span>
              </div>
              <div class="info-row">
                <span class="label">Email:</span>
                <span><a href="mailto:${data.email}" style="color: #667eea;">${data.email}</a></span>
              </div>
              ${
                data.company
                  ? `
              <div class="info-row">
                <span class="label">Entreprise:</span>
                <span>${data.company}</span>
              </div>
              `
                  : ""
              }
              ${
                data.message
                  ? `
              <div class="info-row">
                <span class="label">Message:</span>
                <p style="margin-top: 10px; line-height: 1.8;">${data.message}</p>
              </div>
              `
                  : ""
              }
              <p style="margin-top: 20px; color: #718096;">Date: ${new Date().toLocaleString("fr-FR")}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
      Nouvelle demande de démo
      
      Service: ${data.service}
      Nom: ${data.name}
      Email: ${data.email}
      ${data.company ? `Entreprise: ${data.company}` : ""}
      ${data.message ? `\nMessage:\n${data.message}` : ""}
    `,
  }),
};

export const sendEmail = async (
  to: string,
  template: { subject: string; html: string; text: string },
) => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: template.subject,
      html: template.html,
      text: template.text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
