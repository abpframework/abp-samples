
export class ApplicationSettingConfigurationDto  {
  values: any[];

  constructor(initialValues: Partial<ApplicationSettingConfigurationDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
