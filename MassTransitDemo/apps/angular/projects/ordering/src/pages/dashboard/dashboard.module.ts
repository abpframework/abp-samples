import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from '@eshoponabp/catalog';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { CoreModule } from '@abp/ng.core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TopSellingComponent } from './components/top-selling/top-selling.component';
import { OrderStatusChartComponent } from './components/order-status-chart/order-status-chart.component';
import { ChartModule } from '@abp/ng.components/chart.js';
import { PaymentsChartComponent } from './components/payments-chart/payments-chart.component';

@NgModule({
  declarations: [DashboardComponent, TopSellingComponent, OrderStatusChartComponent, PaymentsChartComponent],
  imports: [
    DashboardRoutingModule,
    CommonModule,
    ProductRoutingModule,
    CommonModule,
    ThemeSharedModule,
    CoreModule,
    ChartModule,
  ],
})
export class DashboardModule {}
