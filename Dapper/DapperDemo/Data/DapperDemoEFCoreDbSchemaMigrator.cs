using Microsoft.EntityFrameworkCore;
using Volo.Abp.DependencyInjection;

namespace DapperDemo.Data;

public class DapperDemoEFCoreDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public DapperDemoEFCoreDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the DapperDemoDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<DapperDemoDbContext>()
            .Database
            .MigrateAsync();
    }
}
