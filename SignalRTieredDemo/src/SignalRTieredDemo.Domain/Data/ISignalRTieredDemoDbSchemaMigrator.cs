using System.Threading.Tasks;

namespace SignalRTieredDemo.Data
{
    public interface ISignalRTieredDemoDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
