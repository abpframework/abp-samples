import { mapEnumToOptions } from '@abp/ng.core';

export enum OrderState {
  Placed = 0,
  Delivered = 1,
  Canceled = 2,
}

export const orderStateOptions = mapEnumToOptions(OrderState);
