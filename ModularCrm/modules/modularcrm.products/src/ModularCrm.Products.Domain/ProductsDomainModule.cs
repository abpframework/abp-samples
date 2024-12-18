using Volo.Abp.Domain;
using Volo.Abp.Modularity;

namespace ModularCrm.Products;

[DependsOn(
    typeof(AbpDddDomainModule),
    typeof(ProductsDomainSharedModule)
)]
public class ProductsDomainModule : AbpModule
{

}
