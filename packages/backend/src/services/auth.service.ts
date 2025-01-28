import { database } from "@/config/db.config";
import type { TUser } from "@/schemas/user.schema";

const registerUser = async (email: string, password: string) => {
	const users = database.collection<TUser>("users");
	return await users.insertOne({
		email,
		password,
		createdAt: new Date(),
		lastOnline: new Date(),
		profilePicture: null,
		username: "",
	});
};

const loginUser = async (email: string) => {
	const users = database.collection<TUser>("users");
	return users.findOne({ email });
};

export { loginUser, registerUser };
