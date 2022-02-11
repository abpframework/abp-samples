using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TelerikUIExample.Data;
using Volo.Abp.DependencyInjection;

namespace TelerikUIExample.EntityFrameworkCore;

public class EntityFrameworkCoreTelerikUIExampleDbSchemaMigrator
    : ITelerikUIExampleDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreTelerikUIExampleDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the TelerikUIExampleDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<TelerikUIExampleDbContext>()
            .Database
            .MigrateAsync();
    }
}
