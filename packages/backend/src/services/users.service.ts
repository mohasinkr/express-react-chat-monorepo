import { database } from "@/config/db.config.ts";

const readAllUsers = async () => {
	const response = await database.collection("users").find({});
	return response.toArray();
};

export { readAllUsers };
