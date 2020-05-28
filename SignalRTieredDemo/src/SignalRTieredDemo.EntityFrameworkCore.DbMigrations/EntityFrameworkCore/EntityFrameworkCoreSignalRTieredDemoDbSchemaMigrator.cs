using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SignalRTieredDemo.Data;
using Volo.Abp.DependencyInjection;

namespace SignalRTieredDemo.EntityFrameworkCore
{
    public class EntityFrameworkCoreSignalRTieredDemoDbSchemaMigrator
        : ISignalRTieredDemoDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreSignalRTieredDemoDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the SignalRTieredDemoMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<SignalRTieredDemoMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}