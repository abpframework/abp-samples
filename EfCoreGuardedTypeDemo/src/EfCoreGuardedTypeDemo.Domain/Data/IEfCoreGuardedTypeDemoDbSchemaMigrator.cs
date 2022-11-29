using System.Threading.Tasks;

namespace EfCoreGuardedTypeDemo.Data;

public interface IEfCoreGuardedTypeDemoDbSchemaMigrator
{
    Task MigrateAsync();
}
