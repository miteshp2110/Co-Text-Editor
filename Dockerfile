FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node","index" ]

EXPOSE 3000