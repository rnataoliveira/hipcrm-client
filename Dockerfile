FROM node:9.11.1 AS build-env
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build

FROM nginx
WORKDIR /app
COPY --from=build-env /app/build /usr/share/nginx/html