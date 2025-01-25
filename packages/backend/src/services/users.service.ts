import { database } from "@/config/db.config.ts";

const readAllUsers = async () => {
	return await database.collection("users").find({});
};

export { readAllUsers };
