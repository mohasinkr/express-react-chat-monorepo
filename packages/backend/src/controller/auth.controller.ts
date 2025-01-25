import {
	compiledLoginSchema,
	compiledRegisterSchema,
} from "@/schemas/auth.schema";
import { loginUser, registerUser } from "@/services/auth.service";
import { asyncHandler } from "@/utils/asyncHandler";
import { INFO_MESSAGES } from "@/utils/constants";
import type { Request, Response } from "express";

const registerController = asyncHandler(async (req: Request, res: Response) => {
	const { email, password, password_confirmation } = req.body;

	await compiledRegisterSchema
		.validate({ email, password, password_confirmation })
		.catch((error) => {
			throw new Error(error.message);
		});

	const response = await registerUser(email, password);
	res.status(200).json({
		success: true,
		message: INFO_MESSAGES.USER_CREATED,
		data: response,
	});
});

const loginController = asyncHandler(async (req: Request, res: Response) => {
	const { email, password } = req.body;

	await compiledLoginSchema.validate({ email, password });

	const response = await loginUser(email);
	res.status(200).json({
		success: true,
		message: INFO_MESSAGES.LOGIN_SUCCESS,
		data: response,
	});
});

export { loginController, registerController };
