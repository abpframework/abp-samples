using System.Threading.Tasks;

namespace DevExpressSample.Data
{
    public interface IDevExpressSampleDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
