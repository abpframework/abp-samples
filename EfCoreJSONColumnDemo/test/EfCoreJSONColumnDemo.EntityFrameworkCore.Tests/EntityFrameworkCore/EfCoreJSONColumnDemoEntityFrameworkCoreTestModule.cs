using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Volo.Abp;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Sqlite;
using Volo.Abp.Modularity;

namespace EfCoreJSONColumnDemo.EntityFrameworkCore;

[DependsOn(
    typeof(EfCoreJSONColumnDemoEntityFrameworkCoreModule),
    typeof(EfCoreJSONColumnDemoTestBaseModule),
    typeof(AbpEntityFrameworkCoreSqliteModule)
    )]
public class EfCoreJSONColumnDemoEntityFrameworkCoreTestModule : AbpModule
{
    private const string ConnectionString =
        "Server=(LocalDb)\\MSSQLLocalDB;Database=EfCoreJSONColumnDemoTest;Trusted_Connection=True;TrustServerCertificate=True";
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        ConfigureSqlServer(context.Services);
    }

    private void ConfigureSqlServer(IServiceCollection services)
    {
        CreateDatabase();

        services.Configure<AbpDbContextOptions>(options =>
        {
            options.Configure(context =>
            {
                context.DbContextOptions.UseSqlServer(ConnectionString);
            });
        });
    }

    public override void OnApplicationShutdown(ApplicationShutdownContext context)
    {
        var options = new DbContextOptionsBuilder<EfCoreJSONColumnDemoDbContext>()
            .UseSqlServer(ConnectionString)
            .Options;
        using (var db = new EfCoreJSONColumnDemoDbContext(options))
        {
            db.Database.EnsureDeleted();
        }
    }

    private static void CreateDatabase()
    {

        var options = new DbContextOptionsBuilder<EfCoreJSONColumnDemoDbContext>()
            .UseSqlServer(ConnectionString)
            .Options;

        using (var context = new EfCoreJSONColumnDemoDbContext(options))
        {
            context.Database.EnsureCreated();
        }
    }
}
