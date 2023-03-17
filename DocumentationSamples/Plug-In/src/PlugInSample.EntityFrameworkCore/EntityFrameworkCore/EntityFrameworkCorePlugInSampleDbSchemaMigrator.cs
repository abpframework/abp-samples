using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PlugInSample.Data;
using Volo.Abp.DependencyInjection;

namespace PlugInSample.EntityFrameworkCore;

public class EntityFrameworkCorePlugInSampleDbSchemaMigrator
    : IPlugInSampleDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCorePlugInSampleDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the PlugInSampleDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<PlugInSampleDbContext>()
            .Database
            .MigrateAsync();
    }
}
