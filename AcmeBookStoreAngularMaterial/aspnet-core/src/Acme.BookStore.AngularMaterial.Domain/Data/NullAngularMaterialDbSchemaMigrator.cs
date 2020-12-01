using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Acme.BookStore.AngularMaterial.Data
{
    /* This is used if database provider does't define
     * IAngularMaterialDbSchemaMigrator implementation.
     */
    public class NullAngularMaterialDbSchemaMigrator : IAngularMaterialDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}