import vine from "@vinejs/vine";
import type { Infer } from "@vinejs/vine/types";

const messageSchema = vine.object({
	type: vine.enum(["one-on-one", "group"]),
	sender: vine.string(),
	reciepients: vine.string(),
	content: vine.string(),
	media: vine.string().optional(), //to be stored in s3
	status: vine.enum(["sent", "delivered", "read"]),
	createdAt: vine.date(),
});

const compiledMessageSchema = vine.compile(messageSchema);

export type TMessage = Infer<typeof messageSchema>;

export { compiledMessageSchema };
