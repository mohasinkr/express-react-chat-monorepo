import { database } from "@/config/db.config.ts";
import type { TUser } from "@/schemas/user.schema";

const readAllUsers = async () => {
	const response = await database.collection("users").find({});
	return response.toArray();
};

const readUser = async (by: Partial<TUser>) => {
	const response = await database.collection<TUser>("users").findOne(by);
	return response;
};

export { readAllUsers, readUser };
