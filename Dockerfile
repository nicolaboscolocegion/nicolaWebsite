FROM node:22-alpine3.23

WORKDIR /website

COPY ./mywebsite ./
RUN npm ci


RUN npm run build && npm prune --production

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]