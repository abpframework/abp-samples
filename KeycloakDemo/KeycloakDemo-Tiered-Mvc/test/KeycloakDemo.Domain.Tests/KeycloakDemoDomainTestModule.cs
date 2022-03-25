using KeycloakDemo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace KeycloakDemo;

[DependsOn(
    typeof(KeycloakDemoEntityFrameworkCoreTestModule)
    )]
public class KeycloakDemoDomainTestModule : AbpModule
{

}
