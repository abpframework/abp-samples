using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using OpenIddictDemo.Data;
using Volo.Abp.DependencyInjection;

namespace OpenIddictDemo.EntityFrameworkCore
{
    public class EntityFrameworkCoreOpenIddictDemoDbSchemaMigrator
        : IOpenIddictDemoDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreOpenIddictDemoDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the OpenIddictDemoDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<OpenIddictDemoDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}
