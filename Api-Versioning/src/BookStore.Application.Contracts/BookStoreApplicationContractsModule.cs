using Volo.Abp.ApiVersioning;
using Volo.Abp.Application;
using Volo.Abp.Modularity;
using Volo.Abp.Authorization;

namespace BookStore;

[DependsOn(
    typeof(BookStoreDomainSharedModule),
    typeof(AbpDddApplicationContractsModule),
    typeof(AbpAuthorizationModule),
    typeof(AbpApiVersioningAbstractionsModule)
    )]
public class BookStoreApplicationContractsModule : AbpModule
{

}
