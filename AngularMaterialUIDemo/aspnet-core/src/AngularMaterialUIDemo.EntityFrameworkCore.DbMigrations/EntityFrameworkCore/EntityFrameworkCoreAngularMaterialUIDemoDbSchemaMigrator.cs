using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using AngularMaterialUIDemo.Data;
using Volo.Abp.DependencyInjection;

namespace AngularMaterialUIDemo.EntityFrameworkCore
{
    public class EntityFrameworkCoreAngularMaterialUIDemoDbSchemaMigrator
        : IAngularMaterialUIDemoDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreAngularMaterialUIDemoDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the AngularMaterialUIDemoMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<AngularMaterialUIDemoMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}