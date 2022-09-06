FROM nginx:alpine
WORKDIR /app
COPY dist/EShopOnAbp /usr/share/nginx/html
COPY dynamic-env.json /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf