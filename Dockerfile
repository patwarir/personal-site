FROM node:14-alpine

ENV NODE_ENV=production

RUN apk add dumb-init

USER node

WORKDIR /src/personal-site/

COPY --chown=node:node ./package.json ./
COPY --chown=node:node ./package-lock.json ./

RUN npm ci --only=production

COPY --chown=node:node ./ ./

EXPOSE 3000

CMD [ "dumb-init", "npm", "run", "start" ]
