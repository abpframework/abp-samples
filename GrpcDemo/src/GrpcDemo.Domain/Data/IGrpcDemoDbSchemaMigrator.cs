using System.Threading.Tasks;

namespace GrpcDemo.Data
{
    public interface IGrpcDemoDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
