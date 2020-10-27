using EventOrganizer.MongoDB;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace EventOrganizer.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(EventOrganizerMongoDbModule),
        typeof(EventOrganizerApplicationContractsModule)
        )]
    public class EventOrganizerDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
