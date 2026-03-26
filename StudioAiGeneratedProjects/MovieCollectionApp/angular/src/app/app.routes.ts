import { authGuard, permissionGuard } from '@abp/ng.core';
import { Routes } from '@angular/router';

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
    path: 'books',
    loadComponent: () => import('./book/book.component').then(c => c.BookComponent),
    canActivate: [authGuard, permissionGuard],
  },
  {
    path: 'movies',
    loadComponent: () => import('./movie/movie.component').then(c => c.MovieComponent),
    canActivate: [authGuard, permissionGuard],
  },
  {
    path: 'actors',
    loadComponent: () => import('./actor/actor.component').then(c => c.ActorComponent),
    canActivate: [authGuard, permissionGuard],
  },
  {
    path: 'genres',
    loadComponent: () => import('./genre/genre.component').then(c => c.GenreComponent),
    canActivate: [authGuard, permissionGuard],
  },
];
