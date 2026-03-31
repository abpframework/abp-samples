using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using QuickBills.Data;
using Volo.Abp.DependencyInjection;

namespace QuickBills.EntityFrameworkCore;

public class EntityFrameworkCoreQuickBillsDbSchemaMigrator
    : IQuickBillsDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreQuickBillsDbSchemaMigrator(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the QuickBillsDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<QuickBillsDbContext>()
            .Database
            .MigrateAsync();
    }
}
