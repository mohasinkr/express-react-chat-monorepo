import type { Application } from "express";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import { globalRateLimiter } from "./rateLimiter.middleware";

export const initMiddlewares = (app: Application) => {
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	// app.use(cors(corsOptions));
	app.use(morgan("dev"));
	app.use(helmet());
	app.use(globalRateLimiter);
};
