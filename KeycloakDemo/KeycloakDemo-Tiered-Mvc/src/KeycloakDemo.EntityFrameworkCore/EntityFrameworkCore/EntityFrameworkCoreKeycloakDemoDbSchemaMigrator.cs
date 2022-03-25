using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using KeycloakDemo.Data;
using Volo.Abp.DependencyInjection;

namespace KeycloakDemo.EntityFrameworkCore;

public class EntityFrameworkCoreKeycloakDemoDbSchemaMigrator
    : IKeycloakDemoDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreKeycloakDemoDbSchemaMigrator(
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
