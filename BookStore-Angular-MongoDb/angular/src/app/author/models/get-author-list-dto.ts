

import { PagedAndSortedResultRequestDto } from '@abp/ng.core';

export class GetAuthorListDto extends PagedAndSortedResultRequestDto {
  filter: string;
  sorting: string;
  skipCount: number;
  maxResultCount: number;

  constructor(initialValues: Partial<GetAuthorListDto> = {}) {
    super(initialValues);
  }
}
