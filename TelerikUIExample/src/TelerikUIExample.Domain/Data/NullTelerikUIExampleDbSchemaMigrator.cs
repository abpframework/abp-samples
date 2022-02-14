using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace TelerikUIExample.Data;

/* This is used if database provider does't define
 * ITelerikUIExampleDbSchemaMigrator implementation.
 */
public class NullTelerikUIExampleDbSchemaMigrator : ITelerikUIExampleDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
