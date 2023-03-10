FROM node:14-alpine
WORKDIR /usr/src/clean-code-ts
COPY ./package.json .
RUN npm install --only=prod
# COPY ./dist ./dist
# EXPOSE 5050
# CMD npm start
