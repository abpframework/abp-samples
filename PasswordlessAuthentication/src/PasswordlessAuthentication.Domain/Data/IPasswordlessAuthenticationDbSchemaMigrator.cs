using System.Threading.Tasks;

namespace PasswordlessAuthentication.Data
{
    public interface IPasswordlessAuthenticationDbSchemaMigrator
    {
        Task MigrateAsync();
    }
}
