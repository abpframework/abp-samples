using System.Threading.Tasks;

namespace BillMaster.Data;

public interface IBillMasterDbSchemaMigrator
{
    Task MigrateAsync();
}
