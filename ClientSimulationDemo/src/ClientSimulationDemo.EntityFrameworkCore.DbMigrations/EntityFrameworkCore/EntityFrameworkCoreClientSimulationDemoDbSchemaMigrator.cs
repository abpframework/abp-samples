using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ClientSimulationDemo.Data;
using Volo.Abp.DependencyInjection;

namespace ClientSimulationDemo.EntityFrameworkCore
{
    public class EntityFrameworkCoreClientSimulationDemoDbSchemaMigrator
        : IClientSimulationDemoDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreClientSimulationDemoDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the ClientSimulationDemoMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<ClientSimulationDemoMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}