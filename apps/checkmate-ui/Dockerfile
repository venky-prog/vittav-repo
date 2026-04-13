# syntax=docker.io/docker/dockerfile:1
FROM node:24-alpine AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/checkmate-ui/package.json ./apps/checkmate-ui/

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm nx build checkmate-ui --prod

FROM node:24-alpine AS production

WORKDIR /app

COPY --from=builder /app/apps/checkmate-ui/.next/standalone ./

COPY --from=builder /app/apps/checkmate-ui/.next/static ./apps/checkmate-ui/.next/static

WORKDIR /app/apps/checkmate-ui

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

CMD ["node", "server.js"]
