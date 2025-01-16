# Builder

FROM node:alpine AS builder

RUN apk update && apk add --no-cache libc6-compat

WORKDIR /personal-site/

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY ./ ./

RUN npm run build

# Runner

FROM node:alpine AS runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN apk update && apk add --no-cache libc6-compat dumb-init

WORKDIR /personal-site/

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci --omit=dev

COPY --from=builder /personal-site/public ./public
COPY --from=builder /personal-site/.next/ ./.next/
COPY --from=builder /personal-site/next.config.ts ./

EXPOSE 3000

ENTRYPOINT [ "dumb-init", "--" ]
CMD [ "npm", "run", "start" ]
