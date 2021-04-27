using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SyncfusionSample.Data;
using Volo.Abp.DependencyInjection;

namespace SyncfusionSample.EntityFrameworkCore
{
    public class EntityFrameworkCoreSyncfusionSampleDbSchemaMigrator
        : ISyncfusionSampleDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreSyncfusionSampleDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the SyncfusionSampleMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<SyncfusionSampleMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}