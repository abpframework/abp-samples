import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import {
  AverageExecutionDurationWidgetComponent,
  ErrorRateWidgetComponent,
} from '@volo/abp.ng.audit-logging';
import { EditionsUsageWidgetComponent, LatestTenantsWidgetComponent } from '@volo/abp.ng.saas';

const now = new Date();
const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

@Component({
  selector: 'app-host-dashboard',
  templateUrl: './host-dashboard.component.html',
  styleUrls: ['./host-dashboard.component.scss'],
})
export class HostDashboardComponent implements AfterViewInit, OnDestroy {
  @ViewChild('errorRateWidget', { static: false })
  errorRateWidget: ErrorRateWidgetComponent;

  @ViewChild('averageExecutionDurationWidget', { static: false })
  averageExecutionDurationWidget: AverageExecutionDurationWidgetComponent;

  @ViewChild('editionsUsageWidget', { static: false })
  editionsUsageWidget: EditionsUsageWidgetComponent;

  @ViewChild('latestTenantsWidget', { static: false })
  latestTenantsWidget: LatestTenantsWidgetComponent;

  endDate = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
  } as NgbDateStruct;

  startDate = {
    year: oneMonthAgo.getFullYear(),
    month: oneMonthAgo.getMonth() + 1,
    day: oneMonthAgo.getDate(),
  } as NgbDateStruct;

  ngAfterViewInit() {
    this.refresh();
  }

  ngOnDestroy(): void {}

  refresh() {
    const startDate = new Date(
      this.startDate.year,
      this.startDate.month - 1,
      this.startDate.day,
    ).toLocalISOString();
    const endDate = new Date(
      this.endDate.year,
      this.endDate.month - 1,
      this.endDate.day,
    ).toLocalISOString();

    this.errorRateWidget.draw({ startDate, endDate });
    this.averageExecutionDurationWidget.draw({ startDate, endDate });
    this.editionsUsageWidget.draw();
    this.latestTenantsWidget.draw();
  }
}
