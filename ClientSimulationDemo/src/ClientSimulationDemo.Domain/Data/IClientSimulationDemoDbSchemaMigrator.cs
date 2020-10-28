using System.Threading.Tasks;

namespace ClientSimulationDemo.Data
{
    public interface IClientSimulationDemoDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
