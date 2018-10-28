FROM node:10-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:10-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY --from=0 /app/dist ./dist
CMD ["node", "dist"]
