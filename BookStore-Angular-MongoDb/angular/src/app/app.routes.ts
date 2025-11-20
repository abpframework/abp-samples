import { Routes } from '@angular/router';
import { authGuard, permissionGuard } from '@abp/ng.core';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'books',
    canActivate: [authGuard, permissionGuard],
    loadComponent: () => import('./book/book.component').then(m => m.BookComponent),
  },
  {
    path: 'authors',
    canActivate: [authGuard, permissionGuard],
    loadComponent: () => import('./author/author.component').then(m => m.AuthorComponent),
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
  { path: '**', redirectTo: '' },
];
