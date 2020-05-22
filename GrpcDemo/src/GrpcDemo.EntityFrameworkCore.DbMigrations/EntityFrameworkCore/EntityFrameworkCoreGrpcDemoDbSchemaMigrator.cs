using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using GrpcDemo.Data;
using Volo.Abp.DependencyInjection;

namespace GrpcDemo.EntityFrameworkCore
{
    public class EntityFrameworkCoreGrpcDemoDbSchemaMigrator
        : IGrpcDemoDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreGrpcDemoDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the GrpcDemoMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<GrpcDemoMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}