using AbpAiChat.Entities;
using Microsoft.EntityFrameworkCore;
using Volo.Abp.EntityFrameworkCore;
using Volo.Abp.AuditLogging.EntityFrameworkCore;
using Volo.Abp.BackgroundJobs.EntityFrameworkCore;
using Volo.Abp.BlobStoring.Database.EntityFrameworkCore;
using Volo.Abp.FeatureManagement.EntityFrameworkCore;
using Volo.Abp.Identity.EntityFrameworkCore;
using Volo.Abp.OpenIddict.EntityFrameworkCore;
using Volo.Abp.PermissionManagement.EntityFrameworkCore;
using Volo.Abp.SettingManagement.EntityFrameworkCore;
using Volo.Abp.TenantManagement.EntityFrameworkCore;

namespace AbpAiChat.Data;

public class AbpAiChatDbContext : AbpDbContext<AbpAiChatDbContext>
{

    public const string DbTablePrefix = "App";
    public const string DbSchema = null;

    public DbSet<IngestedDocument> Documents { get; set; } = default!;
    public DbSet<IngestedRecord> Records { get; set; } = default!;


    public AbpAiChatDbContext(DbContextOptions<AbpAiChatDbContext> options)
        : base(options)
    {
    }

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

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

        builder.Entity<IngestedDocument>()
            .HasMany(d => d.Records)
            .WithOne()
            .HasForeignKey(r => r.DocumentId)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
