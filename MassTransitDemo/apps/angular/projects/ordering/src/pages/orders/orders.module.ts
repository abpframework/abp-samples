import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CoreModule } from '@abp/ng.core';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderDetailItemComponent } from './order-detail/order-detail-item/order-detail-item.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [OrdersComponent, OrderDetailComponent, OrderDetailItemComponent],
  imports: [CommonModule, NgbDropdownModule, OrdersRoutingModule, ThemeSharedModule, CoreModule],
})
export class OrdersModule {}
