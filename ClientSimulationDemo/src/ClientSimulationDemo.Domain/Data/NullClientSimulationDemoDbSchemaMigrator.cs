using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace ClientSimulationDemo.Data
{
    /* This is used if database provider does't define
     * IClientSimulationDemoDbSchemaMigrator implementation.
     */
    public class NullClientSimulationDemoDbSchemaMigrator : IClientSimulationDemoDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}