import type { EntityDto } from '@abp/ng.core';
import type { TopSellingDto } from '../order-items/models';
import type { OrderStatus } from './order-status.enum';

export interface BuyerDto extends EntityDto<string> {
  name?: string;
  email?: string;
}

export interface DashboardDto extends EntityDto {
  topSellings: TopSellingDto[];
  payments: PaymentDto[];
  orderStatusDto: OrderStatusDto[];
}

export interface DashboardInput {
  filter?: string;
}

export interface GetMyOrdersInput {
  filter?: string;
}

export interface GetOrdersInput {
  filter?: string;
}

export interface OrderAddressDto {
  description?: string;
  street: string;
  city: string;
  country: string;
  zipCode: string;
}

export interface OrderCreateDto {
  paymentMethod?: string;
  address: OrderAddressDto;
  products: OrderItemCreateDto[];
}

export interface OrderDto extends EntityDto<string> {
  orderDate?: string;
  orderNo: number;
  orderStatus: OrderStatus;
  paymentMethod?: string;
  buyer: BuyerDto;
  address: OrderAddressDto;
  items: OrderItemDto[];
}

export interface OrderItemCreateDto {
  productId?: string;
  productCode?: string;
  productName?: string;
  pictureUrl?: string;
  unitPrice: number;
  discount: number;
  units: number;
}

export interface OrderItemDto extends EntityDto<string> {
  productId?: string;
  productName?: string;
  pictureUrl?: string;
  unitPrice: number;
  discount: number;
  units: number;
}

export interface OrderStatusDto extends EntityDto {
  countOfStatusOrder: number;
  orderStatus?: string;
  totalIncome: number;
}

export interface PaymentDto extends EntityDto {
  rateOfPaymentMethod: number;
  paymentMethod?: string;
}
