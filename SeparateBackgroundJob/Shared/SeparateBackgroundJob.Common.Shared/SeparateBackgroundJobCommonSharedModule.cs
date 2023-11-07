using Volo.Abp.BackgroundJobs;
using Volo.Abp.Identity;
using Volo.Abp.Modularity;

namespace SeparateBackgroundJob.Common.Shared;

[DependsOn(typeof(AbpBackgroundJobsAbstractionsModule))]
[DependsOn(typeof(AbpIdentityDomainModule))]
public class SeparateBackgroundJobCommonSharedModule : AbpModule
{
}