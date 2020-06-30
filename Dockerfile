FROM node:12

RUN mkdir /home/tAI

COPY . /home/tAI

WORKDIR /home/tAI

RUN npm install

EXPOSE 8080

CMD ["node","app.js"]