using System.Threading.Tasks;

namespace TelerikBlazorSample.Data;

public interface ITelerikBlazorSampleDbSchemaMigrator
{
    Task MigrateAsync();
}
