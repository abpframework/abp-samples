using OpenId2Ids.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.Modularity;

namespace OpenId2Ids.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(OpenId2IdsEntityFrameworkCoreModule),
    typeof(OpenId2IdsApplicationContractsModule)
    )]
public class OpenId2IdsDbMigratorModule : AbpModule
{

}
