using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace CustomApplicationModules.Data
{
    /* This is used if database provider does't define
     * ICustomApplicationModulesDbSchemaMigrator implementation.
     */
    public class NullCustomApplicationModulesDbSchemaMigrator : ICustomApplicationModulesDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}