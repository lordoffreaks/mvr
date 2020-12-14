FROM node:12-alpine as node

FROM node as builder

WORKDIR /usr/src/app/
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node as production

WORKDIR /usr/src/app/
COPY --from=builder /usr/src/app/build/ ./build
COPY server.js ./
RUN npm i express
EXPOSE 80
USER node
CMD ["node", "server.js"]
