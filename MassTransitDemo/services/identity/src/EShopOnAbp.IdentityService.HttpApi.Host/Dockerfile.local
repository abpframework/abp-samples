  FROM mcr.microsoft.com/dotnet/aspnet:6.0
  COPY bin/Release/net6.0/publish/ app/
  WORKDIR /app
  ENTRYPOINT ["dotnet", "EShopOnAbp.IdentityService.HttpApi.Host.dll"]