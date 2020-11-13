import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialUiComponent } from './material-ui.component';


const routes: Routes = [{ path: '', component: MaterialUiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialUiRoutingModule { }
