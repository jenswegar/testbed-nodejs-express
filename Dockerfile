FROM node:10-alpine

COPY . /home/node/app

WORKDIR /home/node/app

RUN npm install

EXPOSE 3000

CMD ["node", "src/index.js"]