import vine from "@vinejs/vine";

const userSchema = vine.object({
	username: vine.string().email(),
	password: vine.string().minLength(8).confirmed(),
});

export const compiledUserSchema = vine.compile(userSchema);
