// src/errors/auth.error.ts
import CustomError from "@/errors/base.error.js";

class AuthenticationError extends CustomError {
	constructor(message: string, statusCode = 400) {
		super(message, statusCode);
		this.name = this.constructor.name; // Set the error name to the class name
		this.isOperational = true;
		Error.captureStackTrace(this, this.constructor);
	}
}

export default AuthenticationError;
