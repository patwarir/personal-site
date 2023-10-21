# Builder

FROM node:18-alpine as builder

RUN apk update && apk add --no-cache libc6-compat

WORKDIR /personal-site/

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY ./ ./

RUN npm run build

# Runner

FROM node:18-alpine as runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN apk update && apk add --no-cache libc6-compat dumb-init

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

USER nextjs

WORKDIR /personal-site/

COPY --chown=nodejs:nextjs ./package.json ./
COPY --chown=nodejs:nextjs ./package-lock.json ./

RUN npm ci --only=production --ignore-scripts

COPY --chown=nodejs:nextjs --from=builder /personal-site/.next/ ./.next/
COPY --chown=nodejs:nextjs --from=builder /personal-site/next.config.js ./

EXPOSE 3000

ENTRYPOINT [ "dumb-init", "--" ]
CMD [ "npm", "run", "start" ]
