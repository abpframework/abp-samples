import { ModuleWithProviders, NgModule } from '@angular/core';
import { ORDERING_ROUTE_PROVIDERS } from './providers/route.provider';

@NgModule()
export class OrderingConfigModule {
  static forRoot(): ModuleWithProviders<OrderingConfigModule> {
    return {
      ngModule: OrderingConfigModule,
      providers: [ORDERING_ROUTE_PROVIDERS],
    };
  }
}
