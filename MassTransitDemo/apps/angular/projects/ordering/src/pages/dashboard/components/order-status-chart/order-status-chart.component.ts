import { Component, Input } from '@angular/core';
import { OrderStatusDto } from '../../../../lib/proxy/orders';

@Component({
  selector: 'app-order-status-chart',
  templateUrl: './order-status-chart.component.html',
})
export class OrderStatusChartComponent {
  @Input()
  set data(value: OrderStatusDto[]) {
    const filtered = value.filter(x => x.countOfStatusOrder > 0);
    this.chartData.datasets = [
      {
        data: [...filtered.map(x => x.countOfStatusOrder)],
        backgroundColor: ['#fdcb6e', '#0984e3', '#ff7675'],
      },
    ];
    this.chartData.labels = [...filtered.map(x => x.orderStatus)];
  }

  chartData = {
    labels: [],
    datasets: [],
  };

  options = {
    plugins: {
      title: {
        display: false,
        text: '',
        fontSize: 16,
      },
      legend: {
        position: 'bottom',
      },
    },
  };
}
