using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using PasswordlessAuthentication.Data;
using Volo.Abp.DependencyInjection;

namespace PasswordlessAuthentication.EntityFrameworkCore
{
    public class EntityFrameworkCorePasswordlessAuthenticationDbSchemaMigrator
        : IPasswordlessAuthenticationDbSchemaMigrator, ITransientDependency
    {
        private readonly IServiceProvider _serviceProvider;

        public EntityFrameworkCorePasswordlessAuthenticationDbSchemaMigrator(
            IServiceProvider serviceProvider)
        {
            _serviceProvider = serviceProvider;
        }

        public async Task MigrateAsync()
        {
            /* We intentionally resolving the PasswordlessAuthenticationMigrationsDbContext
             * from IServiceProvider (instead of directly injecting it)
             * to properly get the connection string of the current tenant in the
             * current scope.
             */

            await _serviceProvider
                .GetRequiredService<PasswordlessAuthenticationMigrationsDbContext>()
                .Database
                .MigrateAsync();
        }
    }
}