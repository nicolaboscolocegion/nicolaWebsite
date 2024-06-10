FROM node:latest

WORKDIR /website
COPY ./mywebsite /website

ENV PORT=3000
ENV ANON_KEY = null
ENV URL = localhost
ARG ANON_KEY

EXPOSE $PORT

RUN npm i
RUN npm run build

ARG ANON_KEY=""

CMD npm start 
