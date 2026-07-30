import { NextRequest, NextResponse } from "next/server";
import { sendEmail, emailTemplates } from "@/utils/emailConfig";
import { newsletterSchema } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const parsed = newsletterSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: parsed.error.issues[0]?.message ?? "L'email est requis",
        },
        { status: 400 },
      );
    }

    const { email } = parsed.data;
    const name = typeof body?.name === "string" ? body.name : undefined;

    // Send notification to admin
    const adminTemplate = emailTemplates.newsletter({ email, name });
    await sendEmail(process.env.EMAIL_USER || "", adminTemplate);

    // Send welcome email to subscriber
    const welcomeTemplate = emailTemplates.welcomeNewsletter({ email, name });
    await sendEmail(email, welcomeTemplate);

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
