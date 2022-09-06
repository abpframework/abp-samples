import { mapEnumToOptions } from '@abp/ng.core';

export enum OrderStatus {
  Placed = 0,
  Paid = 1,
  Shipped = 2,
  Cancelled = 3,
}

export const orderStatusOptions = mapEnumToOptions(OrderStatus);
