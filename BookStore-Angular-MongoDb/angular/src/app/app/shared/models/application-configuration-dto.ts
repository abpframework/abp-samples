import { CurrentTenantDto } from '../models';import { MultiTenancyInfoDto } from '../models';import { ApplicationFeatureConfigurationDto } from '../models';import { CurrentUserDto } from '../models';import { ApplicationSettingConfigurationDto } from '../models';import { ApplicationAuthConfigurationDto } from '../models';import { ApplicationLocalizationConfigurationDto } from '../models';
export class ApplicationConfigurationDto  {
  localization: ApplicationLocalizationConfigurationDto;
  auth: ApplicationAuthConfigurationDto;
  setting: ApplicationSettingConfigurationDto;
  currentUser: CurrentUserDto;
  features: ApplicationFeatureConfigurationDto;
  multiTenancy: MultiTenancyInfoDto;
  currentTenant: CurrentTenantDto;

  constructor(initialValues: Partial<ApplicationConfigurationDto> = {}) {
    if (initialValues) {
      for (const key in initialValues) {
        if (initialValues.hasOwnProperty(key)) {
          this[key] = initialValues[key];
        }
      }
    }
  }
}
