# ===========================
# Stage 1 — Build
# ===========================
FROM oven/bun AS builder

WORKDIR /app

COPY bun.lock package.json ./
RUN bun install

COPY . .
RUN bun run build


# ===========================
# Stage 2 — Static Server
# ===========================
FROM oven/bun

WORKDIR /app

COPY --from=builder /app/dist ./dist

RUN bun add serve

EXPOSE 3000

CMD ["bunx", "serve", "dist", "-l", "3000", "-s"]
