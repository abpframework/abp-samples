import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateProductDto {
  code: string;
  name: string;
  imageName?: string;
  price: number;
  stockCount: number;
}

export interface ProductDto extends AuditedEntityDto<string> {
  code?: string;
  name?: string;
  imageName?: string;
  price: number;
  stockCount: number;
}

export interface UpdateProductDto {
  name: string;
  imageName?: string;
  price: number;
  stockCount: number;
}
