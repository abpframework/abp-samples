using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace DevExtremeAngular.Data
{
    /* This is used if database provider does't define
     * IDevExtremeAngularDbSchemaMigrator implementation.
     */
    public class NullDevExtremeAngularDbSchemaMigrator : IDevExtremeAngularDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}