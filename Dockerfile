FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

ENV PORT=4002

EXPOSE 4002

CMD ["npm", "start"]
