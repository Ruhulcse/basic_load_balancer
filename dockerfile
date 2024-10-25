FROM node:18

# Set the working directory inside the container to /usr/src/app
WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["node", "app.js"]