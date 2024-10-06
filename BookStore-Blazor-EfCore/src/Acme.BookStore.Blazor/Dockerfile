FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS build
COPY bin/Release/net8.0/publish/ app/

FROM nginx:alpine AS final
WORKDIR /usr/share/nginx/html
COPY --from=build /app/wwwroot .
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
#COPY /nginx.conf /etc/nginx/nginx.conf