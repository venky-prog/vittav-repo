# syntax=docker.io/docker/dockerfile:1
FROM node:24-alpine

ARG APP_NAME

WORKDIR /app

# Copy entire standalone output
COPY ./apps/${APP_NAME}/.next/standalone ./

# Copy static assets
COPY ./apps/${APP_NAME}/.next/static ./apps/${APP_NAME}/.next/static

WORKDIR /app/apps/${APP_NAME}

EXPOSE 3000

CMD ["node", "server.js"]
