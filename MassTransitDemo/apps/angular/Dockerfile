FROM node:18-alpine as build

WORKDIR /app
COPY package*.json /app/

RUN npm install
COPY . /app
ARG configuration=production
RUN npm run ng build -- --output-path=dist/EShopOnAbp --configuration $configuration

FROM nginx:alpine
COPY dynamic-env.json /usr/share/nginx/html
COPY nginx.conf  /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/EShopOnAbp/ /usr/share/nginx/html
