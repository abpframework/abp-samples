import { Component, inject } from '@angular/core';
import { OrderingService } from '../services/ordering.service';

@Component({
  selector: 'lib-ordering',
  template: ` <p>ordering works!</p> `,
})
export class OrderingComponent {
  protected readonly service = inject(OrderingService);

  constructor() {
    this.service.sample().subscribe(console.log);
  }
}
