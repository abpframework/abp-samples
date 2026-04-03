import { authGuard, permissionGuard } from '@abp/ng.core';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'events',
    canActivate: [authGuard, permissionGuard],
    loadComponent: () => import('./events/events.component').then(c => c.EventsComponent),
    data: {
      requiredPolicy: 'EventRegistration.Events',
    },
  },
  {
    path: 'events/:eventId/attendees',
    canActivate: [authGuard, permissionGuard],
    loadComponent: () => import('./events/attendees/attendees.component').then(c => c.AttendeesComponent),
    data: {
      requiredPolicy: 'EventRegistration.Events.Attendees',
    },
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
];