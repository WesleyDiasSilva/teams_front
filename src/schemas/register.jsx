import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email().refine(value => {
    return value.length >= 4
  }, {
    message: "Precisa ser um e-mail válido",
    path: ["email"],
  }),
  fullName: z.string().refine(value => {
    const names = value.split(" ");
    return names.length >= 2 && names.every(name => name.length > 2);
  }, {
    message: "Preencha com seu nome completo por favor!",
    path: ["fullName"],
  }),
  password: z.string().min(6).refine(value => {
    return value.length >= 6
  }, {
    message: "Senha precisa ter pelo menos 6 caracteres",
    path: ["password"],
  }),
  passwordConfirmation: z.string().min(6),
}).refine(data => data.password === data.passwordConfirmation, {
  message: "As senhas precisam ser iguais",
  path: ["passwordConfirmation"],
});


export default registerSchema;