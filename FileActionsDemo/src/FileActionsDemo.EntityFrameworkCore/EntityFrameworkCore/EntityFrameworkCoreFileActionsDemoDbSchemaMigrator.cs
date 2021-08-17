using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using FileActionsDemo.Data;
using Volo.Abp.DependencyInjection;

namespace FileActionsDemo.EntityFrameworkCore
{
    public class EntityFrameworkCoreFileActionsDemoDbSchemaMigrator
        : IFileActionsDemoDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreFileActionsDemoDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the FileActionsDemoDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<FileActionsDemoDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}
