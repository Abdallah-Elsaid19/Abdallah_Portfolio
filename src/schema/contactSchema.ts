// schema/contactSchema.ts
import { z } from "zod";

export const contactSchema = z.object({
  name:z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be at most 50 characters"),
  email:z.string().email("Invalid email address"),
  clientMessage:z.string().min(10, "Message must be at least 10 characters").max(500, "Message must be at most 500 characters"),
})

export type ContactFormData = z.infer<typeof contactSchema>;
