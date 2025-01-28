import AuthenticationError from "@/errors/auth.error";
import CustomError from "@/errors/base.error";
import {
	compiledLoginSchema,
	compiledRegisterSchema,
} from "@/schemas/auth.schema";
import { registerUser } from "@/services/auth.service";
import { readUser } from "@/services/users.service";
import { asyncHandler } from "@/utils/asyncHandler";
import { ERROR_MESSAGES, INFO_MESSAGES } from "@/utils/constants";
import { generateToken } from "@/utils/generateJWT";
import type { Request, Response } from "express";

const registerController = asyncHandler(async (req: Request, res: Response) => {
	const { email, password, password_confirmation } = req.body;

	await compiledRegisterSchema
		.validate({ email, password, password_confirmation })
		.catch((error) => {
			throw new Error(error.message);
		});

	const hashedPassword = await Bun.password.hash(password, "bcrypt");

	const response = await registerUser(email, hashedPassword);
	if (response.acknowledged) {
		const token = generateToken({ email, password });

		res.status(200).json({
			success: true,
			message: INFO_MESSAGES.USER_CREATED,
			data: {
				email,
				token,
			},
		});
	}
	throw new CustomError(ERROR_MESSAGES.DATABASE_ERROR);
});

const loginController = asyncHandler(async (req: Request, res: Response) => {
	const { email, password } = req.body;

	await compiledLoginSchema.validate({ email, password });

	const document = await readUser({ email });
	if (!document) {
		throw new AuthenticationError(ERROR_MESSAGES.USER_NOT_FOUND);
	}

	const isMatch = await Bun.password.verify(password, document.password);
	if (!isMatch) {
		throw new AuthenticationError(ERROR_MESSAGES.INVALID_CREDENTIALS);
	}

	const JWTPayload = {
		userId: document._id,
		email: document.email,
		username: document.username,
	}

	const token = generateToken(JWTPayload);

	res.status(200).json({
		success: true,
		message: INFO_MESSAGES.LOGIN_SUCCESS,
		data: {
			token,
		},
	});
});

export { loginController, registerController };
