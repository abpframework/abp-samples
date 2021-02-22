using System.Threading.Tasks;

namespace MatBlazorSample.Data
{
    public interface IMatBlazorSampleDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
