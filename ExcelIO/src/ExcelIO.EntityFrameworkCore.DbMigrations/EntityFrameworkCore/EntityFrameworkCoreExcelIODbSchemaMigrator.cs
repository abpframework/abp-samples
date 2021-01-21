using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ExcelIO.Data;
using Volo.Abp.DependencyInjection;

namespace ExcelIO.EntityFrameworkCore
{
    public class EntityFrameworkCoreExcelIODbSchemaMigrator
        : IExcelIODbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreExcelIODbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the ExcelIOMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<ExcelIOMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}