using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using EfCoreDiDemo.Data;
using Volo.Abp.DependencyInjection;

namespace EfCoreDiDemo.EntityFrameworkCore;

public class EntityFrameworkCoreEfCoreDiDemoDbSchemaMigrator
    : IEfCoreDiDemoDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreEfCoreDiDemoDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the EfCoreDiDemoDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<EfCoreDiDemoDbContext>()
            .Database
            .MigrateAsync();
    }
}
