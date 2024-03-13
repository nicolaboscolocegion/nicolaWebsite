FROM node:latest

WORKDIR /website
COPY ./mywebsite /website

ENV PORT=3000
ENV ANON_TOKEN = null
ENV URL = localhost

EXPOSE $PORT

CMD npm i; npm run build; npm start 