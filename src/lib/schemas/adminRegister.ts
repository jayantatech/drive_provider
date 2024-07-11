import { z } from "zod";

export const adminSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6),
  phone: z.string().optional(),
  role: z.enum(["admin", "superadmin", "support", "developer"]),
});

export type AdminData = z.infer<typeof adminSchema>;
