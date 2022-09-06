import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderViewModel } from '../../../lib/order-view-model';
import { environment } from '../../../../../../src/environments/environment';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
})
export class OrderDetailComponent {
  modalOption = { size: 'xl' };
  @Input()
  visible: boolean;
  @Input()
  order: OrderViewModel | undefined;
  mediaServerUrl = environment.mediaServerUrl;
  @Output() readonly visibleChange = new EventEmitter<boolean>();
}
