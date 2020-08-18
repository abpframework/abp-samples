using System.Threading.Tasks;

namespace DevExtremeSample.Data
{
    public interface IDevExtremeSampleDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
