import { NextRequest, NextResponse } from "next/server";
import { sendEmail, emailTemplates } from "@/utils/emailConfig";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { success: false, error: "L'email est requis" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Format d'email invalide" },
        { status: 400 },
      );
    }

    // Send notification to admin
    const adminTemplate = emailTemplates.newsletter({ email, name });
    await sendEmail(process.env.EMAIL_USER || "", adminTemplate);

    // Send welcome email to subscriber
    const welcomeTemplate = emailTemplates.welcomeNewsletter({ email, name });
    await sendEmail(process.env.EMAIL_USER || "", welcomeTemplate);

    return NextResponse.json(
      { success: true, message: "Inscription réussie! Vérifiez votre email." },
      { status: 200 },
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Une erreur est survenue lors de l'inscription",
      },
      { status: 500 },
    );
  }
}
