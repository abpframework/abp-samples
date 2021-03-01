using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using IDSReferenceToken.Data;
using Volo.Abp.DependencyInjection;

namespace IDSReferenceToken.EntityFrameworkCore
{
    public class EntityFrameworkCoreIDSReferenceTokenDbSchemaMigrator
        : IIDSReferenceTokenDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreIDSReferenceTokenDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the IDSReferenceTokenMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<IDSReferenceTokenMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}