

import { ListResultDto } from '@abp/ng.core';

export class BookDto extends ListResultDto<Acme.BookStore.Books.BookDto> {
  totalCount: number;
  items: any[];

  constructor(initialValues: Partial<BookDto> = {}) {
    super(initialValues);
  }
}
