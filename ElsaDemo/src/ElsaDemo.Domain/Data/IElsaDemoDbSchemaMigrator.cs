using System.Threading.Tasks;

namespace ElsaDemo.Data
{
    public interface IElsaDemoDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
