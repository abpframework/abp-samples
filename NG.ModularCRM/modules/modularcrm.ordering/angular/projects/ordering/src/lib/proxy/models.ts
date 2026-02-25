import type { OrderState } from './order-state.enum';

export interface OrderCreationDto {
  customerName: string;
  productId: string;
}

export interface OrderDto {
  id?: string;
  customerName?: string;
  productId?: string;
  state?: OrderState;
}
