using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using BillMaster.Data;
using Volo.Abp.DependencyInjection;

namespace BillMaster.EntityFrameworkCore;

public class EntityFrameworkCoreBillMasterDbSchemaMigrator
    : IBillMasterDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreBillMasterDbSchemaMigrator(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the BillMasterDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<BillMasterDbContext>()
            .Database
            .MigrateAsync();
    }
}
