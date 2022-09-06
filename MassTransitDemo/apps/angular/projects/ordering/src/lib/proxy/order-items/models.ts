import type { EntityDto } from '@abp/ng.core';

export interface TopSellingDto extends EntityDto {
  productName?: string;
  pictureUrl?: string;
  units: number;
}
