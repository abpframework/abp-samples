using System.Threading.Tasks;

namespace ImageManipulationDemo.Data;

public interface IImageManipulationDemoDbSchemaMigrator
{
    Task MigrateAsync();
}
