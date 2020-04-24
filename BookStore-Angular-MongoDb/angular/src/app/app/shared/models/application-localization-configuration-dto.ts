import { CurrentCultureDto } from '../models';
export class ApplicationLocalizationConfigurationDto  {
  values: any[];
  languages: any[];
  currentCulture: CurrentCultureDto;

  constructor(initialValues: Partial<ApplicationLocalizationConfigurationDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
