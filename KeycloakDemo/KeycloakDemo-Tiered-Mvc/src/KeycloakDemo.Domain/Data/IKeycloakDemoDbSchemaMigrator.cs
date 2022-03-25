using System.Threading.Tasks;

namespace KeycloakDemo.Data;

public interface IKeycloakDemoDbSchemaMigrator
{
    Task MigrateAsync();
}
