import * as z from "zod";

export const profileSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Le nom d'utilisateur doit comporter au moins 3 caractères" }),
  email: z.string().email({ message: "Email invalide" }),
  bio: z.string().max(200, { message: "La bio ne peut pas dépasser 200 caractères" }),
});

export type ProfileFormData = z.infer<typeof profileSchema>;
