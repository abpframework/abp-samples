using System.Threading.Tasks;

namespace SignalRDemo.Data
{
    public interface ISignalRDemoDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
