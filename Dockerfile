FROM node:14

RUN npm i -g nodemon
RUN npm install

WORKDIR /app

EXPOSE 3000

CMD ["npm","run","dev"]