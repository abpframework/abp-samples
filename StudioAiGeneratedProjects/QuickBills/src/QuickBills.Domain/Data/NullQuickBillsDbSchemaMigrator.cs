using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace QuickBills.Data;

/* This is used if database provider does't define
 * IQuickBillsDbSchemaMigrator implementation.
 */
public class NullQuickBillsDbSchemaMigrator : IQuickBillsDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
