using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Ids2OpenId.Data;
using Volo.Abp.DependencyInjection;

namespace Ids2OpenId.EntityFrameworkCore;

public class EntityFrameworkCoreIds2OpenIdDbSchemaMigrator
    : IIds2OpenIdDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreIds2OpenIdDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the Ids2OpenIdDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<Ids2OpenIdDbContext>()
            .Database
            .MigrateAsync();
    }
}
