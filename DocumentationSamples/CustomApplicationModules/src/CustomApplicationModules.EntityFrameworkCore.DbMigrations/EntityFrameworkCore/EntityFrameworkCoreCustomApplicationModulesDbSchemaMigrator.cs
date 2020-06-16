using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using CustomApplicationModules.Data;
using Volo.Abp.DependencyInjection;

namespace CustomApplicationModules.EntityFrameworkCore
{
    public class EntityFrameworkCoreCustomApplicationModulesDbSchemaMigrator
        : ICustomApplicationModulesDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreCustomApplicationModulesDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the CustomApplicationModulesMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<CustomApplicationModulesMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}