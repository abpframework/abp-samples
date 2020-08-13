using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using DevExtreme.Sample.Data;
using Volo.Abp.DependencyInjection;

namespace DevExtreme.Sample.EntityFrameworkCore
{
    public class EntityFrameworkCoreSampleDbSchemaMigrator
        : ISampleDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreSampleDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the SampleMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<SampleMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}