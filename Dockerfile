FROM node:14.15.4-alpine

RUN mkdir -p /usr/src/frontend

WORKDIR /usr/src/frontend

COPY package*.json /usr/src/frontend/

RUN npm cache clear --force

RUN npm cache verify

RUN npm install

COPY . /usr/src/frontend

EXPOSE 4200

CMD ["npm", "start"]
