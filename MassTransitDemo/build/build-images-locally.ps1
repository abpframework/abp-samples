param ($version='1.0.0')

$currentFolder = $PSScriptRoot
$slnFolder = Join-Path $currentFolder "../"
# Apps
$webAppFolder = Join-Path $slnFolder "apps/angular"
$authserverFolder = Join-Path $slnFolder "apps/auth-server/src/EShopOnAbp.AuthServer"
$publicWebFolder = Join-Path $slnFolder "apps/public-web/src/EShopOnAbp.PublicWeb"
# Gateways
$webGatewayFolder = Join-Path $slnFolder "gateways/web/src/EShopOnAbp.WebGateway"
$webPublicGatewayFolder = Join-Path $slnFolder "gateways/web-public/src/EShopOnAbp.WebPublicGateway"
# Microservices
$identityServiceFolder = Join-Path $slnFolder "services/identity/src/EShopOnAbp.IdentityService.HttpApi.Host"
$administrationServiceFolder = Join-Path $slnFolder "services/administration/src/EShopOnAbp.AdministrationService.HttpApi.Host"
$basketServiceFolder = Join-Path $slnFolder "services/basket/src/EShopOnAbp.BasketService"
$catalogServiceFolder = Join-Path $slnFolder "services/catalog/src/EShopOnAbp.CatalogService.HttpApi.Host"
$paymentServiceFolder = Join-Path $slnFolder "services/payment/src/EShopOnAbp.PaymentService.HttpApi.Host"
$orderingServiceFolder = Join-Path $slnFolder "services/ordering/src/EShopOnAbp.OrderingService.HttpApi.Host"

$total = 11

### Angular WEB App(WWW)
Write-Host "*** BUILDING WEB (WWW) 1/$total ****************" -ForegroundColor Green
Set-Location $webAppFolder
yarn
# ng build --prod
npm run build:prod
docker build -f Dockerfile.local -t eshoponabp/app-web:$version .

### AUTH-SERVER
Write-Host "*** BUILDING AUTH-SERVER 2/$total ****************" -ForegroundColor Green
Set-Location $authserverFolder
dotnet publish -c Release
docker build -f Dockerfile.local -t eshoponabp/app-authserver:$version .

### PUBLIC-WEB
Write-Host "*** BUILDING WEB-PUBLIC 3/$total ****************" -ForegroundColor Green
Set-Location $publicWebFolder
dotnet publish -c Release
docker build -f Dockerfile.local -t eshoponabp/app-publicweb:$version .

### WEB-GATEWAY
Write-Host "*** BUILDING WEB-GATEWAY 4/$total ****************" -ForegroundColor Green
Set-Location $webGatewayFolder
dotnet publish -c Release
docker build -f Dockerfile.local -t eshoponabp/gateway-web:$version .

### PUBLICWEB-GATEWAY
Write-Host "*** BUILDING WEB-PUBLIC-GATEWAY 5/$total ****************" -ForegroundColor Green
Set-Location $webPublicGatewayFolder
dotnet publish -c Release
docker build -f Dockerfile.local -t eshoponabp/gateway-web-public:$version .

### IDENTITY-SERVICE
Write-Host "*** BUILDING IDENTITY-SERVICE 6/$total ****************" -ForegroundColor Green
Set-Location $identityServiceFolder
dotnet publish -c Release
docker build -f Dockerfile.local -t eshoponabp/service-identity:$version .

### ADMINISTRATION-SERVICE
Write-Host "*** BUILDING ADMINISTRATION-SERVICE 7/$total ****************" -ForegroundColor Green
Set-Location $administrationServiceFolder
dotnet publish -c Release
docker build -f Dockerfile.local -t eshoponabp/service-administration:$version .

### BASKET-SERVICE
Write-Host "**************** BUILDING BASKET-SERVICE 8/$total ****************" -ForegroundColor Green
Set-Location $basketServiceFolder
dotnet publish -c Release
docker build -f Dockerfile.local -t eshoponabp/service-basket:$version .

### CATALOG-SERVICE
Write-Host "**************** BUILDING CATALOG-SERVICE 9/$total ****************" -ForegroundColor Green
Set-Location $catalogServiceFolder
dotnet publish -c Release
docker build -f Dockerfile.local -t eshoponabp/service-catalog:$version .

### PAYMENT-SERVICE
Write-Host "**************** BUILDING PAYMENT-SERVICE 10/$total ****************" -ForegroundColor Green
Set-Location $paymentServiceFolder
dotnet publish -c Release
docker build -f Dockerfile.local -t eshoponabp/service-payment:$version .

### ORDERING-SERVICE
Write-Host "**************** BUILDING ORDERING-SERVICE 11/$total ****************" -ForegroundColor Green
Set-Location $orderingServiceFolder
dotnet publish -c Release
docker build -f Dockerfile.local -t eshoponabp/service-ordering:$version .

### ALL COMPLETED
Write-Host "ALL COMPLETED" -ForegroundColor Green
Set-Location $currentFolder