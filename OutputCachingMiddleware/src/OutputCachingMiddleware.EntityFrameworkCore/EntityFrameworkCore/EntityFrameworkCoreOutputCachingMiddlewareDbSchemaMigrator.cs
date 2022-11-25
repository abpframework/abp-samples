using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using OutputCachingMiddleware.Data;
using Volo.Abp.DependencyInjection;

namespace OutputCachingMiddleware.EntityFrameworkCore;

public class EntityFrameworkCoreOutputCachingMiddlewareDbSchemaMigrator
    : IOutputCachingMiddlewareDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreOutputCachingMiddlewareDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the OutputCachingMiddlewareDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<OutputCachingMiddlewareDbContext>()
            .Database
            .MigrateAsync();
    }
}
