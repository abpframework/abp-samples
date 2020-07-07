#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["microservices/ProductService.Host/ProductService.Host.csproj", "microservices/ProductService.Host/"]
COPY ["modules/product/src/ProductManagement.EntityFrameworkCore/ProductManagement.EntityFrameworkCore.csproj", "modules/product/src/ProductManagement.EntityFrameworkCore/"]
COPY ["modules/product/src/ProductManagement.Domain/ProductManagement.Domain.csproj", "modules/product/src/ProductManagement.Domain/"]
COPY ["modules/product/src/ProductManagement.Domain.Shared/ProductManagement.Domain.Shared.csproj", "modules/product/src/ProductManagement.Domain.Shared/"]
COPY ["modules/product/src/ProductManagement.Application/ProductManagement.Application.csproj", "modules/product/src/ProductManagement.Application/"]
COPY ["modules/product/src/ProductManagement.Application.Contracts/ProductManagement.Application.Contracts.csproj", "modules/product/src/ProductManagement.Application.Contracts/"]
COPY ["modules/product/src/ProductManagement.HttpApi/ProductManagement.HttpApi.csproj", "modules/product/src/ProductManagement.HttpApi/"]
COPY ["shared/MsDemo.Shared/MsDemo.Shared.csproj", "shared/MsDemo.Shared/"]
RUN dotnet restore "microservices/ProductService.Host/ProductService.Host.csproj" -nowarn:msb3202,msb3277,nu1503
COPY . .
WORKDIR "/src/microservices/ProductService.Host"
RUN dotnet build "ProductService.Host.csproj" --no-restore -nowarn:msb3202,msb3277,nu1503 -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ProductService.Host.csproj" --no-restore -nowarn:msb3202,msb3277,nu1503 -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ProductService.Host.dll"]