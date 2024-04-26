FROM node:latest

WORKDIR /website
COPY ./mywebsite /website

ENV PORT=3000
ENV ANON_KEY = null
ENV URL = localhost

EXPOSE $PORT

RUN npm i

CMD npm run build; npm start 
