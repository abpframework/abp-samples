import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationUnitsRoutingModule } from './organization-units-routing.module';
import { OrganizationUnitsComponent } from './organization-units.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TableModule } from 'primeng/table';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { ConfirmPopupModule } from 'primeng/confirmpopup';

@NgModule({
  declarations: [OrganizationUnitsComponent],
  imports: [
    CommonModule,
    FormsModule,
    OrganizationUnitsRoutingModule,
    OrganizationChartModule,
    TableModule,
    BreadcrumbModule,
    InputTextModule,
    ButtonModule,
    AvatarModule,
    DialogModule,
    AutoCompleteModule,
    ConfirmPopupModule,
  ],
})
export class OrganizationUnitsModule {}
