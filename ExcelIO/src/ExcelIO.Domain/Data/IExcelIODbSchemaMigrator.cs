using System.Threading.Tasks;

namespace ExcelIO.Data
{
    public interface IExcelIODbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
