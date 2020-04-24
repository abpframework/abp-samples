
export class ApplicationAuthConfigurationDto  {
  policies: any[];
  grantedPolicies: any[];

  constructor(initialValues: Partial<ApplicationAuthConfigurationDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
