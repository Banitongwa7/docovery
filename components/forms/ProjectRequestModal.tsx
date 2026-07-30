"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, LoaderCircle, X } from "lucide-react";
import {
  demoRequestSchema,
  demoServices,
  type DemoRequestValues,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type Status = { type: "idle" | "success" | "error"; message?: string };

export default function ProjectRequestModal({
  open,
  onClose,
  preSelectedService = "",
}: {
  open: boolean;
  onClose: () => void;
  preSelectedService?: string;
}) {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const panelRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<DemoRequestValues>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: preSelectedService,
      message: "",
    },
  });

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    // Move focus into the dialog for keyboard and screen-reader users.
    const timer = window.setTimeout(
      () => panelRef.current?.querySelector<HTMLInputElement>("input")?.focus(),
      120,
    );

    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
    };
  }, [open, onClose]);

  const onSubmit = async (values: DemoRequestValues) => {
    setStatus({ type: "idle" });

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: data.message });
        reset();
        window.setTimeout(() => {
          onClose();
          setStatus({ type: "idle" });
        }, 2600);
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

  const errorText = (message?: string) =>
    message ? (
      <p role="alert" className="mt-1.5 text-xs text-negative">
        {message}
      </p>
    ) : null;

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/45 backdrop-blur-sm"
          />

          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 32, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.985 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="relative max-h-[92dvh] w-full max-w-xl overflow-y-auto rounded-t-[1.75rem] border border-line bg-canvas shadow-2xl sm:rounded-[1.75rem]"
            data-lenis-prevent
          >
            <div className="flex items-start justify-between gap-6 border-b border-line px-6 py-6 sm:px-8">
              <div>
                <p className="eyebrow">Démarrer un projet</p>
                <h2
                  id="project-modal-title"
                  className="display mt-2 text-2xl sm:text-[1.75rem]"
                >
                  Parlons de votre projet.
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Décrivez votre besoin, nous revenons vers vous sous 24h
                  ouvrées.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                <X className="size-4" />
              </button>
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="space-y-5 px-6 py-7 sm:px-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="modal-name"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Nom complet <span className="text-negative">*</span>
                  </label>
                  <input
                    id="modal-name"
                    autoComplete="name"
                    placeholder="Jean Dupont"
                    aria-invalid={Boolean(errors.name)}
                    {...register("name")}
                    className={cn("field", errors.name && "field-error")}
                  />
                  {errorText(errors.name?.message)}
                </div>

                <div>
                  <label
                    htmlFor="modal-email"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Email <span className="text-negative">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    autoComplete="email"
                    placeholder="jean.dupont@example.com"
                    aria-invalid={Boolean(errors.email)}
                    {...register("email")}
                    className={cn("field", errors.email && "field-error")}
                  />
                  {errorText(errors.email?.message)}
                </div>
              </div>

              <div>
                <label
                  htmlFor="modal-company"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Entreprise
                </label>
                <input
                  id="modal-company"
                  autoComplete="organization"
                  placeholder="Nom de votre entreprise"
                  {...register("company")}
                  className={cn("field", errors.company && "field-error")}
                />
                {errorText(errors.company?.message)}
              </div>

              <div>
                <label
                  htmlFor="modal-service"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Service souhaité <span className="text-negative">*</span>
                </label>
                <select
                  id="modal-service"
                  aria-invalid={Boolean(errors.service)}
                  {...register("service")}
                  className={cn("field", errors.service && "field-error")}
                >
                  <option value="">Sélectionnez un service</option>
                  {demoServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errorText(errors.service?.message)}
              </div>

              <div>
                <label
                  htmlFor="modal-message"
                  className="mb-2 block text-sm font-medium text-ink"
                >
                  Message
                </label>
                <textarea
                  id="modal-message"
                  rows={4}
                  placeholder="Parlez-nous de votre projet…"
                  {...register("message")}
                  className={cn(
                    "field resize-none",
                    errors.message && "field-error",
                  )}
                />
                {errorText(errors.message?.message)}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary btn-lg w-full"
              >
                {isSubmitting ? (
                  <>
                    <LoaderCircle className="size-4 animate-spin" />
                    Envoi en cours…
                  </>
                ) : (
                  "Envoyer ma demande"
                )}
              </button>

              {status.type !== "idle" && (
                <div
                  role="status"
                  className={cn(
                    "flex items-start gap-2 rounded-xl border px-4 py-3 text-sm",
                    status.type === "success"
                      ? "border-positive/25 bg-positive/8 text-positive"
                      : "border-negative/25 bg-negative/8 text-negative",
                  )}
                >
                  {status.type === "success" && (
                    <Check className="mt-0.5 size-4 shrink-0" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
