FROM node:10-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . . 
RUN npm run build


FROM nginx:1.14.0-alpine
COPY --from=0 /app/dist /usr/share/nginx/html

