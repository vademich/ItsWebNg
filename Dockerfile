# FROM node
# WORKDIR /app
# COPY . .
# RUN npm install --force
# CMD ["npm", "start"]
#STAGE 1
FROM node:20.9.0 AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --force
COPY . .
RUN npm run build

#STAGE 2
FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

