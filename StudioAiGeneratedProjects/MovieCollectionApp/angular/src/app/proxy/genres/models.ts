import type { AuditedEntityDto } from '@abp/ng.core';

export interface GenreDto extends AuditedEntityDto<string> {
  name?: string;
  description?: string;
}

export interface CreateUpdateGenreDto {
  name: string;
  description?: string;
}
