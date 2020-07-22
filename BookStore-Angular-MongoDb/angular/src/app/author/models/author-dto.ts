

import { EntityDto } from '@abp/ng.core';

export class AuthorDto extends EntityDto<string> {
  name: string;
  birthDate: string;
  shortBio: string;
  id: string;

  constructor(initialValues: Partial<AuthorDto> = {}) {
    super(initialValues);
  }
}
