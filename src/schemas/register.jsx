import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email(),
  fullName: z.string().refine(value => {
    const names = value.split(" ");
    return names.length >= 2 && names.every(name => name.length > 2);
  }, {
    message: "Nome Completo precisa ter pelo menos 2 nomes com mais de 2 caracteres em cada",
    path: ["fullName"],
  }),
  password: z.string().min(6),
  passwordConfirmation: z.string().min(6),
}).refine(data => data.password === data.passwordConfirmation, {
  message: "As senhas precisam ser iguais",
  path: ["passwordConfirmation"],
});

const input = {
  email: 'usuario@gmail.com',
  fullName: 'Nome Sobrenome',
  password: 'senha123',
  passwordConfirmation: 'senha123',
}

export default registerSchema;