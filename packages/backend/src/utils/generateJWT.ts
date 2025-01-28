import { sign } from "jsonwebtoken";

export function generateToken(payload: object): string {
	return sign(payload, process.env.JWT_SECRET!, {
		expiresIn: "5d",
	});
}
