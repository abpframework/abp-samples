using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace EfCoreDiDemo.Data;

/* This is used if database provider does't define
 * IEfCoreDiDemoDbSchemaMigrator implementation.
 */
public class NullEfCoreDiDemoDbSchemaMigrator : IEfCoreDiDemoDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
