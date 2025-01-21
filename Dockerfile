FROM node:latest

WORKDIR /src/app

COPY . .

RUN npm install

RUN npm install dotenv && npm install nodemon

EXPOSE 3002

ENTRYPOINT [ "npm","start" ]