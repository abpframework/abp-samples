import { NgModule } from '@angular/core';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AuditLoggingModule } from '@volo/abp.ng.audit-logging';
import { SaasModule } from '@volo/abp.ng.saas';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HostDashboardComponent } from './host-dashboard/host-dashboard.component';
import { TenantDashboardComponent } from './tenant-dashboard/tenant-dashboard.component';

@NgModule({
  declarations: [DashboardComponent, HostDashboardComponent, TenantDashboardComponent],
  imports: [SharedModule, DashboardRoutingModule, NgbDatepickerModule, AuditLoggingModule, SaasModule],
})
export class DashboardModule {}
