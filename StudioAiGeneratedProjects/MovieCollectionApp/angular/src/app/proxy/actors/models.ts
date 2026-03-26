import type { AuditedEntityDto } from '@abp/ng.core';

export interface ActorDto extends AuditedEntityDto<string> {
  name?: string;
  birthDate?: string;
  biography?: string;
}

export interface CreateUpdateActorDto {
  name: string;
  birthDate: string;
  biography?: string;
}
