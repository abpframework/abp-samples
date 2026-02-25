import { RouterOutletComponent } from '@abp/ng.core';
import { Routes } from '@angular/router';

export const CATALOG_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RouterOutletComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/catalog.component').then(c => c.CatalogComponent),
      },
    ],
  },
];
