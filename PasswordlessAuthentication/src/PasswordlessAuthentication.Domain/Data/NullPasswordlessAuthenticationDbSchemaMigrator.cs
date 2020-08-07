using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace PasswordlessAuthentication.Data
{
    /* This is used if database provider does't define
     * IPasswordlessAuthenticationDbSchemaMigrator implementation.
     */
    public class NullPasswordlessAuthenticationDbSchemaMigrator : IPasswordlessAuthenticationDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}