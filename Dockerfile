FROM node:14-alpine

COPY . /home/node/app

WORKDIR /home/node/app

RUN npm install

EXPOSE 8080

CMD ["node", "src/server.js"]