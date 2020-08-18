using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using DevExtremeSample.Data;
using Volo.Abp.DependencyInjection;

namespace DevExtremeSample.EntityFrameworkCore
{
    public class EntityFrameworkCoreDevExtremeSampleDbSchemaMigrator
        : IDevExtremeSampleDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreDevExtremeSampleDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the DevExtremeSampleMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<DevExtremeSampleMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}