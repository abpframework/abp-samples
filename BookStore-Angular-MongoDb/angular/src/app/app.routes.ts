import { Routes } from '@angular/router';
import { AuthGuard, PermissionGuard } from '@abp/ng.core';

export const APP_ROUTES: Routes = [
	{
		path: '',
		loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
		data: {
			name: '::Menu:Home',
			iconClass: 'fas fa-home',
			order: 1,
		},
	},
	{
		path: 'books',
		canActivate: [AuthGuard, PermissionGuard],
		loadComponent: () => import('./book/book.component').then(m => m.BookComponent),
		data: {
			name: '::Menu:Books',
			iconClass: 'fas fa-book',
			requiredPolicy: 'BookStore.Books',
			parentName: '::Menu:BookStore',
		},
	},
	{
		path: 'authors',
		canActivate: [AuthGuard, PermissionGuard],
		loadComponent: () => import('./author/author.component').then(m => m.AuthorComponent),
		data: {
			name: '::Menu:Authors',
			iconClass: 'fas fa-user',
			requiredPolicy: 'BookStore.Authors',
			parentName: '::Menu:BookStore',
		},
	},
	{ path: '**', redirectTo: '' },
];

