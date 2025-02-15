using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using ModularCrm.Products;
using ModularCrm.Products.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;

namespace ModularCrm.Data;

public abstract class DesignTimeDbContextFactory<TDbContext> : IDesignTimeDbContextFactory<TDbContext>
    where TDbContext : AbpDbContext<TDbContext>
{
    private readonly string _connectionStringName;

    protected DesignTimeDbContextFactory(string connectionStringName)
    {
        _connectionStringName = connectionStringName;
    }

    public TDbContext CreateDbContext(string[] args)
    {
        ModularCrmEfCoreEntityExtensionMappings.Configure();
        var configuration = BuildConfiguration();

        var builder = new DbContextOptionsBuilder<TDbContext>().UseSqlServer(configuration.GetConnectionString(_connectionStringName), b =>
            {
                b.MigrationsAssembly("ModularCrm");
            });
        return (TDbContext)Activator.CreateInstance(typeof(TDbContext), builder.Options)!;
    }

    private static IConfigurationRoot BuildConfiguration()
    {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: false);

        return builder.Build();
    }
}

public class ModularCrmDbContextFactory : DesignTimeDbContextFactory<ModularCrmDbContext>
{
    public ModularCrmDbContextFactory()
        : base("Default")
    {
    }
}

public class ProductsDbContextDbContextDesignTimeFactory : DesignTimeDbContextFactory<ProductsDbContext>
{
    public ProductsDbContextDbContextDesignTimeFactory()
        : base(ProductsDbProperties.ConnectionStringName)
    {
    }
}
