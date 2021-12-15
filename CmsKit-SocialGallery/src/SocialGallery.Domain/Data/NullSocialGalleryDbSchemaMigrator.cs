using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace SocialGallery.Data
{
    /* This is used if database provider does't define
     * ISocialGalleryDbSchemaMigrator implementation.
     */
    public class NullSocialGalleryDbSchemaMigrator : ISocialGalleryDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}