
export class ApplicationApiDescriptionModelRequestDto  {
  includeTypes: boolean;

  constructor(initialValues: Partial<ApplicationApiDescriptionModelRequestDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
