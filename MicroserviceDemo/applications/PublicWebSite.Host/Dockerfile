FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["applications/PublicWebSite.Host/PublicWebSite.Host.csproj", "applications/PublicWebSite.Host/"]
COPY ["modules/product/src/ProductManagement.HttpApi.Client/ProductManagement.HttpApi.Client.csproj", "modules/product/src/ProductManagement.HttpApi.Client/"]
COPY ["modules/product/src/ProductManagement.Application.Contracts/ProductManagement.Application.Contracts.csproj", "modules/product/src/ProductManagement.Application.Contracts/"]
COPY ["modules/product/src/ProductManagement.Domain.Shared/ProductManagement.Domain.Shared.csproj", "modules/product/src/ProductManagement.Domain.Shared/"]
COPY ["shared/MsDemo.Shared/MsDemo.Shared.csproj", "shared/MsDemo.Shared/"]
RUN dotnet restore "applications/PublicWebSite.Host/PublicWebSite.Host.csproj" -nowarn:msb3202,msb3277,nu1503
COPY . .
WORKDIR "/src/applications/PublicWebSite.Host"
RUN dotnet build "PublicWebSite.Host.csproj" --no-restore -nowarn:msb3202,msb3277,nu1503 -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PublicWebSite.Host.csproj" --no-restore -nowarn:msb3202,msb3277,nu1503 -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PublicWebSite.Host.dll"]