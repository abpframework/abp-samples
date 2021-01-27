using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using CustomNgAppWithIdentityServer.Data;
using Volo.Abp.DependencyInjection;

namespace CustomNgAppWithIdentityServer.EntityFrameworkCore
{
    public class EntityFrameworkCoreCustomNgAppWithIdentityServerDbSchemaMigrator
        : ICustomNgAppWithIdentityServerDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreCustomNgAppWithIdentityServerDbSchemaMigrator(IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the CustomNgAppWithIdentityServerMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<CustomNgAppWithIdentityServerMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}