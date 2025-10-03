FROM mcr.microsoft.com/dotnet/aspnet:9.0
COPY bin/Release/net9.0/publish/ app/
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:80
ENTRYPOINT ["dotnet", "Acme.BookStore.DbMigrator.dll"]