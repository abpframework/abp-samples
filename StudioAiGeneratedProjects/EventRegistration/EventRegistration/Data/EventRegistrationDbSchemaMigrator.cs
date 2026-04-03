using Volo.Abp.DependencyInjection;
using Microsoft.EntityFrameworkCore;

namespace EventRegistration.Data;

public class EventRegistrationDbSchemaMigrator : ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EventRegistrationDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        
        /* We intentionally resolving the EventRegistrationDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<EventRegistrationDbContext>()
            .Database
            .MigrateAsync();

    }
}
