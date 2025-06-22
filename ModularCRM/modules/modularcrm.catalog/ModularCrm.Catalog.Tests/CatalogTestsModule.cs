using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using ModularCrm.Catalog.Data;
using Volo.Abp;
using Volo.Abp.AspNetCore.TestBase;
using Volo.Abp.Caching;
using Volo.Abp.DistributedLocking;
using Volo.Abp.EventBus;
using Volo.Abp.Modularity;
using Volo.Abp.Uow;
using Volo.Abp.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Sqlite;

namespace ModularCrm.Catalog.Tests;

[DependsOn(
    typeof(AbpAspNetCoreTestBaseModule),
    typeof(AbpAspNetCoreMvcModule),
    typeof(AbpEntityFrameworkCoreSqliteModule),
    typeof(AbpEventBusModule),
    typeof(AbpCachingModule),
    typeof(AbpDistributedLockingAbstractionsModule)
)]
[AdditionalAssembly(typeof(CatalogModule))]
public class CatalogTestsModule : AbpModule
{
    private SqliteConnection? _sqliteConnection;
    
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var configuration = context.Services.GetConfiguration();

        ConfigureAuthorization(context);
        ConfigureDatabase(context);
        ConfigureDatabaseTransactions(context);
    }

    public override void OnApplicationInitialization(ApplicationInitializationContext context)
    {
        var app = context.GetApplicationBuilder();

        app.UseCorrelationId();
        app.UseAbpRequestLocalization();
        app.UseStaticFiles();
        app.UseRouting();
        app.UseUnitOfWork();
        app.UseConfiguredEndpoints();
    }

    
    public override void OnApplicationShutdown(ApplicationShutdownContext context)
    {
        _sqliteConnection?.Dispose();
    }

    private static void ConfigureAuthorization(ServiceConfigurationContext context)
    {
        /* We don't need to authorization in tests */
        context.Services.AddAlwaysAllowAuthorization();
    }

    private void ConfigureDatabase(ServiceConfigurationContext context)
    {

        _sqliteConnection = CreateDatabaseAndGetConnection();
        
        context.Services.AddAbpDbContext<CatalogDbContext>(options =>
        {
            options.AddDefaultRepositories();
        });
        
        Configure<AbpDbContextOptions>(options =>
        {
            options.Configure(opts =>
            {
                /* Use SQLite for all EF Core DbContexts in tests */
                opts.UseSqlite(_sqliteConnection);
            });
        });
    }
    
    private void ConfigureDatabaseTransactions(ServiceConfigurationContext context)
    {
        context.Services.AddAlwaysDisableUnitOfWorkTransaction();
        
        Configure<AbpUnitOfWorkDefaultOptions>(options =>
        {
            options.TransactionBehavior = UnitOfWorkTransactionBehavior.Disabled;
        });
    }
    
    
    private static SqliteConnection CreateDatabaseAndGetConnection()
    {
        var connection = new SqliteConnection("Data Source=:memory:");
        connection.Open();

        // CatalogDbContext ()
        new CatalogDbContext(
            new DbContextOptionsBuilder<CatalogDbContext>().UseSqlite(connection).Options
        ).GetService<IRelationalDatabaseCreator>().CreateTables();

        return connection;
    }
}
