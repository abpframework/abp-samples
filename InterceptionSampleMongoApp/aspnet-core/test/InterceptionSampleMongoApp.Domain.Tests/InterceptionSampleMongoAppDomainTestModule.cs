using InterceptionSampleMongoApp.MongoDB;
using Volo.Abp.Modularity;

namespace InterceptionSampleMongoApp;

[DependsOn(
    typeof(InterceptionSampleMongoAppMongoDbTestModule)
    )]
public class InterceptionSampleMongoAppDomainTestModule : AbpModule
{

}
