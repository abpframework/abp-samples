using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SignalRDemo.Data;
using Volo.Abp.DependencyInjection;

namespace SignalRDemo.EntityFrameworkCore
{
    public class EntityFrameworkCoreSignalRDemoDbSchemaMigrator
        : ISignalRDemoDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreSignalRDemoDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the SignalRDemoMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<SignalRDemoMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}