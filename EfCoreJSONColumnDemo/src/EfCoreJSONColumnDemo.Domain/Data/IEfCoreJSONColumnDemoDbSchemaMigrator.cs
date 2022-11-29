using System.Threading.Tasks;

namespace EfCoreJSONColumnDemo.Data;

public interface IEfCoreJSONColumnDemoDbSchemaMigrator
{
    Task MigrateAsync();
}
