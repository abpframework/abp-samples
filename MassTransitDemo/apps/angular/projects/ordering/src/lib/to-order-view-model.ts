import { OrderDto } from './proxy/orders';
import { OrderViewModel } from './order-view-model';

const mapItem = (x: OrderDto): OrderViewModel => {
  const orderTotal = x.items?.reduce((acc, curr) => ( acc + (curr.unitPrice * curr.units)), 0) || 0;
  return {...x, orderTotal};
};
export const toOrderViewModel = (orders: OrderDto[]) => orders.map(mapItem);
