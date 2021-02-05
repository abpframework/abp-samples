using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using CustomAngularAppWithIdentityServer.Data;
using Volo.Abp.DependencyInjection;

namespace CustomAngularAppWithIdentityServer.EntityFrameworkCore
{
    public class EntityFrameworkCoreCustomAngularAppWithIdentityServerDbSchemaMigrator
        : ICustomAngularAppWithIdentityServerDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreCustomAngularAppWithIdentityServerDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the CustomAngularAppWithIdentityServerMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<CustomAngularAppWithIdentityServerMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}