# Build stage
FROM node:22.14-alpine AS build
WORKDIR /app

RUN apk add --no-cache openssl
COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build && npx prisma generate

# Production stage
FROM node:22.14-alpine AS production
ENV NODE_ENV=production

WORKDIR /app
RUN apk add --no-cache openssl
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

COPY package.json package-lock.json* ./
COPY auto-migrate.sh ./auto-migrate.sh
RUN chmod +x ./auto-migrate.sh && npm ci --only=production --legacy-peer-deps && npm cache clean --force

COPY --from=build /app/dist ./dist
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma

RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 5000
CMD ["./auto-migrate.sh"]
