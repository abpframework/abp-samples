using System.Threading.Tasks;

namespace OpenId2Ids.Data;

public interface IOpenId2IdsDbSchemaMigrator
{
    Task MigrateAsync();
}
