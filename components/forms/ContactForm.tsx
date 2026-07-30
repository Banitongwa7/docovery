"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, LoaderCircle, Send, TriangleAlert } from "lucide-react";
import { contactSchema, type ContactValues } from "@/lib/validation";
import { cn } from "@/lib/utils";

type Status = { type: "idle" | "success" | "error"; message?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactValues) => {
    setStatus({ type: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: data.message });
        reset();
      } else {
        setStatus({ type: "error", message: data.error });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Une erreur est survenue. Veuillez réessayer.",
      });
    }
  };

  const fieldError = (id: string, message?: string) =>
    message ? (
      <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs text-negative">
        {message}
      </p>
    ) : null;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-panel border border-line bg-canvas p-6 sm:p-10"
    >
      <div className="mb-8">
        <h2 className="display text-2xl sm:text-[1.75rem]">
          Envoyez-nous un message
        </h2>
        <p className="mt-2 text-sm text-muted">
          Remplissez le formulaire ci-dessous et nous vous répondrons dans les
          plus brefs délais.
        </p>
      </div>

      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-ink"
            >
              Nom complet <span className="text-negative">*</span>
            </label>
            <input
              id="name"
              autoComplete="name"
              placeholder="Jean Dupont"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
              className={cn("field", errors.name && "field-error")}
            />
            {fieldError("name", errors.name?.message)}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-ink"
            >
              Email <span className="text-negative">*</span>
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="jean.dupont@example.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
              className={cn("field", errors.email && "field-error")}
            />
            {fieldError("email", errors.email?.message)}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-ink"
            >
              Téléphone
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+243 123 456 789"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone")}
              className={cn("field", errors.phone && "field-error")}
            />
            {fieldError("phone", errors.phone?.message)}
          </div>

          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-medium text-ink"
            >
              Entreprise
            </label>
            <input
              id="company"
              autoComplete="organization"
              placeholder="Nom de votre entreprise"
              {...register("company")}
              className={cn("field", errors.company && "field-error")}
            />
            {fieldError("company", errors.company?.message)}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-medium text-ink"
          >
            Message <span className="text-negative">*</span>
          </label>
          <textarea
            id="message"
            rows={6}
            placeholder="Parlez-nous de votre projet : contexte, objectif, échéance…"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            {...register("message")}
            className={cn("field resize-none", errors.message && "field-error")}
          />
          {fieldError("message", errors.message?.message)}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary btn-lg w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle className="size-4 animate-spin" />
              Envoi en cours…
            </>
          ) : (
            <>
              <Send className="size-4" />
              Envoyer le message
            </>
          )}
        </button>

        {status.type !== "idle" && (
          <div
            role="status"
            className={cn(
              "flex items-start gap-2.5 rounded-xl border px-4 py-3.5 text-sm",
              status.type === "success"
                ? "border-positive/25 bg-positive/8 text-positive"
                : "border-negative/25 bg-negative/8 text-negative",
            )}
          >
            {status.type === "success" ? (
              <Check className="mt-0.5 size-4 shrink-0" />
            ) : (
              <TriangleAlert className="mt-0.5 size-4 shrink-0" />
            )}
            <span>{status.message}</span>
          </div>
        )}

        <p className="text-xs leading-relaxed text-muted">
          En envoyant ce formulaire, vous acceptez que vos données soient
          utilisées pour traiter votre demande, conformément à notre{" "}
          <a
            href="/privacy-policy"
            className="text-ink underline underline-offset-2"
          >
            politique de confidentialité
          </a>
          .
        </p>
      </div>
    </form>
  );
}
