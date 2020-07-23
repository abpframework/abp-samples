
export class AuthorLookupDto  {
  items: any[];

  constructor(initialValues: Partial<AuthorLookupDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
