# syntax=docker/dockerfile:1.7

# Multi-stage build optimized for Next.js standalone output
FROM node:20-bookworm-slim AS base
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# 1) Install dependencies (including optional deps for next/image -> sharp)
FROM base AS deps
ENV NODE_ENV=development
COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --include=dev --include=optional

# 2) Build app with BuildKit cache for incremental Next builds
FROM deps AS build
ENV NODE_ENV=production
COPY . .
RUN --mount=type=cache,target=/app/.next/cache \
    npm run build

# 3) Runtime image (small + secure)
FROM base AS runner
ENV NODE_ENV=production \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    NEXT_SHARP_PATH=/app/node_modules/sharp \
    NEXT_TELEMETRY_DISABLED=1

RUN groupadd --system --gid 1001 nodejs \
    && useradd --system --uid 1001 --gid nodejs nextjs

# Copy standalone server output and static assets
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=build --chown=nextjs:nodejs /app/public ./public

# next/image cache path must stay writable in runtime
RUN mkdir -p /app/.next/cache/images \
    && chown -R nextjs:nodejs /app/.next

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
  CMD node -e "require('http').get({host: '127.0.0.1', port: process.env.PORT, path: '/'}, res => res.statusCode === 200 ? process.exit(0) : process.exit(1)).on('error', () => process.exit(1))" || exit 1

CMD ["node", "server.js"]
