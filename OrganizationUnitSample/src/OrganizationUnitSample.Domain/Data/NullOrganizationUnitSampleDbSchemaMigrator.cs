using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace OrganizationUnitSample.Data
{
    /* This is used if database provider does't define
     * IOrganizationUnitSampleDbSchemaMigrator implementation.
     */
    public class NullOrganizationUnitSampleDbSchemaMigrator : IOrganizationUnitSampleDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}