using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ElsaDemo.Data;
using Volo.Abp.DependencyInjection;

namespace ElsaDemo.EntityFrameworkCore
{
    public class EntityFrameworkCoreElsaDemoDbSchemaMigrator
        : IElsaDemoDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreElsaDemoDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the ElsaDemoMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<ElsaDemoMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}