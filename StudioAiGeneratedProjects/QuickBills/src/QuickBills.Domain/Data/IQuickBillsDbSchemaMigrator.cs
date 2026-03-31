using System.Threading.Tasks;

namespace QuickBills.Data;

public interface IQuickBillsDbSchemaMigrator
{
    Task MigrateAsync();
}
