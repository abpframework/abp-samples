using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Acme.DemoCenterApp.Data;

/* This is used if database provider does't define
 * IDemoCenterAppDbSchemaMigrator implementation.
 */
public class NullDemoCenterAppDbSchemaMigrator : IDemoCenterAppDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
