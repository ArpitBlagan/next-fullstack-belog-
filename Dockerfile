FROM node:20.12.0-alpine3.19

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

COPY prisma ./prisma

RUN npm install

COPY . .
 
EXPOSE 3000

CMD ["npm", "run", "dev"]