using Volo.Abp.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace GymWorkoutPlanner.Data;

public class GymWorkoutPlannerDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public GymWorkoutPlannerDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        
        /* We intentionally resolving the GymWorkoutPlannerDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<GymWorkoutPlannerDbContext>()
            .Database
            .MigrateAsync();

    }
}
