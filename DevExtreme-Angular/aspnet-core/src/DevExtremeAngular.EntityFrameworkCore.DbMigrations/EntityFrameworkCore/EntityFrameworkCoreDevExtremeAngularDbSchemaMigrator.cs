using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using DevExtremeAngular.Data;
using Volo.Abp.DependencyInjection;

namespace DevExtremeAngular.EntityFrameworkCore
{
    public class EntityFrameworkCoreDevExtremeAngularDbSchemaMigrator
        : IDevExtremeAngularDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreDevExtremeAngularDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the DevExtremeAngularMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<DevExtremeAngularMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}