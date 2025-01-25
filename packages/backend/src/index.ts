import { initMiddlewares } from "@/middleware";
import { readAllUsers } from "@/services/users.service.ts";
import { asyncHandler } from "@/utils/asyncHandler.ts";
import express, {
	type NextFunction,
	type Request,
	type Response,
} from "express";
import { initializeDatabase } from "./config/db.config";
import { globalErrorHandler } from "./middleware/errorHandler.middleware";
import indexRouter from "./routes/index.routes";

// Use Bun's built-in env
const HOST = process.env.HOST || "http://localhost";
const PORT = Number(process.env.PORT || "5000");

const app = express();

// setup the common middlewares (logging,body parser, cors, rate limiter etc )
initMiddlewares(app);

app.get("/", (_, res: express.Response) => {
	res.send(`Yep, the server is running🏃 on ${PORT}`);
});

app.get(
	"/read-users",
	asyncHandler(async (_req, res: express.Response) => {
		const response = await readAllUsers();
		console.log(response);
		res.end();
		//	res.json({
		//		status: true,
		//		data: response,
		//	})
	}),
);

app.get("/gen-error", (_req: Request, _res: Response, next: NextFunction) => {
	next(new Error("Unknown exception occured!"));
});

app.use("/api/v1", indexRouter);

app.get("/health-check", (_req, res) => {
	const uptimeInSeconds = process.uptime();
	const uptimeInHours = Math.floor(uptimeInSeconds / 3600);
	const uptimeInMinutes = Math.floor((uptimeInSeconds % 3600) / 60);
	const uptimeInSecondsRemaining = Math.floor(uptimeInSeconds % 60);

	const uptime = `${uptimeInHours}h ${uptimeInMinutes}m ${uptimeInSecondsRemaining}s`;
	const healthcheck = {
		uptime,
		message: "OK",
		timestamp: new Date().toISOString(),
	};
	res.send(healthcheck);
});

app.use(globalErrorHandler);

app.listen(PORT, async () => {
	initializeDatabase();
	console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
