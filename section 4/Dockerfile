#specify a base image
FROM node:16.20.0-alpine3.18

#install some dependencies
COPY ./ ./
RUN npm install

#default command

CMD ["npm", "start"]