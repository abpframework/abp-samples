using Volo.Abp.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace ModularCrm.Data;

public class ModularCrmDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public ModularCrmDbSchemaMigrator(
        IServiceProvider serviceProvider)
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
