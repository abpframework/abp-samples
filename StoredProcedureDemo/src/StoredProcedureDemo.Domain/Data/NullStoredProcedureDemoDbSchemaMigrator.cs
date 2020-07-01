using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace StoredProcedureDemo.Data
{
    /* This is used if database provider does't define
     * IStoredProcedureDemoDbSchemaMigrator implementation.
     */
    public class NullStoredProcedureDemoDbSchemaMigrator : IStoredProcedureDemoDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}