using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ConcurrencyDemo.Data;
using Volo.Abp.DependencyInjection;

namespace ConcurrencyDemo.EntityFrameworkCore
{
    public class EntityFrameworkCoreConcurrencyDemoDbSchemaMigrator
        : IConcurrencyDemoDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreConcurrencyDemoDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the ConcurrencyDemoMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<ConcurrencyDemoMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}