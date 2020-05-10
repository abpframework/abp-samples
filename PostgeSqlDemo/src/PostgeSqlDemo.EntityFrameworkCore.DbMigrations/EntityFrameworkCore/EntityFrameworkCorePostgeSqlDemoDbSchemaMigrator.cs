using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PostgeSqlDemo.Data;
using Volo.Abp.DependencyInjection;

namespace PostgeSqlDemo.EntityFrameworkCore
{
    public class EntityFrameworkCorePostgeSqlDemoDbSchemaMigrator
        : IPostgeSqlDemoDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCorePostgeSqlDemoDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the PostgeSqlDemoMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<PostgeSqlDemoMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}