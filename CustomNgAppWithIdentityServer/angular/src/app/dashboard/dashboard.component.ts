import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-host-dashboard *abpPermission="'CustomNgAppWithIdentityServer.Dashboard.Host'"></app-host-dashboard>
    <app-tenant-dashboard *abpPermission="'CustomNgAppWithIdentityServer.Dashboard.Tenant'"></app-tenant-dashboard>
  `,
})
export class DashboardComponent {}
