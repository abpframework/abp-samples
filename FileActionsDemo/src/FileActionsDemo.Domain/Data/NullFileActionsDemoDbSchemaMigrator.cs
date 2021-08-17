using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace FileActionsDemo.Data
{
    /* This is used if database provider does't define
     * IFileActionsDemoDbSchemaMigrator implementation.
     */
    public class NullFileActionsDemoDbSchemaMigrator : IFileActionsDemoDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}