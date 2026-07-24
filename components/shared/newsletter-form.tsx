"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { ArrowRight, Loader2 } from "lucide-react";

import { subscribeToNewsletter } from "@/app/actions/newsletter";
import { cn } from "@/lib/utils";
import { newsletterSchema, type NewsletterInput } from "@/lib/validations/newsletter";

export function NewsletterForm({ className }: { className?: string }) {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "", company: "" },
  });

  const onSubmit = (data: NewsletterInput) => {
    startTransition(async () => {
      const result = await subscribeToNewsletter(data);

      if (result.success) {
        setStatus("success");
        reset();
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
  };

  if (status === "success") {
    return (
      <p className={cn("text-sand font-sans text-[13px] tracking-[0.08em]", className)}>
        Thank you — you&apos;re on the list.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={cn("flex flex-col gap-2", className)}>
      <div className="border-line/40 focus-within:border-clay flex items-stretch border-b">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          autoComplete="email"
          placeholder="Your email address"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "newsletter-email-error" : undefined}
          className="text-sand placeholder:text-line/60 w-full bg-transparent py-2.5 font-sans text-[13px] focus:outline-none"
          {...register("email")}
        />
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          {...register("company")}
        />
        <button
          type="submit"
          disabled={isPending}
          aria-label="Subscribe"
          className="text-clay flex items-center px-2 disabled:opacity-50"
        >
          {isPending ? (
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
          ) : (
            <ArrowRight className="size-4" aria-hidden="true" />
          )}
        </button>
      </div>
      {errors.email && (
        <p id="newsletter-email-error" role="alert" className="text-clay font-sans text-[11px]">
          {errors.email.message}
        </p>
      )}
    </form>
  );
}
