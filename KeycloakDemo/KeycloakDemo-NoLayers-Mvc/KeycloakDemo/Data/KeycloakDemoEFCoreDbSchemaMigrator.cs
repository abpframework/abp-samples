using Microsoft.EntityFrameworkCore;
using Volo.Abp.DependencyInjection;

namespace KeycloakDemo.Data;

public class KeycloakDemoEFCoreDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public KeycloakDemoEFCoreDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the KeycloakDemoDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<KeycloakDemoDbContext>()
            .Database
            .MigrateAsync();
    }
}
