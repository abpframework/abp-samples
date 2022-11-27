using System.Threading.Tasks;

namespace EfCoreDiDemo.Data;

public interface IEfCoreDiDemoDbSchemaMigrator
{
    Task MigrateAsync();
}
