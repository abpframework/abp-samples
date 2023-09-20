using SeparateBackgroundJob.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace SeparateBackgroundJob;

[DependsOn(
    typeof(SeparateBackgroundJobEntityFrameworkCoreTestModule)
    )]
public class SeparateBackgroundJobDomainTestModule : AbpModule
{

}
