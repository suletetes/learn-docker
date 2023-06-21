FROM node:16-apline  as builder
WORKDIR '/app'
COPY package.json .
RUN npm install

COPY . .
RUN npm run build
