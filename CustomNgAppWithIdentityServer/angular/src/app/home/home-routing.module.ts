import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ApplicationLayoutComponent } from '@volo/abp.ng.theme.lepton';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
