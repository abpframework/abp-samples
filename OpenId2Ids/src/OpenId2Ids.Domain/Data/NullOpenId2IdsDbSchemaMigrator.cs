using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace OpenId2Ids.Data;

/* This is used if database provider does't define
 * IOpenId2IdsDbSchemaMigrator implementation.
 */
public class NullOpenId2IdsDbSchemaMigrator : IOpenId2IdsDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
