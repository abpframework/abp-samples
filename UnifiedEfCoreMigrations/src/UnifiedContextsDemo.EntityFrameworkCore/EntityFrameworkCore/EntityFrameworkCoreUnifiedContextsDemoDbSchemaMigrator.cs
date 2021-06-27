using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using UnifiedContextsDemo.Data;
using Volo.Abp.DependencyInjection;

namespace UnifiedContextsDemo.EntityFrameworkCore
{
    public class EntityFrameworkCoreUnifiedContextsDemoDbSchemaMigrator
        : IUnifiedContextsDemoDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreUnifiedContextsDemoDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the UnifiedContextsDemoMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<UnifiedContextsDemoDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}