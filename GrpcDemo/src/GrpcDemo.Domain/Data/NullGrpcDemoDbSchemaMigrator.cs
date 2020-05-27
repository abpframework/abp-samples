using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace GrpcDemo.Data
{
    /* This is used if database provider does't define
     * IGrpcDemoDbSchemaMigrator implementation.
     */
    public class NullGrpcDemoDbSchemaMigrator : IGrpcDemoDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}