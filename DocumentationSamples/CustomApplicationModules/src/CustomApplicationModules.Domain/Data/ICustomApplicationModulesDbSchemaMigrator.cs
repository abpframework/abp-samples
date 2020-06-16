using System.Threading.Tasks;

namespace CustomApplicationModules.Data
{
    public interface ICustomApplicationModulesDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
