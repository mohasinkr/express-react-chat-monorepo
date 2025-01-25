import {
	loginController,
	registerController,
} from "@/controller/auth.controller";
import { authRateLimiter } from "@/middleware/rateLimiter.middleware";
import { Router } from "express";

const router = Router();

router.post("/register", authRateLimiter, registerController);
router.post("/login", authRateLimiter, loginController);

export default router;
