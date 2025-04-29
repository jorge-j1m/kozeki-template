FROM oven/bun:1.2.10 AS build

WORKDIR /app

# Cache packages
COPY package.json package.json
COPY bun.lock bun.lock

COPY apps/api/package.json apps/api/package.json
COPY packages/config/package.json packages/config/package.json

RUN bun install

COPY apps/api apps/api
COPY packages/config packages/config

ENV NODE_ENV=production

WORKDIR /app/apps/api
RUN bun run build

ENV NODE_ENV=production
ENV PORT=3001

CMD ["./server"]

EXPOSE 3001

# -----------
# FROM gcr.io/distroless/base

# WORKDIR /app

# COPY --from=build /app/server server
# COPY --from=build /app/node_modules node_modules
# COPY ./apps/server/.env .env

# ENV NODE_ENV=production
# ENV PORT=3001
# ENV OTEL=false

# CMD ["./server"]

# EXPOSE 3001
