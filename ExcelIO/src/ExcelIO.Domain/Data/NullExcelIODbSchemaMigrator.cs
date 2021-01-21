using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace ExcelIO.Data
{
    /* This is used if database provider does't define
     * IExcelIODbSchemaMigrator implementation.
     */
    public class NullExcelIODbSchemaMigrator : IExcelIODbSchemaMigrator, ITransientDependency
    {
        public Task MigrateAsync()
        {
            return Task.CompletedTask;
        }
    }
}