using Volo.Abp.Modularity;

namespace SeparateBackgroundJob;

[DependsOn(
    typeof(SeparateBackgroundJobApplicationModule),
    typeof(SeparateBackgroundJobDomainTestModule)
    )]
public class SeparateBackgroundJobApplicationTestModule : AbpModule
{

}
