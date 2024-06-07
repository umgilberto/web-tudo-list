import { z } from "zod";

export interface LoginFormSchema {
  email: string;
  password: string;
}

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  password: z
  .string()
  .min(6, {
    message: "Password must be at least 2 characters.",
  })
 
})