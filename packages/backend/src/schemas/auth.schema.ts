import { isUnique } from "@/validations/isUnique";
import vine from "@vinejs/vine";
import type { Infer } from "@vinejs/vine/types";

const registerSchema = vine.object({
	email: vine
		.string()
		.email()
		.use(isUnique({ collection: "users", field: "email" })),
	password: vine.string().minLength(8).confirmed(),
});

const loginSchema = vine.object({
	email: vine.string().email(),
	password: vine.string().minLength(8),
});

export type TLogin = Infer<typeof loginSchema>;
export type TRegister = Infer<typeof registerSchema>;

export const compiledLoginSchema = vine.compile(loginSchema);
export const compiledRegisterSchema = vine.compile(registerSchema);
