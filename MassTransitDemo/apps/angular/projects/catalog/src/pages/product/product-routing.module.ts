import { AuthGuard, PermissionGuard } from '@abp/ng.core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { eCatalogPolicyNames } from '@eshoponabp/catalog/config';
import { ProductComponent } from './product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    canActivate: [AuthGuard, PermissionGuard],
    data: {
      requiredPolicy: eCatalogPolicyNames.ProductManagement,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
