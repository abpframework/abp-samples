using TemplateReplace.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace TemplateReplace.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(TemplateReplaceEntityFrameworkCoreDbMigrationsModule),
        typeof(TemplateReplaceApplicationContractsModule)
        )]
    public class TemplateReplaceDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
