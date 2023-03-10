FROM node:16
WORKDIR /usr/src/clean-code-ts
COPY ./package.json .
RUN npm install --omit=dev
# COPY ./dist ./dist
# EXPOSE 5050
# CMD npm start
