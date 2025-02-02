import { NgModule, NgModuleFactory, ModuleWithProviders } from '@angular/core';
import { CoreModule, LazyModuleFactory } from '@abp/ng.core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { ProductsComponent } from './components/products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CoreModule, ThemeSharedModule, ProductsRoutingModule],
  exports: [ProductsComponent],
})
export class ProductsModule {
  static forChild(): ModuleWithProviders<ProductsModule> {
    return {
      ngModule: ProductsModule,
      providers: [],
    };
  }

  static forLazy(): NgModuleFactory<ProductsModule> {
    return new LazyModuleFactory(ProductsModule.forChild());
  }
}
