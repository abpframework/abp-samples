using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using SeparateBackgroundJob.Data;
using Volo.Abp.DependencyInjection;

namespace SeparateBackgroundJob.EntityFrameworkCore;

public class EntityFrameworkCoreSeparateBackgroundJobDbSchemaMigrator
    : ISeparateBackgroundJobDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreSeparateBackgroundJobDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolve the SeparateBackgroundJobDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<SeparateBackgroundJobDbContext>()
            .Database
            .MigrateAsync();
    }
}
