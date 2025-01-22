import rateLimit from "express-rate-limit";
import type { RateLimitRequestHandler } from "express-rate-limit";

interface RateLimitConfig {
	windowMs: number;
	max: number;
}

const defaultConfig: RateLimitConfig = {
	windowMs: 10 * 60 * 1000, // 10 minutes
	max: 100, // Limit each IP to 100 requests per windowMs
};

const createRateLimiter = (
	config: Partial<RateLimitConfig> = {},
): RateLimitRequestHandler => {
	const finalConfig = { ...defaultConfig, ...config };

	return rateLimit({
		windowMs: finalConfig.windowMs,
		max: finalConfig.max,
		message: {
			status: 429,
			error: "Too many requests, please try again later.",
			retryAfter: `${Math.ceil(finalConfig.windowMs / (1000 * 60))} mins`,
		},
		standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
		legacyHeaders: false, // Disable the `X-RateLimit-*` headers
		skipSuccessfulRequests: false, // Count successful requests against the rate limit
	});
};

export const globalRateLimiter = createRateLimiter();
export const authRateLimiter = createRateLimiter({
	windowMs: 60 * 1000,
	max: 5,
}); // 5 auth requests per minute
