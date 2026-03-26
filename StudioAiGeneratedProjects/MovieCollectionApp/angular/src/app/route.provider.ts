import { RoutesService, eLayoutType } from '@abp/ng.core';
import { inject, provideAppInitializer } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  provideAppInitializer(() => {
    configureRoutes();
  }),
];

function configureRoutes() {
  const routes = inject(RoutesService);
  routes.add([
      {
        path: '/',
        name: '::Menu:Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/books',
        name: '::Menu:Books',
        iconClass: 'fas fa-book',
        layout: eLayoutType.application,
        requiredPolicy: 'MovieCollectionApp.Books',
      },
      {
        path: '',
        name: '::Menu:MovieCollectionApp',
        iconClass: 'fas fa-film',
        order: 2,
        layout: eLayoutType.application,
      },
      {
        path: '/movies',
        name: '::Menu:Movies',
        parentName: '::Menu:MovieCollectionApp',
        iconClass: 'fas fa-video',
        layout: eLayoutType.application,
        requiredPolicy: 'MovieCollectionApp.Movies',
      },
      {
        path: '/actors',
        name: '::Menu:Actors',
        parentName: '::Menu:MovieCollectionApp',
        iconClass: 'fas fa-users',
        layout: eLayoutType.application,
        requiredPolicy: 'MovieCollectionApp.Actors',
      },
      {
        path: '/genres',
        name: '::Menu:Genres',
        parentName: '::Menu:MovieCollectionApp',
        iconClass: 'fas fa-tags',
        layout: eLayoutType.application,
        requiredPolicy: 'MovieCollectionApp.Genres',
      },
  ]);
}
