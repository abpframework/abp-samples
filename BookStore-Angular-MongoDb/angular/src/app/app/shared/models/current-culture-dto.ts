import { DateTimeFormatDto } from '../models';
export class CurrentCultureDto  {
  displayName: string;
  englishName: string;
  threeLetterIsoLanguageName: string;
  twoLetterIsoLanguageName: string;
  isRightToLeft: boolean;
  cultureName: string;
  name: string;
  nativeName: string;
  dateTimeFormat: DateTimeFormatDto;

  constructor(initialValues: Partial<CurrentCultureDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
