using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace ModularCrm.Data;

/* This is used if database provider does't define
 * IModularCrmDbSchemaMigrator implementation.
 */
public class NullModularCrmDbSchemaMigrator : IModularCrmDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
