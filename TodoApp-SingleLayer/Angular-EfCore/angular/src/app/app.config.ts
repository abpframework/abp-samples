import { provideAbpCore, withOptions } from '@abp/ng.core';
import { provideAbpOAuth } from '@abp/ng.oauth';
import { provideSettingManagementConfig } from '@abp/ng.setting-management/config';
import { provideFeatureManagementConfig } from '@abp/ng.feature-management';
import { provideAbpThemeShared } from '@abp/ng.theme.shared';
import { provideLogo, withEnvironmentOptions } from '@volo/ngx-lepton-x.core';
import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { environment } from '../environments/environment';
import { APP_ROUTES } from './app.routes';
import { APP_ROUTE_PROVIDER } from './route.provider';
import {registerLocale} from '@abp/ng.core/locale';
import {provideThemeLeptonX} from "@abp/ng.theme.lepton-x";
import {provideTenantManagementConfig} from "@abp/ng.tenant-management/config";
import {provideIdentityConfig} from "@abp/ng.identity/config";
import {provideAccountConfig} from "@abp/ng.account/config";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    APP_ROUTE_PROVIDER,
    provideAnimations(),
    provideAbpCore(
      withOptions({
        environment,
        registerLocaleFn: registerLocale(),
      }),
    ),
    provideAbpOAuth(),
    provideSettingManagementConfig(),
    provideFeatureManagementConfig(),
    provideAbpThemeShared(),
    provideThemeLeptonX(),
    provideTenantManagementConfig(),
    provideIdentityConfig(),
    provideAccountConfig(),
    provideLogo(withEnvironmentOptions(environment))
  ]
};
