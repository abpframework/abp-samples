using Volo.Abp.Modularity;

namespace PlugInSample;

[DependsOn(
    typeof(PlugInSampleApplicationModule),
    typeof(PlugInSampleDomainTestModule)
    )]
public class PlugInSampleApplicationTestModule : AbpModule
{

}
