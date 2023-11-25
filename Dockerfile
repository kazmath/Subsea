FROM node:alpine as base

WORKDIR /app

COPY package.json ./

RUN rm -rf node_modules && npm install --frozen-lockfile && npm cache verify

COPY . .

EXPOSE 3000

CMD [ "node", "./app.js" ]
