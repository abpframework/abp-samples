using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Acme.BookStore.AngularMaterial.Data;
using Volo.Abp.DependencyInjection;

namespace Acme.BookStore.AngularMaterial.EntityFrameworkCore
{
    public class EntityFrameworkCoreAngularMaterialDbSchemaMigrator
        : IAngularMaterialDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCoreAngularMaterialDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the AngularMaterialMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<AngularMaterialMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}