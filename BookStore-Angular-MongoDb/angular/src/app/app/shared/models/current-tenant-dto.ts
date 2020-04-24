
export class CurrentTenantDto  {
  id?: string;
  name: string;
  isAvailable: boolean;

  constructor(initialValues: Partial<CurrentTenantDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
