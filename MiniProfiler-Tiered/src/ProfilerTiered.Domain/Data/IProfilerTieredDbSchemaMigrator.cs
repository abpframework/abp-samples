using System.Threading.Tasks;

namespace ProfilerTiered.Data
{
    public interface IProfilerTieredDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
