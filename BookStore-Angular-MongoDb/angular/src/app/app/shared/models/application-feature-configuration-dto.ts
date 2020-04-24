
export class ApplicationFeatureConfigurationDto  {
  values: any[];

  constructor(initialValues: Partial<ApplicationFeatureConfigurationDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
