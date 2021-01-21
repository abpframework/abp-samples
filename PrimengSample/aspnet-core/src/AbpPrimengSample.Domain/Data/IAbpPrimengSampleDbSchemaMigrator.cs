using System.Threading.Tasks;

namespace AbpPrimengSample.Data
{
    public interface IAbpPrimengSampleDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
