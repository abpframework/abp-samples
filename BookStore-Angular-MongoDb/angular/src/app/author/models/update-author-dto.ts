
export class UpdateAuthorDto  {
  name: string;
  birthDate: string;
  shortBio: string;

  constructor(initialValues: Partial<UpdateAuthorDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
