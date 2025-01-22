import { database } from "@/config/db.config"; 

const loginService = (email: string, password: string) => {
	const collection = database.collection("users");
    
};

export { loginService };