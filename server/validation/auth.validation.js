import { z } from "zod";

export const registerSchema = z.object({
  nombre: z.string({
    required_error: "El nombre es requerido",
  }),
  email: z
    .string({
      required_error: "El correo es requerido",
    })
    .email({
      message: "El correo no es valida",
    }),
  document: z.string({
    required_error: "El documento es requerido",
  }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
    })
    .min(6, {
      message: "La contraseña debe tener minimo 6 caracteres",
    }),
});



export const loginSchema = z.object({
   
    email: z
      .string({
        required_error: "El correo es requerido",
      })
      .email({
        message: "El correo no es valido",
      }),
    password: z
      .string({
        required_error: "La contraseña es requerida",
      })
      .min(6, {
        message: "La contraseña debe tener minimo 6 caracteres",
      }),
  });