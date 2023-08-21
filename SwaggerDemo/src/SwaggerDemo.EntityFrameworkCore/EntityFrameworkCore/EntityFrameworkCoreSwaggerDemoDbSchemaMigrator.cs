using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SwaggerDemo.Data;
using Volo.Abp.DependencyInjection;

namespace SwaggerDemo.EntityFrameworkCore;

public class EntityFrameworkCoreSwaggerDemoDbSchemaMigrator
    : ISwaggerDemoDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreSwaggerDemoDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the SwaggerDemoDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<SwaggerDemoDbContext>()
            .Database
            .MigrateAsync();
    }
}
