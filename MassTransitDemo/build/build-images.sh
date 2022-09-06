#!/bin/bash

export IMAGE_TAG="1.0.0"
export total=11
cd ../
export currentFolder=`pwd`
cd build/

echo "*** BUILDING WEB (WWW) 1/${total} ****************"
cd ${currentFolder}/apps/angular
docker build --force-rm -t "eshoponabp/app-web:${IMAGE_TAG}" .


echo "*** BUILDING AUTH-SERVER 2/$total ****************"
cd ${currentFolder}/apps/auth-server/src/EShopOnAbp.AuthServer
docker build --force-rm -t "eshoponabp/app-authserver:${IMAGE_TAG}" .


echo "*** BUILDING WEB-PUBLIC 3/$total ****************"
cd ${currentFolder}/apps/public-web/src/EShopOnAbp.PublicWeb
docker build --force-rm -t "eshoponabp/app-publicweb:${IMAGE_TAG}" .


echo "*** BUILDING WEB-GATEWAY 4/$total ****************"
cd ${currentFolder}/gateways/web/src/EShopOnAbp.WebGateway
docker build --force-rm -t "eshoponabp/gateway-web:${IMAGE_TAG}" .


echo "*** BUILDING WEB-PUBLIC-GATEWAY 5/$total ****************"
cd ${currentFolder}/gateways/web-public/src/EShopOnAbp.WebPublicGateway
docker build --force-rm -t "eshoponabp/gateway-web-public:${IMAGE_TAG}" .


echo "*** BUILDING IDENTITY-SERVICE 6/$total ****************"
cd ${currentFolder}/services/identity/src/EShopOnAbp.IdentityService.HttpApi.Host
docker build --force-rm -t "eshoponabp/service-identity:${IMAGE_TAG}" .


echo "*** BUILDING ADMINISTRATION-SERVICE 7/$total ****************"
cd ${currentFolder}/services/administration/src/EShopOnAbp.AdministrationService.HttpApi.Host
docker build --force-rm -t "eshoponabp/service-administration:${IMAGE_TAG}" .


echo "**************** BUILDING BASKET-SERVICE 8/$total ****************"
cd ${currentFolder}/services/basket/src/EShopOnAbp.BasketService
docker build --force-rm -t "eshoponabp/service-basket:${IMAGE_TAG}" .


echo "**************** BUILDING CATALOG-SERVICE 9/$total ****************"
cd ${currentFolder}/services/catalog/src/EShopOnAbp.CatalogService.HttpApi.Host
docker build --force-rm -t "eshoponabp/service-catalog:${IMAGE_TAG}" .


echo "**************** BUILDING PAYMENT-SERVICE 10/$total ****************"
cd ${currentFolder}/services/payment/src/EShopOnAbp.PaymentService.HttpApi.Host
docker build --force-rm -t "eshoponabp/service-payment:${IMAGE_TAG}" .


echo "**************** BUILDING ORDERING-SERVICE 11/$total ****************"
cd ${currentFolder}/services/ordering/src/EShopOnAbp.OrderingService.HttpApi.Host
docker build --force-rm -t "eshoponabp/service-ordering:${IMAGE_TAG}" .

echo "ALL COMPLETED"