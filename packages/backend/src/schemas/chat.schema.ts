import vine from "@vinejs/vine";
import type { Infer } from "@vinejs/vine/types";

const chatSchema = vine.object({
	type: vine.enum(["one-on-one", "group"]),
	participants: vine.array(vine.string()),
	createdAt: vine.date(),
	updatedAt: vine.date(),
});

const messageSchema = vine.object({
	senderId: vine.string(),
	chatId: vine.string(),
	content: vine.string(),
	media: vine.string().optional(),
	status: vine.enum(["sent", "delivered", "read"]),
	createdAt: vine.date(),
});

const compiledMessageSchema = vine.compile(messageSchema);
const compiledChatSchema = vine.compile(chatSchema);

export type TChat = Infer<typeof chatSchema>;
export type TMessage = Infer<typeof messageSchema>;

export { compiledChatSchema, compiledMessageSchema };
