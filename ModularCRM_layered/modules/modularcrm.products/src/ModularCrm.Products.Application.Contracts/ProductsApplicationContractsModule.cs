using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace ModularCrm.Products;

[DependsOn(
    typeof(ProductsDomainSharedModule),
    typeof(AbpDddApplicationContractsModule),
    typeof(AbpAuthorizationModule)
    )]
public class ProductsApplicationContractsModule : AbpModule
{

}
