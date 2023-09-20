using System.Threading.Tasks;

namespace SeparateBackgroundJob.Data;

public interface ISeparateBackgroundJobDbSchemaMigrator
{
    Task MigrateAsync();
}
