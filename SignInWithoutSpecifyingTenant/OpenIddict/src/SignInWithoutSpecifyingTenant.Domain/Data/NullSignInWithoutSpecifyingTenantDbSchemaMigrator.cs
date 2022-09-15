using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace SignInWithoutSpecifyingTenant.Data;

/* This is used if database provider does't define
 * ISignInWithoutSpecifyingTenantDbSchemaMigrator implementation.
 */
public class NullSignInWithoutSpecifyingTenantDbSchemaMigrator : ISignInWithoutSpecifyingTenantDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
