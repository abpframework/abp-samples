using ModularCrm.Products.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ModularCrm.Ordering.Data;
using ModularCrm.Ordering.Entities;
using ModularCrm.Products;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore.Modeling;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.BlobStoring.Database.EntityFrameworkCore;
using Volo.Abp.DependencyInjection;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement.EntityFrameworkCore;

namespace ModularCrm.Data;

[ReplaceDbContext(typeof(IProductsDbContext))]
[ReplaceDbContext(typeof(IOrderingDbContext))]
public class ModularCrmDbContext :
    AbpDbContext<ModularCrmDbContext>,
    IProductsDbContext,
    IOrderingDbContext //NEW: IMPLEMENT THE INTERFACE
{
    public const string DbTablePrefix = "App";
    public const string DbSchema = null;

    public DbSet<Product> Products { get; set; }
    public DbSet<Order> Orders { get; set; } //NEW: ADD DBSET PROPERTY

    public ModularCrmDbContext(DbContextOptions<ModularCrmDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.ConfigureProducts();

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
        
        builder.ConfigureProducts();
        builder.ConfigureOrdering();
    }
}

