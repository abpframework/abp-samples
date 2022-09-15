using System.Threading.Tasks;

namespace ProductManagement.Data;

public interface IProductManagementDbSchemaMigrator
{
    Task MigrateAsync();
}
