using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using EfCoreJSONColumnDemo.Data;
using Volo.Abp.DependencyInjection;

namespace EfCoreJSONColumnDemo.EntityFrameworkCore;

public class EntityFrameworkCoreEfCoreJSONColumnDemoDbSchemaMigrator
    : IEfCoreJSONColumnDemoDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreEfCoreJSONColumnDemoDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the EfCoreJSONColumnDemoDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<EfCoreJSONColumnDemoDbContext>()
            .Database
            .MigrateAsync();
    }
}
