# syntax=docker.io/docker/dockerfile:1
FROM node:24-alpine

WORKDIR /app

# Copy entire standalone output
COPY ./apps/checkmate-ui/.next/standalone ./

# Copy static assets
COPY ./apps/checkmate-ui/.next/static ./apps/checkmate-ui/.next/static

WORKDIR /app/apps/checkmate-ui

EXPOSE 3000

CMD ["node", "server.js"]
