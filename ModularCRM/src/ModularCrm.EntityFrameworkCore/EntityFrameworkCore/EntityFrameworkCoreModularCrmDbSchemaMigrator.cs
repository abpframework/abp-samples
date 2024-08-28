using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ModularCrm.Data;
using Volo.Abp.DependencyInjection;

namespace ModularCrm.EntityFrameworkCore;

public class EntityFrameworkCoreModularCrmDbSchemaMigrator
    : IModularCrmDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreModularCrmDbSchemaMigrator(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the ModularCrmDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<ModularCrmDbContext>()
            .Database
            .MigrateAsync();
    }
}
