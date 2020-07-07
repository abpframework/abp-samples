import { AuditedEntityDto } from '@abp/ng.core';

export class BookDto extends AuditedEntityDto<string> {
  name: string;
  type: any;
  publishDate: string;
  price: number;

  constructor(initialValues: Partial<BookDto> = {}) {
    super(initialValues);
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
