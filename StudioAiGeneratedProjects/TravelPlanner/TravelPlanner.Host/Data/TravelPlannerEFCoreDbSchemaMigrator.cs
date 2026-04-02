using Volo.Abp.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace TravelPlanner.Data;

public class TravelPlannerDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public TravelPlannerDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        
        /* We intentionally resolving the TravelPlannerDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<TravelPlannerDbContext>()
            .Database
            .MigrateAsync();

    }
}
