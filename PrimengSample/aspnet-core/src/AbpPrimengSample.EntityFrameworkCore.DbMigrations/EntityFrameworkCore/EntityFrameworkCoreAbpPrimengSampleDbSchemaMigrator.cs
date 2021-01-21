using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using AbpPrimengSample.Data;
using Volo.Abp.DependencyInjection;

namespace AbpPrimengSample.EntityFrameworkCore
{
    public class EntityFrameworkCoreAbpPrimengSampleDbSchemaMigrator
        : IAbpPrimengSampleDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreAbpPrimengSampleDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the AbpPrimengSampleMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<AbpPrimengSampleMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}