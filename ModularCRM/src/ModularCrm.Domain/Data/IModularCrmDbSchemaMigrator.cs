using System.Threading.Tasks;

namespace ModularCrm.Data;

public interface IModularCrmDbSchemaMigrator
{
    Task MigrateAsync();
}
