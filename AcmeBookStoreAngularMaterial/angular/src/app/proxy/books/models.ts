import type { AuditedEntityDto } from '@abp/ng.core';
import type { BookType } from '../acme/book-store/books/book-type.enum';

export interface BookDto extends AuditedEntityDto<string> {
  name: string;
  type: BookType;
  publishDate: string;
  price: number;
}

export interface CreateUpdateBookDto {
  name: string;
  type: BookType;
  publishDate: string;
  price: number;
}
