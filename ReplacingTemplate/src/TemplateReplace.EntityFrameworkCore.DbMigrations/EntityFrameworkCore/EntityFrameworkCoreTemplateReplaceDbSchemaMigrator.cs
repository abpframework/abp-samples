using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TemplateReplace.Data;
using Volo.Abp.DependencyInjection;

namespace TemplateReplace.EntityFrameworkCore
{
    public class EntityFrameworkCoreTemplateReplaceDbSchemaMigrator
        : ITemplateReplaceDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreTemplateReplaceDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the TemplateReplaceMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<TemplateReplaceMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}