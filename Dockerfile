FROM alpine:3.16

ENV NODE_VERSION 14.21.3

WORKDIR /usr/src/clean-node-ts
COPY ./package.json .
RUN npm install --only=prod
COPY ./dist ./dist
EXPOSE 5000
CMD npm start
