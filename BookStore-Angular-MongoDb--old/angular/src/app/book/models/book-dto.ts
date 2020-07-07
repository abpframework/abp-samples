import { BookType } from './book-type';import { AuditedEntityDto } from '@abp/ng.core';

export class BookDto extends AuditedEntityDto<string> {
  name: string;
  type: any;
  publishDate: string;
  price: number;
  lastModificationTime?: string;
  lastModifierId?: string;
  creationTime: string;
  creatorId?: string;
  id: string;

  constructor(initialValues: Partial<BookDto> = {}) {
    super(initialValues);
  }
}
