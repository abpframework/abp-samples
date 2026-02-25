import { authGuard, permissionGuard } from '@abp/ng.core';
import { Routes } from '@angular/router';
import { CATALOG_ROUTES } from '@modular-crm/catalog';
import { ORDERING_ROUTES } from '@modular-crm/ordering';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(c => c.createRoutes()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(c => c.createRoutes()),
  },
  {
    path: 'tenant-management',
    loadChildren: () => import('@abp/ng.tenant-management').then(c => c.createRoutes()),
  },
  {
    path: 'setting-management',
    loadChildren: () => import('@abp/ng.setting-management').then(c => c.createRoutes()),
  },
  {
    path: 'catalog',
    children: CATALOG_ROUTES,
    canActivate: [authGuard],
  },
  {
    path: 'ordering',
    children: ORDERING_ROUTES,
    canActivate: [authGuard],
  },
];
