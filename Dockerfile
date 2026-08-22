FROM node:22-alpine AS builder
WORKDIR /build

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

ARG BUILD_ID
ENV NUXT_PUBLIC_BUILD_ID=${BUILD_ID}
# OG images are committed as brand assets (generated locally where fonts exist).
# Do NOT regenerate here — alpine has no fonts and would render tofu glyphs.
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
