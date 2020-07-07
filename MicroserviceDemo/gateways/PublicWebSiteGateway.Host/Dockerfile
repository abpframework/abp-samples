FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["gateways/PublicWebSiteGateway.Host/PublicWebSiteGateway.Host.csproj", "gateways/PublicWebSiteGateway.Host/"]
COPY ["modules/product/src/ProductManagement.HttpApi/ProductManagement.HttpApi.csproj", "modules/product/src/ProductManagement.HttpApi/"]
COPY ["modules/product/src/ProductManagement.Application.Contracts/ProductManagement.Application.Contracts.csproj", "modules/product/src/ProductManagement.Application.Contracts/"]
COPY ["modules/product/src/ProductManagement.Domain.Shared/ProductManagement.Domain.Shared.csproj", "modules/product/src/ProductManagement.Domain.Shared/"]
COPY ["shared/MsDemo.Shared/MsDemo.Shared.csproj", "shared/MsDemo.Shared/"]
RUN dotnet restore "gateways/PublicWebSiteGateway.Host/PublicWebSiteGateway.Host.csproj" -nowarn:msb3202,msb3277,nu1503
COPY . .
WORKDIR "/src/gateways/PublicWebSiteGateway.Host"
RUN dotnet build "PublicWebSiteGateway.Host.csproj" --no-restore -nowarn:msb3202,msb3277,nu1503 -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PublicWebSiteGateway.Host.csproj" --no-restore -nowarn:msb3202,msb3277,nu1503 -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PublicWebSiteGateway.Host.dll"]