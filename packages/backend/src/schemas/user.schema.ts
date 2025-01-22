import vine from "@vinejs/vine";
import type { Infer } from "@vinejs/vine/types";

const userSchema = vine.object({
  email: vine.string().email(),
  password: vine.string().minLength(8).confirmed(),
  username: vine.string().minLength(3).maxLength(20),
  profilePicture: vine.string().optional(),
  lastSeenAt: vine.date().optional(),
});

export type TAuth = Infer<typeof userSchema>;

export const compiledUserSchema = vine.compile(userSchema);
