import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';
import { DevExtremeRoutingModule } from './dev-extreme-routing.module';
import { DevExtremeComponent } from './dev-extreme.component';
import { CoreModule } from '@abp/ng.core';

@NgModule({
  declarations: [DevExtremeComponent],
  imports: [CommonModule, DevExtremeRoutingModule, DxDataGridModule, CoreModule],
})
export class DevExtremeModule {}
