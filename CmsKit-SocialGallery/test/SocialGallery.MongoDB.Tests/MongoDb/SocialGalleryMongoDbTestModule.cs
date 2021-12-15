using System;
using Volo.Abp.Data;
using Volo.Abp.Modularity;

namespace SocialGallery.MongoDB
{
    [DependsOn(
        typeof(SocialGalleryTestBaseModule),
        typeof(SocialGalleryMongoDbModule)
        )]
    public class SocialGalleryMongoDbTestModule : AbpModule
    {
        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            var stringArray = SocialGalleryMongoDbFixture.ConnectionString.Split('?');
                        var connectionString = stringArray[0].EnsureEndsWith('/')  +
                                                   "Db_" +
                                               Guid.NewGuid().ToString("N") + "/?" + stringArray[1];

            Configure<AbpDbConnectionOptions>(options =>
            {
                options.ConnectionStrings.Default = connectionString;
            });
        }
    }
}
