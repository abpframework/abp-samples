import { eLayoutType, RoutesService } from '@abp/ng.core';
import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
} from '@angular/core';
import { eCatalogRouteNames } from '../enums/route-names';

export const CATALOG_ROUTE_PROVIDERS = [
  provideAppInitializer(() => {
    configureRoutes();
  }),
];

export function configureRoutes() {
  const routesService = inject(RoutesService);
  routesService.add([
    {
      path: '/catalog',
      name: eCatalogRouteNames.Catalog,
      iconClass: 'fas fa-book',
      layout: eLayoutType.application,
      order: 3,
    },
  ]);
}

const CATALOG_PROVIDERS: EnvironmentProviders[] = [...CATALOG_ROUTE_PROVIDERS];

export function provideCatalog() {
  return makeEnvironmentProviders(CATALOG_PROVIDERS);
}
