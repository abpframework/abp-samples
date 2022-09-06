import { ModuleWithProviders, NgModule } from '@angular/core';
import { CATALOG_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class CatalogConfigModule {
  static forRoot(): ModuleWithProviders<CatalogConfigModule> {
    return {
      ngModule: CatalogConfigModule,
      providers: [CATALOG_ROUTE_PROVIDERS],
    };
  }
}
