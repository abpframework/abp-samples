using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace DevExtreme.Sample.Data
{
    /* This is used if database provider does't define
     * ISampleDbSchemaMigrator implementation.
     */
    public class NullSampleDbSchemaMigrator : ISampleDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}