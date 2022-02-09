using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace TelerikBlazorSample.Data;

/* This is used if database provider does't define
 * ITelerikBlazorSampleDbSchemaMigrator implementation.
 */
public class NullTelerikBlazorSampleDbSchemaMigrator : ITelerikBlazorSampleDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
