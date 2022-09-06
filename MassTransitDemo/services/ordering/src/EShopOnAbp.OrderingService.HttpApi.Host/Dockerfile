FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src

# It's important to keep lines from here down to "COPY . ." identical in all Dockerfiles
# to take advantage of Docker's build cache, to speed up local container builds
COPY "EShopOnAbp.sln" "EShopOnAbp.sln"

# Applications
COPY "apps/auth-server/src/EShopOnAbp.AuthServer/EShopOnAbp.AuthServer.csproj" "apps/auth-server/src/EShopOnAbp.AuthServer/EShopOnAbp.AuthServer.csproj"
COPY "apps/public-web/src/EShopOnAbp.PublicWeb/EShopOnAbp.PublicWeb.csproj" "apps/public-web/src/EShopOnAbp.PublicWeb/EShopOnAbp.PublicWeb.csproj"

# Shared
COPY "shared/EShopOnAbp.Shared.Hosting/EShopOnAbp.Shared.Hosting.csproj" "shared/EShopOnAbp.Shared.Hosting/EShopOnAbp.Shared.Hosting.csproj"
COPY "shared/EShopOnAbp.Shared.Hosting.AspNetCore/EShopOnAbp.Shared.Hosting.AspNetCore.csproj" "shared/EShopOnAbp.Shared.Hosting.AspNetCore/EShopOnAbp.Shared.Hosting.AspNetCore.csproj"
COPY "shared/EShopOnAbp.Shared.Hosting.Gateways/EShopOnAbp.Shared.Hosting.Gateways.csproj" "shared/EShopOnAbp.Shared.Hosting.Gateways/EShopOnAbp.Shared.Hosting.Gateways.csproj"
COPY "shared/EShopOnAbp.Shared.Hosting.Microservices/EShopOnAbp.Shared.Hosting.Microservices.csproj" "shared/EShopOnAbp.Shared.Hosting.Microservices/EShopOnAbp.Shared.Hosting.Microservices.csproj"
COPY "shared/EShopOnAbp.Shared.Localization/EShopOnAbp.Shared.Localization.csproj" "shared/EShopOnAbp.Shared.Localization/EShopOnAbp.Shared.Localization.csproj"

# Microservices
COPY "services/administration/src/EShopOnAbp.AdministrationService.HttpApi.Host/EShopOnAbp.AdministrationService.HttpApi.Host.csproj" "services/administration/src/EShopOnAbp.AdministrationService.HttpApi.Host/EShopOnAbp.AdministrationService.HttpApi.Host.csproj"
COPY "services/identity/src/EShopOnAbp.IdentityService.HttpApi.Host/EShopOnAbp.IdentityService.HttpApi.Host.csproj" "services/identity/src/EShopOnAbp.IdentityService.HttpApi.Host/EShopOnAbp.IdentityService.HttpApi.Host.csproj"
COPY "services/basket/src/EShopOnAbp.BasketService/EShopOnAbp.BasketService.csproj" "services/basket/src/EShopOnAbp.BasketService/EShopOnAbp.BasketService.csproj"
COPY "services/ordering/src/EShopOnAbp.OrderingService.HttpApi.Host/EShopOnAbp.OrderingService.HttpApi.Host.csproj" "services/ordering/src/EShopOnAbp.OrderingService.HttpApi.Host/EShopOnAbp.OrderingService.HttpApi.Host.csproj"
COPY "services/catalog/src/EShopOnAbp.CatalogService.HttpApi.Host/EShopOnAbp.CatalogService.HttpApi.Host.csproj" "services/catalog/src/EShopOnAbp.CatalogService.HttpApi.Host/EShopOnAbp.CatalogService.HttpApi.Host.csproj"
COPY "services/payment/src/EShopOnAbp.PaymentService.HttpApi.Host/EShopOnAbp.PaymentService.HttpApi.Host.csproj" "services/payment/src/EShopOnAbp.PaymentService.HttpApi.Host/EShopOnAbp.PaymentService.HttpApi.Host.csproj"

# Gateways
COPY "gateways/web/src/EShopOnAbp.WebGateway/EShopOnAbp.WebGateway.csproj" "gateways/web/src/EShopOnAbp.WebGateway/EShopOnAbp.WebGateway.csproj"
COPY "gateways/web-public/src/EShopOnAbp.WebPublicGateway/EShopOnAbp.WebPublicGateway.csproj" "gateways/web-public/src/EShopOnAbp.WebPublicGateway/EShopOnAbp.WebPublicGateway.csproj"

COPY "NuGet.Config" "NuGet.Config"

RUN dotnet restore "EShopOnAbp.sln"
COPY . .

WORKDIR "/src/services/ordering/src/EShopOnAbp.OrderingService.HttpApi.Host"
RUN dotnet publish -c Release -o /app 
# Should be used after .net6 is out of preview for better performance
# RUN dotnet publish --no-restore -c Release -o /app 

FROM build AS publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "EShopOnAbp.OrderingService.HttpApi.Host.dll"]