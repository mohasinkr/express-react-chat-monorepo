import AuthenticationError from "@/errors/auth.error";
import type { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";

export const authMiddleware = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) {
		return next(new AuthenticationError("Token not found"));
	}

	try {
		verify(token, process.env.JWT_SECRET!) as JwtPayload;
		return next();
	} catch (error) {
		return next(new AuthenticationError("Invalid or expired token"));
	}
};
