using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace SwaggerDemo.Data;

/* This is used if database provider does't define
 * ISwaggerDemoDbSchemaMigrator implementation.
 */
public class NullSwaggerDemoDbSchemaMigrator : ISwaggerDemoDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
