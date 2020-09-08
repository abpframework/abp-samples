using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace TemplateReplace.Data
{
    /* This is used if database provider does't define
     * ITemplateReplaceDbSchemaMigrator implementation.
     */
    public class NullTemplateReplaceDbSchemaMigrator : ITemplateReplaceDbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}