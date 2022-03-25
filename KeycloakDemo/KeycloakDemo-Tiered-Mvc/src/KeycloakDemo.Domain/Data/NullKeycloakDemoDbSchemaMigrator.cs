using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace KeycloakDemo.Data;

/* This is used if database provider does't define
 * IKeycloakDemoDbSchemaMigrator implementation.
 */
public class NullKeycloakDemoDbSchemaMigrator : IKeycloakDemoDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
