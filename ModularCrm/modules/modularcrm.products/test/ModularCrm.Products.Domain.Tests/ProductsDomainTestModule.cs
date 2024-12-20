using Volo.Abp.Modularity;

namespace ModularCrm.Products;

[DependsOn(
    typeof(ProductsDomainModule),
    typeof(ProductsTestBaseModule)
)]
public class ProductsDomainTestModule : AbpModule
{

}
