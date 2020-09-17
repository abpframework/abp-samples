using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ExtendLocalizationResource.Data;
using Volo.Abp.DependencyInjection;

namespace ExtendLocalizationResource.EntityFrameworkCore
{
    public class EntityFrameworkCoreExtendLocalizationResourceDbSchemaMigrator
        : IExtendLocalizationResourceDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreExtendLocalizationResourceDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the ExtendLocalizationResourceMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<ExtendLocalizationResourceMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}