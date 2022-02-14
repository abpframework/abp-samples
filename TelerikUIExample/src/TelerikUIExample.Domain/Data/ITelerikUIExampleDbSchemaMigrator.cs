using System.Threading.Tasks;

namespace TelerikUIExample.Data;

public interface ITelerikUIExampleDbSchemaMigrator
{
    Task MigrateAsync();
}
