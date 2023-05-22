import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).refine(value => {
    return value.length >= 6
  }, {
    message: "Senha precisa ter pelo menos 6 caracteres",
    path: ["password"],
  }),
});

