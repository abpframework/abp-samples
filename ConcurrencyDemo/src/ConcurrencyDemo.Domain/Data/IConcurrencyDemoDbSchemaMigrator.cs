using System.Threading.Tasks;

namespace ConcurrencyDemo.Data
{
    public interface IConcurrencyDemoDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
