using System.Threading.Tasks;

namespace FileActionsDemo.Data
{
    public interface IFileActionsDemoDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
