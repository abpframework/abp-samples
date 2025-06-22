using ModularCrm.Ordering.Data;
using ModularCrm.Catalog.Data;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.BlobStoring.Database.EntityFrameworkCore;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement.EntityFrameworkCore;
using Volo.Abp.DependencyInjection;
using ModularCrm.Catalog;
using ModularCrm.Ordering;

namespace ModularCrm.Data;

[ReplaceDbContext(typeof(ICatalogDbContext))]
[ReplaceDbContext(typeof(IOrderingDbContext))]
public class ModularCrmDbContext : AbpDbContext<ModularCrmDbContext>, ICatalogDbContext, IOrderingDbContext
{
    public const string DbTablePrefix = "App";
    public const string DbSchema = null;

    public DbSet<Product> Products { get; set; }
    public DbSet<Order> Orders { get; set; }

    public ModularCrmDbContext(DbContextOptions<ModularCrmDbContext> options)
        : base(options)
    {
    }    

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ConfigureOrdering();

        builder.ConfigureCatalog();

        /* Include modules to your migration db context */

        builder.ConfigureSettingManagement();
        builder.ConfigureBackgroundJobs();
        builder.ConfigureAuditLogging();
        builder.ConfigureFeatureManagement();
        builder.ConfigurePermissionManagement();
        builder.ConfigureBlobStoring();
        builder.ConfigureIdentity();
        builder.ConfigureOpenIddict();
        builder.ConfigureTenantManagement();
        
        /* Configure your own entities here */
    }
}

