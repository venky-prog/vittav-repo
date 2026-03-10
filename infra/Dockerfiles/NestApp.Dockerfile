# syntax=docker.io/docker/dockerfile:1
FROM node:24-alpine

RUN corepack enable

ARG APP_NAME

WORKDIR /app

COPY ./apps/${APP_NAME}/dist/package.json .

COPY ./apps/${APP_NAME}/dist/pnpm-lock.yaml .

COPY ./apps/${APP_NAME}/dist .

RUN pnpm install --prod

EXPOSE 3000

CMD ["node", "main.js"]

