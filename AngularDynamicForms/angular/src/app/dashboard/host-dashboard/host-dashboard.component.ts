import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbDateAdapter,
  NgbDateNativeAdapter,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { LocalizationPipe, PermissionDirective } from '@abp/ng.core';
import { PageComponent } from '@abp/ng.components/page';
import { DateRangePickerComponent } from '@volo/abp.commercial.ng.ui';
import {
  AverageExecutionDurationWidgetComponent,
  ErrorRateWidgetComponent,
} from '@volo/abp.ng.audit-logging';

const now = new Date();
const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

@Component({
  selector: 'app-host-dashboard',
  templateUrl: './host-dashboard.component.html',
  styleUrls: ['./host-dashboard.component.scss'],
    imports: [
    AverageExecutionDurationWidgetComponent,
    ErrorRateWidgetComponent,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    PageComponent,
    DateRangePickerComponent,
    PermissionDirective,
    LocalizationPipe,
  ],
  providers: [{ provide: NgbDateAdapter, useClass: NgbDateNativeAdapter }],
})
export class HostDashboardComponent implements AfterViewInit {
  fb = inject(FormBuilder);

  @ViewChild('errorRateWidget', { static: false })
  errorRateWidget: ErrorRateWidgetComponent;

  @ViewChild('averageExecutionDurationWidget', { static: false })
  averageExecutionDurationWidget: AverageExecutionDurationWidgetComponent;

  toDate = now
  fromDate = oneMonthAgo;

  formFilters = this.fb.group({
    times: [
      {
        fromDate: this.fromDate,
        toDate: this.toDate,
      },
    ],
  });

  ngAfterViewInit() {
    this.refresh();
  }

  refresh() {
    const {fromDate,toDate} = {
      ...this.formFilters.value.times,
    };

    const startDate = this.convertToString(fromDate);
    const endDate = this.convertToString(toDate);
    this.errorRateWidget?.draw({ startDate, endDate });
    this.averageExecutionDurationWidget?.draw({ startDate, endDate });
  }
  private convertToString(value: Date): string {
    return value.toLocalISOString();
  }
}
