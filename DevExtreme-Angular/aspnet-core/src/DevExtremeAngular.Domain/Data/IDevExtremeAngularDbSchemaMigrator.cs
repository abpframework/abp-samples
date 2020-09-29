using System.Threading.Tasks;

namespace DevExtremeAngular.Data
{
    public interface IDevExtremeAngularDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
