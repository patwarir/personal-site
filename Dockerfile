FROM node:14-alpine

ENV NODE_ENV=production

WORKDIR /src/personal-site/

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY ./ ./

EXPOSE 3000

CMD [ "npm", "run", "start" ]
