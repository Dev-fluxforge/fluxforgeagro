# Multi-stage production Dockerfile for FluxForge Agro-Enterprise SSR App
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy application source code
COPY . .

# Build Angular SSR application
RUN npm run build

# Production runner stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy build artifacts and dependencies from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/.data ./.data

# Install production dependencies only
RUN npm ci --only=production --ignore-scripts

EXPOSE 3000

CMD ["node", "dist/app/server/server.mjs"]
