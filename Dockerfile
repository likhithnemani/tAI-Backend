FROM node:12

RUN mkdir /home/tAI

COPY . /home/tAI

WORKDIR /home/tAI

RUN npm install

EXPOSE 5000

CMD ["node","app.js"]