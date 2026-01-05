using Volo.Abp.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace aspnet.Data;

public class aspnetDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public aspnetDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        
        /* We intentionally resolving the aspnetDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<aspnetDbContext>()
            .Database
            .MigrateAsync();

    }
}
