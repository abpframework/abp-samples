using SocialGallery.MongoDB;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace SocialGallery.DbMigrator
{
    [DependsOn(
        typeof(AbpAutofacModule),
        typeof(SocialGalleryMongoDbModule),
        typeof(SocialGalleryApplicationContractsModule)
        )]
    public class SocialGalleryDbMigratorModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
        }
    }
}
