# Builder
FROM node:14-alpine as builder

RUN apk update && apk add --no-cache libc6-compat

WORKDIR /src/site/

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY ./ ./

RUN npm run build

# Runner
FROM node:14-alpine as runner

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN apk update && apk add --no-cache libc6-compat dumb-init

USER node

WORKDIR /src/site/

COPY --chown=node:node ./package.json ./
COPY --chown=node:node ./package-lock.json ./

RUN npm ci --only=production --ignore-scripts

COPY --chown=node:node ./public/ ./public/

COPY --chown=node:node --from=builder /src/site/.next/ ./.next/
COPY --chown=node:node --from=builder /src/site/next.config.js ./

EXPOSE 3000

ENTRYPOINT [ "dumb-init", "--" ]
CMD [ "npm", "run", "start" ]
