using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using OpenId2Ids.Data;
using Volo.Abp.DependencyInjection;

namespace OpenId2Ids.EntityFrameworkCore;

public class EntityFrameworkCoreOpenId2IdsDbSchemaMigrator
    : IOpenId2IdsDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreOpenId2IdsDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the OpenId2IdsDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<OpenId2IdsDbContext>()
            .Database
            .MigrateAsync();
    }
}
