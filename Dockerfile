# Multi-stage build to produce a small, production image

# 1) Base image
FROM node:20-bookworm-slim AS base
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

# 2) Install dependencies (with dev deps for build)
FROM base AS deps
ENV NODE_ENV=development
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --include=dev

# 3) Build the Next.js app (standalone output)
FROM deps AS build
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1
COPY . .
RUN npm run build

# 4) Production runner with standalone server
FROM base AS runner
# Add a non-root user to run the app
RUN useradd --create-home --uid 1001 nextjs
USER nextjs

# Copy the standalone server and required assets
COPY --chown=nextjs:nextjs --from=build /app/.next/standalone ./
COPY --chown=nextjs:nextjs --from=build /app/.next/static ./.next/static
COPY --chown=nextjs:nextjs --from=build /app/public ./public

# Runtime env
ENV PORT=3000 \
    HOSTNAME=0.0.0.0 \
    NEXT_TELEMETRY_DISABLED=1
EXPOSE 3000

# Healthcheck (basic)
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "require('http').get({host: '127.0.0.1', port: process.env.PORT, path: '/'}, res => res.statusCode === 200 ? process.exit(0) : process.exit(1)).on('error', () => process.exit(1))" || exit 1

# Start the standalone Next server
CMD ["node", "server.js"]

