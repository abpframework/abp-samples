
export class CreateAuthorDto  {
  name: string;
  birthDate: string;
  shortBio: string;

  constructor(initialValues: Partial<CreateAuthorDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
