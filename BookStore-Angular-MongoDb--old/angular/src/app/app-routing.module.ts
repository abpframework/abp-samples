import { ABP } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationLayoutComponent } from '@abp/ng.theme.basic';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    data: {
      routes: {
        name: '::Menu:Home',
      } as ABP.Route,
    },
  },
  {
    path: 'account',
    loadChildren: () =>
      import('@abp/ng.account').then((m) => m.AccountModule.forLazy({ redirectUrl: '/' })),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then((m) => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then((m) => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then((m) => m.SettingManagementModule.forLazy()),
  },
  {
    path: 'books',
    component: ApplicationLayoutComponent,
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule),
    data: {
      routes: {
        name: '::Menu:Books',
        iconClass: 'fas fa-book',
      } as ABP.Route,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
