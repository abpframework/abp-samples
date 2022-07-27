using System.Threading.Tasks;

namespace Ids2OpenId.Data;

public interface IIds2OpenIdDbSchemaMigrator
{
    Task MigrateAsync();
}
