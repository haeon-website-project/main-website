"use server";

import { newsletterSchema } from "@/lib/validations/newsletter";

export interface NewsletterActionResult {
  success: boolean;
  message: string;
}

export async function subscribeToNewsletter(input: unknown): Promise<NewsletterActionResult> {
  const parsed = newsletterSchema.safeParse(input);

  if (!parsed.success) {
    return { success: false, message: parsed.error.issues[0]?.message ?? "Invalid submission." };
  }

  // TODO: wire up to the email provider (e.g. Klaviyo, Mailchimp) once credentials exist.
  await new Promise((resolve) => setTimeout(resolve, 400));

  return { success: true, message: "You're on the list. Welcome to Mikei." };
}
