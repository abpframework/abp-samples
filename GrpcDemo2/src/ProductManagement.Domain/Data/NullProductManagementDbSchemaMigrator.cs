using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace ProductManagement.Data;

/* This is used if database provider does't define
 * IProductManagementDbSchemaMigrator implementation.
 */
public class NullProductManagementDbSchemaMigrator : IProductManagementDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
