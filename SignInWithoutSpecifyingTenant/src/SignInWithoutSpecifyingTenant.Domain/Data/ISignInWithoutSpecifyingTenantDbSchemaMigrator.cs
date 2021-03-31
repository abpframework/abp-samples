using System.Threading.Tasks;

namespace SignInWithoutSpecifyingTenant.Data
{
    public interface ISignInWithoutSpecifyingTenantDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
