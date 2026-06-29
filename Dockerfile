# ---------- Base ----------
FROM node:20-alpine AS base
WORKDIR /app

# ---------- Dependencias ----------
FROM base AS deps
COPY package.json package-lock.json* ./
COPY prisma ./prisma
RUN npm install

# ---------- Build ----------
FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

# ---------- Runtime ----------
FROM base AS runner
ENV NODE_ENV=production

COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/src/generated/prisma ./src/generated/prisma
COPY --from=build /app/instrumentation.js ./instrumentation.js

RUN mkdir -p .prisma/client && \
  cp -R node_modules/.prisma/* .prisma/ && \
  cp -f node_modules/@prisma/engines/libquery_engine-*.so.node .prisma/client/

RUN apk add --no-cache mysql-client

EXPOSE 3000
CMD ["sh", "-c", "until mysql --protocol=tcp --ssl=0 -h ${DATABASE_HOST:-db} -u${DATABASE_USER:-totem} -p${DATABASE_PASSWORD:-totem_password} -e 'SELECT 1' >/dev/null 2>&1; do sleep 1; done; npx prisma migrate deploy && npm start"]
