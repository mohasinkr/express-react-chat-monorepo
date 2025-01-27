# Base stage for both development and production
FROM node:20-alpine AS base
WORKDIR /frontend
RUN npm install -g pnpm

# Development stage
FROM base AS development
ENV NODE_ENV=development
COPY package.json ./
RUN pnpm install
COPY . .
EXPOSE 5173
CMD ["pnpm", "dev"]

# Dependencies stage
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Builder stage
FROM base AS builder
COPY package.json pnpm-lock.yaml ./
RUN pnpm install
COPY . .
RUN pnpm build

# Production stage
FROM base AS production
WORKDIR /production
ENV NODE_ENV=production

COPY --from=deps /frontend/node_modules ./node_modules
COPY --from=builder /frontend/.next ./.next
COPY --from=builder /frontend/public ./public
COPY --from=builder /frontend/package.json ./package.json
COPY --from=builder /frontend/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=builder /frontend/next.config.ts ./next.config.ts

EXPOSE 3000
CMD ["pnpm", "start