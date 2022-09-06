import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../lib/proxy/orders';
import { OrderViewModel, toOrderViewModel } from '../../lib';
import { Confirmation, ConfirmationService } from '@abp/ng.theme.shared';
import { ListService } from '@abp/ng.core';
import { eOrderingPolicyNames } from '@eshoponabp/ordering/config';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  providers: [ListService],
})
export class OrdersComponent implements OnInit {
  constructor(
    private service: OrderService,
    public list: ListService,
    private confirmationService: ConfirmationService
  ) {}

  selectedOrder: OrderViewModel | undefined;
  isModalVisible = false;
  items: OrderViewModel[];
  count = 0;
  permissions = {
    detail: eOrderingPolicyNames.ordering,
    setAsShipped: eOrderingPolicyNames.setAsShipped,
    setAsCancelled: eOrderingPolicyNames.setAsCancelled,
  };

  ngOnInit(): void {
    const ordersStreamCreator = query => this.service.getListPaged(query);

    this.list.hookToQuery(ordersStreamCreator).subscribe(response => {
      this.items = toOrderViewModel(response.items);
      this.count = response.totalCount;
    });
  }

  openModal(order: OrderViewModel) {
    if (!order) {
      return;
    }
    this.selectedOrder = order;
    this.isModalVisible = true;
  }

  closeModal(isVisible: boolean) {
    if (isVisible) {
      return;
    }
    this.selectedOrder = null;
    this.isModalVisible = false;
  }

  setAsShipped(row: OrderViewModel) {
    this.confirmationService
      .warn('AbpOrdering::WillSetAsShipped', { key: '::AreYouSure', defaultValue: 'Are you sure?' })
      .subscribe(status => {
        if (status !== Confirmation.Status.confirm) {
          return;
        }
        this.service.setAsShipped(row.id).subscribe(() => {
          this.list.get();
        });
      });
  }

  setAsCancelled(row: OrderViewModel) {
    this.confirmationService
      .warn('AbpOrdering::WillSetAsCancelled', {
        key: '::AreYouSure',
        defaultValue: 'Are you sure?',
      })
      .subscribe(status => {
        if (status !== Confirmation.Status.confirm) {
          return;
        }
        this.service.setAsCancelled(row.id).subscribe(() => {
          this.list.get();
        });
      });
  }
}
