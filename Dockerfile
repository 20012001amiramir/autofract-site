FROM node:22-alpine AS builder
WORKDIR /build

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG BUILD_ID
ENV NUXT_PUBLIC_BUILD_ID=${BUILD_ID}
RUN npm run generate:build-log || true
RUN npm run generate:og || true
RUN npm run build

FROM node:22-alpine
WORKDIR /app

COPY --from=builder /build/.output ./.output
COPY --from=builder /build/package.json ./package.json

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
