FROM node:latest

WORKDIR /app

COPY . .

RUNN npm install

EXPOSE 3000

CMD ["npm", "test"]
