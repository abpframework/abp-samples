import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';
import type { AuthorDto, CreateAuthorDto } from '../authors/models';
import type { BookType } from './book-type.enum';

export interface AuthorLookupDto extends EntityDto<string> {
  name?: string;
}

export interface AuthorWithDetailsDto extends AuthorDto {
  books: BookDto[];
}

export interface BookDto extends AuditedEntityDto<string> {
  name?: string;
  type: BookType;
  publishDate?: Date;
  price: number;
  authorId?: string;
  authorName?: string;
}

export interface CreateAuthorWithBookDto extends CreateAuthorDto {
  books: CreateBookDto[];
}

export interface CreateBookDto extends AuditedEntityDto<string> {
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
  authorId?: string;
}
