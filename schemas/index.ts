import * as z from "zod";
import validator from "validator";
export const registerSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "first name should be atleast 2 characters")
      .max(35, "first name should be atmost 35 characters")
      .regex(new RegExp("^[a-zA-Z]+$"), "No special characters allowded!"),
    lastName: z
      .string()
      .min(2, "last name should be atleast 2 characters long")
      .max(35, "last name should be atmost 35 characters")
      .regex(new RegExp("^[a-zA-Z]+$"), "No special characters allowded!"),
    email: z.string().email("enter valid emal address"),
    phoneNumber: z
      .string()
      .refine(validator.isMobilePhone, "enter valid mobile number"),
    password: z
      .string()
      .min(6, "password should be atleast 6 characters long")
      .max(40, "password should be atmost 40 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "confirmPassword and password doesnot match!",
    path: ["confirmPassword"],
  });
export type registerdata = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email("please enter valid email!"),
  password: z.string(),
});
export type logindata = z.infer<typeof loginSchema>;
