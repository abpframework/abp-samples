import { Component } from '@angular/core';
import { GdprCookieConsentComponent } from '@volo/abp.ng.gdpr/config';
import { DynamicLayoutComponent } from '@abp/ng.core';
import { LoaderBarComponent } from '@abp/ng.theme.shared';


@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar />
    <abp-dynamic-layout />
    <abp-gdpr-cookie-consent />
  `,
  imports: [LoaderBarComponent, DynamicLayoutComponent, GdprCookieConsentComponent],
})
export class AppComponent {}
