using Volo.Abp.Modularity;

namespace InterceptionSampleMongoApp;

[DependsOn(
    typeof(InterceptionSampleMongoAppApplicationModule),
    typeof(InterceptionSampleMongoAppDomainTestModule)
    )]
public class InterceptionSampleMongoAppApplicationTestModule : AbpModule
{

}
