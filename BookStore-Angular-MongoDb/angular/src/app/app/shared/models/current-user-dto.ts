
export class CurrentUserDto  {
  isAuthenticated: boolean;
  id?: string;
  tenantId?: string;
  userName: string;

  constructor(initialValues: Partial<CurrentUserDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
