using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace ElsaDemo.Data
{
    /* This is used if database provider does't define
     * IElsaDemoDbSchemaMigrator implementation.
     */
    public class NullElsaDemoDbSchemaMigrator : IElsaDemoDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}