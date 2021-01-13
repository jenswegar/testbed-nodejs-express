FROM node:14-alpine

COPY ./src /home/node/app

WORKDIR /home/node/app

RUN npm install

EXPOSE 3000

CMD ["node", "index.js"]