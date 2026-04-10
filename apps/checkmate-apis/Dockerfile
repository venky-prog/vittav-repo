# syntax=docker.io/docker/dockerfile:1
FROM node:24-alpine

RUN corepack enable

WORKDIR /app

COPY ./apps/checkmate-apis/dist/package.json .

COPY ./apps/checkmate-apis/dist/pnpm-lock.yaml .

COPY ./apps/checkmate-apis/dist .

RUN pnpm install --prod

EXPOSE 3000

CMD ["node", "main.js"]

