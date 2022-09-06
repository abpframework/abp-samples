import { Component, Input } from '@angular/core';
import { PaymentDto } from '../../../../lib/proxy/orders';

@Component({
  selector: 'app-payments-chart',
  templateUrl: './payments-chart.component.html',
})
export class PaymentsChartComponent {
  @Input()
  set data(value: PaymentDto[]) {
    this.chartData.datasets = [
      {
        data: [...value.map(x => x.rateOfPaymentMethod)],
        backgroundColor: ['#fdcb6e', '#0984e3', '#ff7675'],
      },
    ];
    this.chartData.labels = [...value.map(x => x.paymentMethod)];
  }

  chartData = {
    labels: [],
    datasets: [],
  };

  options = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: 'bottom',
      },
    },
  };
}
