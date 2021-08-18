FROM node:14.16.0-alpine3.13
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
#EXPOSE 5000
RUN mkdir prisma/libraryly.db
CMD ["npm", "start"]