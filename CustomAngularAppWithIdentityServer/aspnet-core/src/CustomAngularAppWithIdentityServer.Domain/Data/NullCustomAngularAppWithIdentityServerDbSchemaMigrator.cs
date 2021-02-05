using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace CustomAngularAppWithIdentityServer.Data
{
    /* This is used if database provider does't define
     * ICustomAngularAppWithIdentityServerDbSchemaMigrator implementation.
     */
    public class NullCustomAngularAppWithIdentityServerDbSchemaMigrator : ICustomAngularAppWithIdentityServerDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}