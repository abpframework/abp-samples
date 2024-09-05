using System.Threading.Tasks;

namespace Acme.DemoCenterApp.Data;

public interface IDemoCenterAppDbSchemaMigrator
{
    Task MigrateAsync();
}
