using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace AbpPrimengSample.Data
{
    /* This is used if database provider does't define
     * IAbpPrimengSampleDbSchemaMigrator implementation.
     */
    public class NullAbpPrimengSampleDbSchemaMigrator : IAbpPrimengSampleDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}