import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { BookType } from '../acme/book-store/books/book-type.enum';
import type { AuthorDto } from '../authors/models';

export interface AuthorLookupDto extends EntityDto<string> {
  name: string;
}

export interface BookDto extends AuditedEntityDto<string> {
  name: string;
  type: BookType;
  publishDate: string;
  price: number;
  authorId: string;
  authorName: string;
}

export interface CreateBookDto {
  name: string;
  type: BookType;
  publishDate: string;
  price: number;
}

export interface CreateBookWithAuthorDto extends AuditedEntityDto<string> {
  author: AuthorDto;
  books: CreateBookDto[];
}

export interface CreateUpdateBookDto {
  name: string;
  type: BookType;
  publishDate: string;
  price: number;
  authorId: string;
}
