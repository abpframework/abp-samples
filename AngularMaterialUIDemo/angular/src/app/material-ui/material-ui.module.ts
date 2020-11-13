import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialUiRoutingModule } from './material-ui-routing.module';
import { MaterialUiComponent } from './material-ui.component';
import { MatTableModule } from '@angular/material/table';
import { CoreModule } from '@abp/ng.core';
import { MaterialTableComponent } from './components/material-table/material-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [MaterialUiComponent, MaterialTableComponent],
  imports: [
    CommonModule,
    CoreModule,
    MaterialUiRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ]
})
export class MaterialUiModule { }
