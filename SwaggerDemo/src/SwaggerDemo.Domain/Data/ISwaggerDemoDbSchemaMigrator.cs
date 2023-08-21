using System.Threading.Tasks;

namespace SwaggerDemo.Data;

public interface ISwaggerDemoDbSchemaMigrator
{
    Task MigrateAsync();
}
