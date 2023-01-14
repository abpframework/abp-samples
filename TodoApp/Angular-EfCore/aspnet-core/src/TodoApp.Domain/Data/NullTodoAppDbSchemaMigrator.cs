using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace TodoApp.Data;

/* This is used if database provider does't define
 * ITodoAppDbSchemaMigrator implementation.
 */
public class NullTodoAppDbSchemaMigrator : ITodoAppDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
