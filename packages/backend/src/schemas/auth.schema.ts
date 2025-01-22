import vine from "@vinejs/vine";
import type { Infer } from "@vinejs/vine/types";

const authSchema = vine.object({
  username: vine.string().email(),
  password: vine.string().minLength(8).confirmed(),
});

export type TAuth = Infer<typeof authSchema>;

export const compiledAuthSchema = vine.compile(authSchema);
