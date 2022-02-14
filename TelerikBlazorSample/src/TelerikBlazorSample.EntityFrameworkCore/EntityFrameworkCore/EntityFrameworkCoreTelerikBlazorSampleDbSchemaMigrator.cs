using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TelerikBlazorSample.Data;
using Volo.Abp.DependencyInjection;

namespace TelerikBlazorSample.EntityFrameworkCore;

public class EntityFrameworkCoreTelerikBlazorSampleDbSchemaMigrator
    : ITelerikBlazorSampleDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreTelerikBlazorSampleDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the TelerikBlazorSampleDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<TelerikBlazorSampleDbContext>()
            .Database
            .MigrateAsync();
    }
}
