using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ConcurrentLogin.Data;
using Volo.Abp.DependencyInjection;

namespace ConcurrentLogin.EntityFrameworkCore;

public class EntityFrameworkCoreConcurrentLoginDbSchemaMigrator
    : IConcurrentLoginDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreConcurrentLoginDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the ConcurrentLoginDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<ConcurrentLoginDbContext>()
            .Database
            .MigrateAsync();
    }
}
