using System.Threading.Tasks;

namespace Profiler.Data
{
    public interface IProfilerDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
