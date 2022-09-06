import { eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';
import { eCatalogPolicyNames } from '../enums/policy-names';
import { eCatalogRouteNames } from '../enums/route-names';

export const CATALOG_ROUTE_PROVIDERS = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

export function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/catalog',
        name: eCatalogRouteNames.Catalog,
        layout: eLayoutType.application,
        parentName: null,
        iconClass: 'bi bi-collection-fill',
        requiredPolicy: eCatalogPolicyNames.Catalog,
      },
      {
        path: '/catalog/products',
        name: eCatalogRouteNames.Products,
        parentName: eCatalogRouteNames.Catalog,
        order: 1,
        requiredPolicy: eCatalogPolicyNames.ProductManagement,
        iconClass: 'bi bi-tag-fill',
      },
    ]);
  };
}
