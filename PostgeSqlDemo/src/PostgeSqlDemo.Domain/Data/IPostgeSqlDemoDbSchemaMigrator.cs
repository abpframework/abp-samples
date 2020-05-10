using System.Threading.Tasks;

namespace PostgeSqlDemo.Data
{
    public interface IPostgeSqlDemoDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
