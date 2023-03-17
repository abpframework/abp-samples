using PlugInSample.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace PlugInSample;

[DependsOn(
    typeof(PlugInSampleEntityFrameworkCoreTestModule)
    )]
public class PlugInSampleDomainTestModule : AbpModule
{

}
