using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using OrganizationUnitSample.Data;
using Volo.Abp.DependencyInjection;

namespace OrganizationUnitSample.EntityFrameworkCore
{
    public class EntityFrameworkCoreOrganizationUnitSampleDbSchemaMigrator
        : IOrganizationUnitSampleDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreOrganizationUnitSampleDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the OrganizationUnitSampleMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<OrganizationUnitSampleMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}