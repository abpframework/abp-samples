using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace SeparateBackgroundJob.Common.Shared;

[DependsOn(typeof(AbpBackgroundJobsAbstractionsModule))]
public class SeparateBackgroundJobCommonSharedModule : AbpModule
{
}