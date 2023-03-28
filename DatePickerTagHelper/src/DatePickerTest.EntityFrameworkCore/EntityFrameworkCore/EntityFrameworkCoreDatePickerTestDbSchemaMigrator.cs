using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using DatePickerTest.Data;
using Volo.Abp.DependencyInjection;

namespace DatePickerTest.EntityFrameworkCore;

public class EntityFrameworkCoreDatePickerTestDbSchemaMigrator
    : IDatePickerTestDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreDatePickerTestDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the DatePickerTestDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<DatePickerTestDbContext>()
            .Database
            .MigrateAsync();
    }
}
