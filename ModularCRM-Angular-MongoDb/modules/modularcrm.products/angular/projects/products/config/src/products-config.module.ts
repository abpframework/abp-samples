import { ModuleWithProviders, NgModule } from '@angular/core';
import { PRODUCTS_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class ProductsConfigModule {
  static forRoot(): ModuleWithProviders<ProductsConfigModule> {
    return {
      ngModule: ProductsConfigModule,
      providers: [PRODUCTS_ROUTE_PROVIDERS],
    };
  }
}
