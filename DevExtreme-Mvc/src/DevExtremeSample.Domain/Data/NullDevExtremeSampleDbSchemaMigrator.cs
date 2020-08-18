using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace DevExtremeSample.Data
{
    /* This is used if database provider does't define
     * IDevExtremeSampleDbSchemaMigrator implementation.
     */
    public class NullDevExtremeSampleDbSchemaMigrator : IDevExtremeSampleDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}