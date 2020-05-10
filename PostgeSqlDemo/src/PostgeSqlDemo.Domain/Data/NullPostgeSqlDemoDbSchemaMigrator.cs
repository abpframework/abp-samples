using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace PostgeSqlDemo.Data
{
    /* This is used if database provider does't define
     * IPostgeSqlDemoDbSchemaMigrator implementation.
     */
    public class NullPostgeSqlDemoDbSchemaMigrator : IPostgeSqlDemoDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}