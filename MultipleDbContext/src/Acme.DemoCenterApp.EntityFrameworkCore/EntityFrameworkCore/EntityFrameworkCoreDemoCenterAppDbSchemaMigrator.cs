using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Acme.DemoCenterApp.Data;
using Volo.Abp.DependencyInjection;

namespace Acme.DemoCenterApp.EntityFrameworkCore;

public class EntityFrameworkCoreDemoCenterAppDbSchemaMigrator
    : IDemoCenterAppDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreDemoCenterAppDbSchemaMigrator(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the DemoCenterAppDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<DemoCenterAppDbContext>()
            .Database
            .MigrateAsync();
    }
}
