using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace ImageManipulationDemo.Data;

/* This is used if database provider does't define
 * IImageManipulationDemoDbSchemaMigrator implementation.
 */
public class NullImageManipulationDemoDbSchemaMigrator : IImageManipulationDemoDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
