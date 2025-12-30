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

EXPOSE 3000

CMD ["bun", "--serve", "dist", "--port", "3000"]
