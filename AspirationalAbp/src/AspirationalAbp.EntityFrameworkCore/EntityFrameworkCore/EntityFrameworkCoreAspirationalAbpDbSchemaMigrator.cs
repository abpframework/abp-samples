using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using AspirationalAbp.Data;
using Volo.Abp.DependencyInjection;

namespace AspirationalAbp.EntityFrameworkCore;

public class EntityFrameworkCoreAspirationalAbpDbSchemaMigrator
    : IAspirationalAbpDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreAspirationalAbpDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the AspirationalAbpDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<AspirationalAbpDbContext>()
            .Database
            .MigrateAsync();
    }
}
