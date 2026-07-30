"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, LoaderCircle } from "lucide-react";
import { newsletterSchema, type NewsletterValues } from "@/lib/validation";
import { cn } from "@/lib/utils";

type Status = { type: "idle" | "success" | "error"; message?: string };

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (values: NewsletterValues) => {
    setStatus({ type: "idle" });

    try {
      const response = await fetch("/api/newsletter", {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
      <div className="flex flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Votre adresse email
          </label>
          <input
            id="newsletter-email"
            type="email"
            autoComplete="email"
            placeholder="votre@email.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "newsletter-error" : undefined}
            {...register("email")}
            className={cn(
              "w-full rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm text-white",
              "placeholder:text-white/35 transition-colors",
              "focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/20",
              errors.email && "border-negative/70",
            )}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-invert h-12 shrink-0 px-6 disabled:opacity-60"
        >
          {isSubmitting ? (
            <LoaderCircle className="size-4 animate-spin" />
          ) : (
            <>
              S&apos;abonner
              <ArrowRight className="size-4" />
            </>
          )}
        </button>
      </div>

      {errors.email && (
        <p id="newsletter-error" role="alert" className="mt-2 text-xs text-negative">
          {errors.email.message}
        </p>
      )}

      {status.type !== "idle" && (
        <p
          role="status"
          className={cn(
            "mt-3 flex items-center gap-2 text-xs",
            status.type === "success" ? "text-positive" : "text-negative",
          )}
        >
          {status.type === "success" && <Check className="size-3.5" />}
          {status.message}
        </p>
      )}
    </form>
  );
}
