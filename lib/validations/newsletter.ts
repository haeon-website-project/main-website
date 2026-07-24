import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().trim().min(1, "Enter your email address.").email("Enter a valid email address."),
  /** Honeypot — real users never fill this in; bots filling any hidden field do. */
  company: z.string().max(0, "Spam check failed.").optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
