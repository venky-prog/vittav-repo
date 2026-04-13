# syntax=docker.io/docker/dockerfile:1
FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/checkmate-apis/package.json ./apps/checkmate-apis/

RUN npm install -g pnpm

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm nx build checkmate-apis --prod

RUN pnpm nx prune checkmate-apis --prod

FROM node:24-alpine AS deps

WORKDIR /app

RUN npm install -g pnpm

COPY --from=builder /app/apps/checkmate-apis/dist .

RUN pnpm install --prod --frozen-lockfile

FROM node:24-alpine AS production

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app .

EXPOSE 3000

CMD [ "node", "main.js" ]

