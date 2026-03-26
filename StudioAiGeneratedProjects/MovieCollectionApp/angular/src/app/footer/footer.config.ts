import { provideAppInitializer, inject } from '@angular/core';
import { ReplaceableComponentsService } from '@abp/ng.core';
import { eThemeLeptonXComponents } from '@abp/ng.theme.lepton-x';
import { FooterComponent } from './footer.component';

function initFooter() {
  const replaceableComponents = inject(ReplaceableComponentsService);
  replaceableComponents.add({
    key: eThemeLeptonXComponents.Footer,
    component: FooterComponent,
  });
}

export const FOOTER_PROVIDER = [
  provideAppInitializer(() => {
    initFooter();
  }),
];
