import { Component } from '@angular/core';
import { OrderService } from '../../lib/proxy/orders';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  constructor(private service: OrderService) {}

  dashboard$ = this.service.getDashboard({});
}
