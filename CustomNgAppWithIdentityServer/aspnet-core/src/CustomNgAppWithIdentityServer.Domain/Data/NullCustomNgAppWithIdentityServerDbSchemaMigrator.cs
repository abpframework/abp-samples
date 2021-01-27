using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace CustomNgAppWithIdentityServer.Data
{
    /* This is used if database provider does't define
     * ICustomNgAppWithIdentityServerDbSchemaMigrator implementation.
     */
    public class NullCustomNgAppWithIdentityServerDbSchemaMigrator : ICustomNgAppWithIdentityServerDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}