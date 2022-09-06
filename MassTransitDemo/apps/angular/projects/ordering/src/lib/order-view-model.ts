import { OrderDto } from './proxy/orders';

export interface  OrderViewModel  extends OrderDto {
  orderTotal: number;
}
