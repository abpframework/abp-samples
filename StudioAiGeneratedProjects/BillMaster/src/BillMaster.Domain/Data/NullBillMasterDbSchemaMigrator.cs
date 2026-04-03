using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace BillMaster.Data;

/* This is used if database provider does't define
 * IBillMasterDbSchemaMigrator implementation.
 */
public class NullBillMasterDbSchemaMigrator : IBillMasterDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
