import type { AuditedEntityDto, EntityDto } from '@abp/ng.core';

export interface MovieDto extends AuditedEntityDto<string> {
  title?: string;
  year: number;
  description?: string;
  rating: number;
  genreId: string;
  genreName?: string;
  actorIds: string[];
  actorNames: string[];
}

export interface CreateUpdateMovieDto {
  title: string;
  year: number;
  description?: string;
  rating: number;
  genreId: string;
  actorIds: string[];
}

export interface GenreLookupDto extends EntityDto<string> {
  name?: string;
}

export interface ActorLookupDto extends EntityDto<string> {
  name?: string;
}
