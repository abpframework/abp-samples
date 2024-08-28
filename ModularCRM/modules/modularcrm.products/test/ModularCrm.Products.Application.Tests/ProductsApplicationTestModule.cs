using Volo.Abp.Modularity;

namespace ModularCrm.Products;

[DependsOn(
    typeof(ProductsApplicationModule),
    typeof(ProductsDomainTestModule)
    )]
public class ProductsApplicationTestModule : AbpModule
{

}
