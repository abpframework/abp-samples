using System.Threading.Tasks;

namespace CustomNgAppWithIdentityServer.Data
{
    public interface ICustomNgAppWithIdentityServerDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}