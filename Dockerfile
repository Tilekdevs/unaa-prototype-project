# Используйте официальный образ Node.js
FROM node:18-alpine 

# Установите рабочую директорию внутри контейнера
WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Соберите приложение
RUN npm run build

# Определите команду, которая будет запущена при старте контейнера
CMD ["npm", "start"]
