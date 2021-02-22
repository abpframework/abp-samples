using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using MatBlazorSample.Data;
using Volo.Abp.DependencyInjection;

namespace MatBlazorSample.EntityFrameworkCore
{
    public class EntityFrameworkCoreMatBlazorSampleDbSchemaMigrator
        : IMatBlazorSampleDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreMatBlazorSampleDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the MatBlazorSampleMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<MatBlazorSampleMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}