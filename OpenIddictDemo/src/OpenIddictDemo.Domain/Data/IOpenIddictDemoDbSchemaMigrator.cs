using System.Threading.Tasks;

namespace OpenIddictDemo.Data
{
    public interface IOpenIddictDemoDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
