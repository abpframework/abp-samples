using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using EfCoreGuardedTypeDemo.Data;
using Volo.Abp.DependencyInjection;

namespace EfCoreGuardedTypeDemo.EntityFrameworkCore;

public class EntityFrameworkCoreEfCoreGuardedTypeDemoDbSchemaMigrator
    : IEfCoreGuardedTypeDemoDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreEfCoreGuardedTypeDemoDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the EfCoreGuardedTypeDemoDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<EfCoreGuardedTypeDemoDbContext>()
            .Database
            .MigrateAsync();
    }
}
