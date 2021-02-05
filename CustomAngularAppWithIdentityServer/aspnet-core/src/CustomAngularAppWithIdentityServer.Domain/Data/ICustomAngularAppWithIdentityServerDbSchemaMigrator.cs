using System.Threading.Tasks;

namespace CustomAngularAppWithIdentityServer.Data
{
    public interface ICustomAngularAppWithIdentityServerDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
