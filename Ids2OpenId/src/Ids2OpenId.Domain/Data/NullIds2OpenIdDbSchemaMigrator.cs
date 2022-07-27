using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Ids2OpenId.Data;

/* This is used if database provider does't define
 * IIds2OpenIdDbSchemaMigrator implementation.
 */
public class NullIds2OpenIdDbSchemaMigrator : IIds2OpenIdDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
