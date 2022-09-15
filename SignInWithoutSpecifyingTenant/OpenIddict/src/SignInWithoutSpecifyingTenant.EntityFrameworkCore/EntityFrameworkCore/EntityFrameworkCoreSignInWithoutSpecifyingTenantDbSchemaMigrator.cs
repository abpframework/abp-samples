using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SignInWithoutSpecifyingTenant.Data;
using Volo.Abp.DependencyInjection;

namespace SignInWithoutSpecifyingTenant.EntityFrameworkCore;

public class EntityFrameworkCoreSignInWithoutSpecifyingTenantDbSchemaMigrator
    : ISignInWithoutSpecifyingTenantDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreSignInWithoutSpecifyingTenantDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the SignInWithoutSpecifyingTenantDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<SignInWithoutSpecifyingTenantDbContext>()
            .Database
            .MigrateAsync();
    }
}
