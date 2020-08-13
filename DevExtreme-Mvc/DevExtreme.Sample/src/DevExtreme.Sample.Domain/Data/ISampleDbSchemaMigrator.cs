using System.Threading.Tasks;

namespace DevExtreme.Sample.Data
{
    public interface ISampleDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
