import {inject, provideAppInitializer} from '@angular/core';
import { RoutesService, eLayoutType } from '@abp/ng.core';

export const APP_ROUTE_PROVIDER = [
  provideAppInitializer(() => {
    const routesService = inject(RoutesService);
    routesService.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
    ]);
  }),
];
