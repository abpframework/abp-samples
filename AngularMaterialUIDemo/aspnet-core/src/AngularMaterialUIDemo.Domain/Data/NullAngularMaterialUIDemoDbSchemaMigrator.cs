using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace AngularMaterialUIDemo.Data
{
    /* This is used if database provider does't define
     * IAngularMaterialUIDemoDbSchemaMigrator implementation.
     */
    public class NullAngularMaterialUIDemoDbSchemaMigrator : IAngularMaterialUIDemoDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}