import { eLayoutType, RoutesService } from '@abp/ng.core';
import {
  EnvironmentProviders,
  inject,
  makeEnvironmentProviders,
  provideAppInitializer,
} from '@angular/core';
import { eOrderingRouteNames } from '../enums/route-names';

export const ORDERING_ROUTE_PROVIDERS = [
  provideAppInitializer(() => {
    configureRoutes();
  }),
];

export function configureRoutes() {
  const routesService = inject(RoutesService);
  routesService.add([
    {
      path: '/ordering',
      name: eOrderingRouteNames.Ordering,
      iconClass: 'fas fa-book',
      layout: eLayoutType.application,
      order: 3,
    },
  ]);
}

const ORDERING_PROVIDERS: EnvironmentProviders[] = [...ORDERING_ROUTE_PROVIDERS];

export function provideOrdering() {
  return makeEnvironmentProviders(ORDERING_PROVIDERS);
}
