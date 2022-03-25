using Volo.Abp.Modularity;

namespace KeycloakDemo;

[DependsOn(
    typeof(KeycloakDemoApplicationModule),
    typeof(KeycloakDemoDomainTestModule)
    )]
public class KeycloakDemoApplicationTestModule : AbpModule
{

}
