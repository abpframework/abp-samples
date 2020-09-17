using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace ExtendLocalizationResource.Data
{
    /* This is used if database provider does't define
     * IExtendLocalizationResourceDbSchemaMigrator implementation.
     */
    public class NullExtendLocalizationResourceDbSchemaMigrator : IExtendLocalizationResourceDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}