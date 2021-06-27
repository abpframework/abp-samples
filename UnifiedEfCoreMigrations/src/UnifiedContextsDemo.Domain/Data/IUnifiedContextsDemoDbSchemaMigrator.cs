using System.Threading.Tasks;

namespace UnifiedContextsDemo.Data
{
    public interface IUnifiedContextsDemoDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
