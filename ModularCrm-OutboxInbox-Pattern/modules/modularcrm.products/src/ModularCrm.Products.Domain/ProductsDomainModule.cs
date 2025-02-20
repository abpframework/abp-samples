using ModularCrm.Ordering;
using Volo.Abp.Domain;
using Volo.Abp.Modularity;
using Volo.Abp.Users;

namespace ModularCrm.Products;

[DependsOn(
    typeof(OrderingContractsModule),
    typeof(AbpDddDomainModule),
    typeof(AbpUsersAbstractionModule),
    typeof(ProductsDomainSharedModule)
)]
public class ProductsDomainModule : AbpModule
{

}
