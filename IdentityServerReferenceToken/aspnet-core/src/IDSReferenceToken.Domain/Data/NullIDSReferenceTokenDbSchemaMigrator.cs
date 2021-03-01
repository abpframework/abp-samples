using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace IDSReferenceToken.Data
{
    /* This is used if database provider does't define
     * IIDSReferenceTokenDbSchemaMigrator implementation.
     */
    public class NullIDSReferenceTokenDbSchemaMigrator : IIDSReferenceTokenDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}