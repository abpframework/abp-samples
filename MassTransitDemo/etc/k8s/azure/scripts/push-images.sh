export version="1.0.5"

az acr login --name volocr

docker tag eshoponabp/app-web:"${version}" volocr.azurecr.io/eshoponabp/app-web:"${version}"
docker push volocr.azurecr.io/eshoponabp/app-web:"${version}"

docker tag eshoponabp/app-authserver:"${version}" volocr.azurecr.io/eshoponabp/app-authserver:"${version}"
docker push volocr.azurecr.io/eshoponabp/app-authserver:"${version}"

docker tag eshoponabp/app-publicweb:"${version}" volocr.azurecr.io/eshoponabp/app-publicweb:"${version}"
docker push volocr.azurecr.io/eshoponabp/app-publicweb:"${version}"

docker tag eshoponabp/gateway-web:"${version}" volocr.azurecr.io/eshoponabp/gateway-web:"${version}"
docker push volocr.azurecr.io/eshoponabp/gateway-web:"${version}"

docker tag eshoponabp/gateway-web-public:"${version}" volocr.azurecr.io/eshoponabp/gateway-web-public:"${version}"
docker push volocr.azurecr.io/eshoponabp/gateway-web-public:"${version}"

docker tag eshoponabp/service-identity:"${version}" volocr.azurecr.io/eshoponabp/service-identity:"${version}"
docker push volocr.azurecr.io/eshoponabp/service-identity:"${version}"

docker tag eshoponabp/service-administration:"${version}" volocr.azurecr.io/eshoponabp/service-administration:"${version}"
docker push volocr.azurecr.io/eshoponabp/service-administration:"${version}"

docker tag eshoponabp/service-basket:"${version}" volocr.azurecr.io/eshoponabp/service-basket:"${version}"
docker push volocr.azurecr.io/eshoponabp/service-basket:"${version}"

docker tag eshoponabp/service-catalog:"${version}" volocr.azurecr.io/eshoponabp/service-catalog:"${version}"
docker push volocr.azurecr.io/eshoponabp/service-catalog:"${version}"

docker tag eshoponabp/service-ordering:"${version}" volocr.azurecr.io/eshoponabp/service-ordering:"${version}"
docker push volocr.azurecr.io/eshoponabp/service-ordering:"${version}"

docker tag eshoponabp/service-payment:"${version}" volocr.azurecr.io/eshoponabp/service-payment:"${version}"
docker push volocr.azurecr.io/eshoponabp/service-payment:"${version}"