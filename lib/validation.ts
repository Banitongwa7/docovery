import { z } from "zod";

/** Shared field messages, in French, matching the API route expectations. */
const required = "Ce champ est obligatoire";
const invalidEmail = "Format d'email invalide";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Merci d'indiquer votre nom complet")
    .max(80, "80 caractères maximum"),
  email: z.string().trim().min(1, required).pipe(z.email(invalidEmail)),
  phone: z
    .string()
    .trim()
    .max(30, "30 caractères maximum")
    .regex(/^[+0-9 ().-]*$/, "Numéro de téléphone invalide")
    .optional()
    .or(z.literal("")),
  company: z.string().trim().max(80, "80 caractères maximum").optional(),
  message: z
    .string()
    .trim()
    .min(20, "Décrivez votre besoin en 20 caractères minimum")
    .max(2000, "2000 caractères maximum"),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email: z.string().trim().min(1, required).pipe(z.email(invalidEmail)),
});

export type NewsletterValues = z.infer<typeof newsletterSchema>;

export const demoRequestSchema = z.object({
  name: z.string().trim().min(2, "Merci d'indiquer votre nom complet"),
  email: z.string().trim().min(1, required).pipe(z.email(invalidEmail)),
  company: z.string().trim().max(80, "80 caractères maximum").optional(),
  service: z.string().trim().min(1, "Sélectionnez un service"),
  message: z.string().trim().max(2000, "2000 caractères maximum").optional(),
});

export type DemoRequestValues = z.infer<typeof demoRequestSchema>;

/** Options offered in the project-request modal. */
export const demoServices = [
  "Développement Web sur mesure",
  "Application Mobile Native",
  "Solution Cloud",
  "Conseil en Architecture",
  "API & Intégrations",
  "IA & Machine Learning",
  "Sécurité & Conformité",
  "Maintenance & Support",
  "Autre",
] as const;

/** Budget bands shown on the contact page. */
export const budgetRanges = [
  "< 5 000 $",
  "5 000 – 15 000 $",
  "15 000 – 50 000 $",
  "> 50 000 $",
  "À définir ensemble",
] as const;
