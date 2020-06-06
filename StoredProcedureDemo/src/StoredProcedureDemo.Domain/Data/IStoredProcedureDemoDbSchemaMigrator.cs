using System.Threading.Tasks;

namespace StoredProcedureDemo.Data
{
    public interface IStoredProcedureDemoDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
