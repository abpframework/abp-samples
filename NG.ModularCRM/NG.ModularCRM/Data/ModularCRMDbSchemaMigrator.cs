using Volo.Abp.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace NG.ModularCRM.Data;

public class ModularCRMDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public ModularCRMDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        
        /* We intentionally resolving the ModularCRMDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<ModularCRMDbContext>()
            .Database
            .MigrateAsync();

    }
}
