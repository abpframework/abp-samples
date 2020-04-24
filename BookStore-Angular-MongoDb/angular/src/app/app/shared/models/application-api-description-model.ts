
export class ApplicationApiDescriptionModel  {
  modules: any[];
  types: any[];

  constructor(initialValues: Partial<ApplicationApiDescriptionModel> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
