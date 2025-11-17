import { inject, provideAppInitializer } from '@angular/core';
import { RoutesService, eLayoutType } from '@abp/ng.core';

export const APP_ROUTE_PROVIDER = [
  provideAppInitializer(() => {
    configureRoutes();
  }),
];

function configureRoutes() {
  const routesService = inject(RoutesService);
  routesService.add([
    {
      path: '/',
      name: '::Menu:Home',
      iconClass: 'fas fa-home',
      order: 1,
      layout: eLayoutType.application,
    },
    {
      path: '/book-store',
      name: '::Menu:BookStore',
      iconClass: 'fas fa-book',
      order: 2,
      layout: eLayoutType.application,
    },
    {
      path: '/books',
      name: '::Menu:Books',
      parentName: '::Menu:BookStore',
      layout: eLayoutType.application,
      requiredPolicy: 'BookStore.Books',
    },
    {
      path: '/authors',
      name: '::Menu:Authors',
      parentName: '::Menu:BookStore',
      layout: eLayoutType.application,
      requiredPolicy: 'BookStore.Authors',
    },
  ]);
}
