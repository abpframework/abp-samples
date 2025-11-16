import { Routes } from '@angular/router';
import { AuthGuard, PermissionGuard, eLayoutType, RoutesService } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
	},
	{
		path: 'books',
		canActivate: [AuthGuard, PermissionGuard],
		loadComponent: () => import('./book/book.component').then(m => m.BookComponent),
	},
	{
		path: 'authors',
		canActivate: [AuthGuard, PermissionGuard],
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
		loadChildren: () =>
		import('@abp/ng.tenant-management').then(c => c.createRoutes()),
	},
	{
		path: 'setting-management',
		loadChildren: () =>
		import('@abp/ng.setting-management').then(c => c.createRoutes()),
	},
	{ path: '**', redirectTo: '' },
];
