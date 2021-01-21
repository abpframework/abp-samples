import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizationUnitsComponent } from './organization-units.component';

const routes: Routes = [{ path: '', component: OrganizationUnitsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationUnitsRoutingModule { }
