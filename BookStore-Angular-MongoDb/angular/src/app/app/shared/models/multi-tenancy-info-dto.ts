
export class MultiTenancyInfoDto  {
  isEnabled: boolean;

  constructor(initialValues: Partial<MultiTenancyInfoDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
