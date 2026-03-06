import { RouterOutletComponent } from '@abp/ng.core';
import { Routes } from '@angular/router';

export const ORDERING_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RouterOutletComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/ordering.component').then(c => c.OrderingComponent),
      },
    ],
  },
];
